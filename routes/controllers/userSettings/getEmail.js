module.exports.getEmail = (db, MONGO, _, errorMsg) => {
  return (req, res) => {
    const username = req.body.username;

    MONGO.findUsername(db.get(), username)
      .then(docs => {
        const email = _.get(docs, "email", null);

        res.status(200).send({
          email: email
        });
      })
      .catch(err => {
        res.status(500).send(errorMsg.error500Gen());
      });
  };
};
