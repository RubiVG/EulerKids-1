const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const RESET_PASS = {
  TokenResetPassword: process.env.TOKEN_RESET_PASS,
  userCrypKey: process.env.USER_CRYP_KEY,
  emailCrypKey: process.env.EMAIL_CRYP_KEY,
  token(encryptUsername, encryptEmail, encryptEmailTokenSecret) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        {
          username: encryptUsername,
          email: encryptEmail,
          emailTokenSecret: encryptEmailTokenSecret
        },
        RESET_PASS.TokenResetPassword,
        {
          expiresIn: process.env.EXPIRES_IN_RESETPASS
        },
        (err, token) => {
          if (err) {
            reject(err);
          }

          return resolve(token);
        }
      );
    });
  },
  verifyToken(req, res, next) {
    const token = req.body.token;

    jwt.verify(token, RESET_PASS.TokenResetPassword, (err, decoded) => {
      if (err) {
        const message = error => {
          return error === "jwt expired"
            ? {
                message: "Link expired",
                errors: []
              }
            : {
                message: "Token error",
                errors: [
                  {
                    msg: error
                  }
                ]
              };
        };
        return res.status(401).send(message(err.message));
      }

      res.locals.decodedUsername = decoded.username;
      res.locals.decodedEmail = decoded.email;
      res.locals.decodedEmailTokenSecret = decoded.emailTokenSecret;

      next();
    });
  },
  decryptToken(db) {
    return (req, res, next) => {
      try {
        const username = RESET_PASS.decrypt(
          res.locals.decodedUsername,
          RESET_PASS.userCrypKey
        );
        const email = RESET_PASS.decrypt(
          res.locals.decodedEmail,
          RESET_PASS.emailCrypKey
        );
        const collection = db.get().collection("users");

        collection
          .findOne({
            username: username,
            email: email
          })
          .then(docs => {
            const key = docs.changePassword.encryptionKey;
            RESET_PASS.decrypt(res.locals.decodedEmailTokenSecret, key);

            if (!docs || docs.banned || docs.deleted) {
              throw { status: 401 };
            }

            res.locals.username = username;

            next();
          })
          .catch(err => {
            res.status(err.status || 401).send({
              message: "Invalid Link"
            });
          });
      } catch (err) {
        return res.status(401).send({
          message: "Invalid Link"
        });
      }
    };
  },
  encrypt(text, ENCRYPTION_KEY, IV_LENGTH) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv(
      "aes-256-cbc",
      new Buffer.from(ENCRYPTION_KEY),
      iv
    );
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString("hex") + ":" + encrypted.toString("hex");
  },
  decrypt(text, ENCRYPTION_KEY) {
    let textParts = text.split(":");
    let iv = new Buffer.from(textParts.shift(), "hex");
    let encryptedText = new Buffer.from(textParts.join(":"), "hex");
    let decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      new Buffer.from(ENCRYPTION_KEY),
      iv
    );
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  }
};

module.exports = RESET_PASS;
