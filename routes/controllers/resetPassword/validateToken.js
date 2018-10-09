module.exports.validateToken = (req, res) => {
  res.status(200).send({
    username: res.locals.username
  });
};
