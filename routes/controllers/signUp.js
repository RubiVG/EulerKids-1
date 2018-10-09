module.exports.signUp = (db, MONGO, bcrypt, SECURITY, moment, errorMsg) => {
  return (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    MONGO.createUser(db.get(), username, password, email, bcrypt, moment)
      .then(() => {
        return MONGO.findUsername(db.get(), username);
      })
      .then(docs => {
        res.locals.docs = docs;

        return SECURITY.token(docs);
      })
      .then(token => {
        const docs = res.locals.docs;

        return res.status(200).send({
          username: docs.username,
          role: docs.role,
          token: token
        });
      })
      .catch(err => {
        const messages = err => {
          if (err.errmsg) {
            if (err.errmsg.includes("@")) {
              return errorMsg.emailRegistered(email);
            }

            if (err.errmsg.includes("users")) {
              return errorMsg.usernameRegistered(username);
            }
          }

          return errorMsg.error500Gen();
        };

        res.status(err.status || 500).send(messages(err));
      });
  };
};
