module.exports.deleteAccount = (db, MONGO, bcrypt, moment, errorMsg) => {
  return (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

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

        return MONGO.deleteAccount(db.get(), username, moment);
      })
      .then(() => {
        res.status(200).send();
      })
      .catch(err => {
        const messages = err => {
          return err.status === 422
            ? { message: err.message }
            : errorMsg.error500Gen();
        };

        res.status(err.status || 500).send(messages(err));
      });
  };
};
