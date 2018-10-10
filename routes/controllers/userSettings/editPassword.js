module.exports.editPassword = (db, MONGO, bcrypt, errorMsg, successMsg) => {
  return (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newPassword = req.body.newPassword;

    MONGO.findUsername(db.get(), username)
      .then(docs => {
        let hash = docs.password;
        res.locals.docs = docs;

        return bcrypt.compare(password, hash);
      })
      .then(isMatch => {
        if (!isMatch) {
          throw { status: 422, message: errorMsg.wrongPass2 };
        }

        return MONGO.editPassword(db.get(), username, newPassword, bcrypt);
      })
      .then(() => {
        return res.status(200).send({
          message: successMsg.passEditSuccess
        });
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
