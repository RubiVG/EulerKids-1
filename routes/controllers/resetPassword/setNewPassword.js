module.exports.setNewPassword = (
  db,
  MONGO,
  bcrypt,
  moment,
  SECURITY,
  errorMsg,
  successMsg
) => {
  return (req, res) => {
    const username = res.locals.username;
    const newPassword = req.body.newPassword;

    return MONGO.changePassword(db.get(), username, newPassword, bcrypt, moment)
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
          token: token,
          message: successMsg.passResetSuccess
        });
      })
      .catch(err => {
        res.status(500).send(errorMsg.error500Gen());
      });
  };
};
