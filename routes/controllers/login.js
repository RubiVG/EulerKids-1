module.exports.login = (db, MONGO, bcrypt, SECURITY, errorMsg) => {
  return (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    MONGO.findUsername(db.get(), username)
      .then(docs => {
        if (!docs) {
          throw { status: 422, message: errorMsg.errorUserPass() };
        }

        if (docs.banned || docs.deleted) {
          throw { status: 401, message: errorMsg.notAuthorized() };
        }

        let hash = docs.password;
        res.locals.docs = docs;

        return bcrypt.compare(password, hash);
      })
      .then(isMatch => {
        if (isMatch) {
          return SECURITY.token(res.locals.docs);
        }

        throw { status: 401, message: errorMsg.errorUserPass() };
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
        console.log(err.status)
        const message = err => {
          if (err.status === 500) {
            return errorMsg.error500Gen();
          }

          return err.message;
        };

        res.status(err.status || 500).send(message(err));
      });
  };
};
