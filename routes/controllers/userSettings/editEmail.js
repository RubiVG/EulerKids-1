module.exports.editEmail = (db, MONGO, bcrypt, errorMsg, successMsg) => {
  return (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newEmail = req.body.newEmail;

    MONGO.findUsername(db.get(), username)
      .then(docs => {
        let hash = docs.password;
        res.locals.docs = docs;

        return bcrypt.compare(password, hash);
      })
      .then(isMatch => {
        if (!isMatch) {
          throw { status: 422, message: errorMsg.wrongPass1 };
        }

        const currentEmail = res.locals.docs.email;

        if (currentEmail === newEmail) {
          throw {
            status: 422,
            message: errorMsg.wrongEmail
          };
        }

        return MONGO.editEmail(db.get(), username, newEmail);
      })
      .then(docs => {
        const email = docs.value.email;

        res.status(200).send({
          email: email,
          message: successMsg.emailEditSuccess
        });
      })
      .catch(err => {
        const messages = err => {
          if (err.errmsg) {
            if (err.errmsg.includes("@")) {
              return errorMsg.emailRegistered(newEmail);
            }
          }

          return err.status === 422
            ? { message: err.message }
            : errorMsg.error500Gen();
        };

        res.status(err.status || 500).send(messages(err));
      });
  };
};
