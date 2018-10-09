const jwt = require("jsonwebtoken");

const SECURITY = {
  appVersion: "0.02",
  secret: process.env.SECURITY_SECRET,
  token(docs) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        {
          username: docs.username,
          role: docs.role
        },
        SECURITY.secret,
        {
          expiresIn: process.env.EXPIRES_IN
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
  verifyToken(db) {
    return (req, res, next) => {
      let token = req.body.token;

      jwt.verify(token, SECURITY.secret, (err, decoded) => {
        if (err) {
          const message = error => {
            return error === "jwt expired"
              ? {
                  message: "Your session has expired. Please log in again.",
                  errors: []
                }
              : {
                  message:
                    "Security alert. Your request could not be processed.",
                  errors: [
                    {
                      msg: error
                    }
                  ]
                };
          };
          return res.status(403).send(message(err.message));
        }

        let collection = db.get().collection("users");
        collection
          .findOne({
            username: decoded.username
          })
          .then(docs => {
            const message = {
              message: "⊗ ﹏ ⊗ Not authorized",
              errors: [
                {
                  msg: "User not found"
                }
              ]
            };

            if (!docs || docs.banned || docs.deleted) {
              throw { status: 401, message: message };
            }

            next();
          })
          .catch(err => {
            res.status(err.status).send(err.message);
          });
      });
    };
  }
};

module.exports = SECURITY;
