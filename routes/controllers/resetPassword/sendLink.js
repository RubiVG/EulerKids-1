module.exports.sendLink = (
  db,
  MONGO,
  randomString,
  RESET_PASS,
  uuidv4,
  moment,
  sgMail,
  app,
  errorMsg
) => {
  return (req, res) => {
    const email = req.body.email;

    return MONGO.findEmail(db.get(), email)
      .then(docs => {
        if (!docs || docs.banned || docs.deleted) {
          throw { status: 422, message: errorMsg.emailNotFound(email) };
        }

        const username = docs.username;
        const encryptionKey = randomString(32);
        res.locals.encryptionKey = encryptionKey;
        const IV_LENGTH = 16;
        const encryptUsername = RESET_PASS.encrypt(
          username,
          RESET_PASS.userCrypKey,
          IV_LENGTH
        );
        const encryptEmail = RESET_PASS.encrypt(
          email,
          RESET_PASS.emailCrypKey,
          IV_LENGTH
        );
        const encryptEmailTokenSecret = RESET_PASS.encrypt(
          uuidv4(),
          encryptionKey,
          IV_LENGTH
        );

        return RESET_PASS.token(
          encryptUsername,
          encryptEmail,
          encryptEmailTokenSecret
        );
      })
      .then(token => {
        res.locals.tokenReset = token;

        return MONGO.changePasswordCreated(
          db.get(),
          email,
          moment,
          res.locals.encryptionKey
        );
      })
      .then(() => {
        const token = res.locals.tokenReset;
        const Link = env => {
          if (env === "development") {
            return "http://localhost:8080/#/reset/" + token;
          }
          return "https://www.eulerkids.com/#/reset/" + token;
        };
        const aTag = `<a href="${Link(app.get("env"))}">Reset password</a>`;
        const texto = "Click on the link to reset your password: ";
        const msg = {
          to: email,
          from: "no_reply@eulerkids.com",
          subject: "Reset password",
          html:
            '<img src="https://www.eulerkids.com/static/Email/rocketS.png"/> ' +
            texto +
            aTag
        };

        return sgMail.send(msg);
      })
      .then(() => {
        res.status(200).send({
          email: email
        });
      })
      .catch(err => {
        const messages = err => {
          if (err.status === 500) {
            return errorMsg.error500Gen();
          }

          return err.message;
        };

        res.status(err.status || 500).send(messages(err));
      });
  };
};
