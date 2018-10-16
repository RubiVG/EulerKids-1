module.exports.verifyAppVersion = appVersion => {
  return (req, res, next) => {
    const appVersionFront = req.body.appVersion;

    console.log("appVersionFront = ", appVersionFront)

    if (appVersion === appVersionFront) {
      return next();
    }

    return res.status(418).send({
      message: "Euler Kids has a new version. Please update to continue"
    });
  };
};
