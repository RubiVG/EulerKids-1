module.exports.getAppVersion = appVersion => {
  return (req, res) => {
    res.status(200).send({
      appVersion: appVersion
    });
  };
};
