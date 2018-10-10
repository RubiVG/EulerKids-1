const express = require("express");
const router = express.Router();
const app = require("express")();
const db = require("../database/dbModule");
const MONGO = require("./mongoDb");
const VAL = require("./security/validators");
const SECURITY = require("./security/appSecurity");
const errorMsg = require("./modules/errorMsg");
const successMsg = require("./modules/successMsg");
const verifyAppVersion = require("./security/verifyAppVersion");
const randomString = require("../utilities/random").randomString;
const RESET_PASS = require("./security/resetPassword");

// Libraries
const bcrypt = require("bcryptjs");
const { check } = require("express-validator/check");
const moment = require("moment");
moment.locale("es");
const uuidv4 = require("uuid/v4");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SGMAIL_APIKEY);

// const duration = require("moment-duration-format");
const _ = require("lodash");

// Controllers
const getAppVersion = require("./controllers/getAppVersion");
const signUp = require("./controllers/signUp");
const login = require("./controllers/login");
const sendLink = require("./controllers/resetPassword/sendLink");
const validateToken = require("./controllers/resetPassword/validateToken");
const setNewPassword = require("./controllers/resetPassword/setNewPassword");
const lessonLevels = require("./controllers/learn/lessonLevels");
const getProgress = require("./controllers/learn/getProgress");
const getQuestionDb = require("./controllers/learn/getQuestionDb");
const updateRatings = require("./controllers/learn/updateRatings");
const getEmail = require("./controllers/userSettings/getEmail");
const editEmail = require("./controllers/userSettings/editEmail");
const editPassword = require("./controllers/userSettings/editPassword");

router.get("/getAppVersion", getAppVersion.getAppVersion(SECURITY.appVersion));

router.post(
  "/signUp",
  VAL.signUp(check),
  VAL.validationMiddleware,
  signUp.signUp(db, MONGO, bcrypt, SECURITY, moment, errorMsg)
);

router.post(
  "/login",
  VAL.login(check),
  VAL.validationMiddleware,
  login.login(db, MONGO, bcrypt, SECURITY, errorMsg)
);

router.post(
  "/sendLink",
  VAL.sendLink(check),
  VAL.validationMiddleware,
  sendLink.sendLink(
    db,
    MONGO,
    randomString,
    RESET_PASS,
    uuidv4,
    moment,
    sgMail,
    app,
    errorMsg
  )
);

router.post(
  "/validateToken",
  RESET_PASS.verifyToken,
  RESET_PASS.decryptToken(db),
  VAL.validateToken(check),
  VAL.validationMiddleware,
  validateToken.validateToken
);

router.post(
  "/setNewPassword",
  RESET_PASS.verifyToken,
  RESET_PASS.decryptToken(db),
  VAL.setNewPassword(check),
  VAL.validationMiddleware,
  setNewPassword.setNewPassword(
    db,
    MONGO,
    bcrypt,
    moment,
    SECURITY,
    errorMsg,
    successMsg
  )
);

// Ejercicios
router.post(
  "/lessonLevels",
  SECURITY.verifyToken(db),
  verifyAppVersion.verifyAppVersion(SECURITY.appVersion),
  VAL.lessonLevels(check),
  VAL.validationMiddleware,
  lessonLevels.lessonLevels(VAL, db, MONGO)
);

router.post(
  "/getProgress",
  SECURITY.verifyToken(db),
  verifyAppVersion.verifyAppVersion(SECURITY.appVersion),
  VAL.getProgress(check),
  VAL.validationMiddleware,
  getProgress.getProgress(db, MONGO)
);

router.post(
  "/exercises/:subject/:exercise",
  verifyAppVersion.verifyAppVersion(SECURITY.appVersion),
  VAL.getQuestionUserNull(check),
  VAL.validationMiddlewareSimple,
  (req, res, next) => {
    const username = req.body.username;

    if (!username) {
      getQuestionDb.getQuestionDb(req, res, next);
    } else {
      next();
    }
  },
  SECURITY.verifyToken(db),
  VAL.getQuestionDb(check),
  VAL.validationMiddlewareSimple,
  getQuestionDb.getQuestionDb
);

router.post(
  "/updateRatings",
  SECURITY.verifyToken(db),
  verifyAppVersion.verifyAppVersion(SECURITY.appVersion),
  VAL.updateRatings(check),
  VAL.validationMiddlewareSimple,
  updateRatings.updateRatings(_, db, MONGO, moment, errorMsg)
);

// Settings
router.post(
  "/getEmail",
  SECURITY.verifyToken(db),
  verifyAppVersion.verifyAppVersion(SECURITY.appVersion),
  VAL.getEmail(check),
  VAL.validationMiddlewareSimple,
  getEmail.getEmail(db, MONGO, _, errorMsg)
);

router.post(
  "/editEmail",
  SECURITY.verifyToken(db),
  verifyAppVersion.verifyAppVersion(SECURITY.appVersion),
  VAL.editEmail(check),
  VAL.validationMiddleware,
  editEmail.editEmail(db, MONGO, bcrypt, errorMsg, successMsg)
);

router.post(
  "/editPassword",
  SECURITY.verifyToken(db),
  verifyAppVersion.verifyAppVersion(SECURITY.appVersion),
  VAL.editPassword(check),
  VAL.validationMiddleware,
  editPassword.editPassword(db, MONGO, bcrypt, errorMsg, successMsg)
);

module.exports = router;
