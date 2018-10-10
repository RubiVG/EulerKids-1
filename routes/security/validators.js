const { validationResult } = require("express-validator/check");

const VAL = {
  validationErrors(req) {
    const errors = validationResult(req);
    //console.log(errors.array());
    return !errors.isEmpty();
  },
  validationMiddleware(req, res, next) {
    if (VAL.validationErrors(req)) {
      return res.status(422).send({
        message:
          "⊙.☉ Houston, we have a problem. Your request could not be processed:",
        errors: req.validationErrors()
      });
    }

    next();
  },
  validationMiddlewareSimple(req, res, next) {
    if (VAL.validationErrors(req)) {
      return res.status(422).send({
        message: `⊙.☉ Houston, we have a problem. Your request could not be processed:`,
        errors: [
          {
            msg: "Validation errors"
          }
        ]
      });
    }

    next();
  },
  signUp(check) {
    return [
      check("username")
        .isString()
        .withMessage("Username has invalid characters")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Username must be at least 6 characters"),
      check("password")
        .isString()
        .withMessage("Password has invalid characters")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters"),
      check("email")
        .isEmail()
        .withMessage("Must be a valid email"),
      check("appVersion")
        .exists()
        .withMessage("The App version you sent has incomplete data")
    ];
  },
  login(check) {
    return [
      check("username")
        .isString()
        .withMessage("Username has invalid characters")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Username must be at least 6 characters"),
      check("password")
        .isString()
        .withMessage("Password has invalid characters")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters"),
      check("appVersion")
        .exists()
        .withMessage("The App version you sent has incomplete data")
    ];
  },
  lessonLevels(check) {
    return [
      check("token").isJWT(),
      check("role")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("username")
        .isString()
        .isLength({ min: 6 }),
      check("subject")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("grade")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("skill")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("appVersion").exists()
    ];
  },
  getProgress(check) {
    return [
      check("token").isJWT(),
      check("role")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("username")
        .isString()
        .isLength({ min: 6 }),
      check("subject")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("grade")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("skill")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("lesson")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("appVersion").exists()
    ];
  },
  getQuestionUserNull(check) {
    return [
      check("subject")
        .isString()
        .trim()
        .custom(value => {
          return value.length;
        }),
      check("exercise")
        .isString()
        .trim()
        .custom(value => {
          return value.length;
        }),
      check("exerciseName")
        .isString()
        .trim()
        .custom(value => {
          return value.length;
        }),
      check("grade")
        .isString()
        .trim()
        .custom(value => {
          return value.length;
        }),
      check("skill")
        .isString()
        .trim()
        .custom(value => {
          return value.length;
        }),
      check("skillName")
        .isString()
        .trim()
        .custom(value => {
          return value.length;
        }),
      check("subjectName")
        .isString()
        .trim()
        .custom(value => {
          return value.length;
        }),
      check("appVersion").exists()
    ];
  },
  getQuestionDb(check) {
    return [
      check("token").isJWT(),
      check("role")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("username")
        .isString()
        .isLength({ min: 6 })
    ];
  },
  updateRatings(check) {
    return [
      check("token").isJWT(),
      check("username")
        .isString()
        .isLength({ min: 6 }),
      check("subject")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("exercise")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("question").exists(),
      check("rating").isNumeric(),
      check("correct").isBoolean(),
      check("time")
        .exists()
        .isNumeric(),
      check("exerciseName")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("skill")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("grade")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("answerData").exists(),
      check("role")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("skillName")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("subjectName")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("appVersion").exists()
    ];
  },
  sendLink(check) {
    return [
      check("email")
        .isEmail()
        .withMessage("Must be a valid email"),
      check("appVersion")
        .exists()
        .withMessage("The App version you sent has incomplete data")
    ];
  },
  validateToken(check) {
    return [
      check("token")
        .isJWT()
        .withMessage("Incorrect security token")
    ];
  },
  setNewPassword(check) {
    return [
      check("token")
        .isJWT()
        .withMessage("Incorrect security token"),
      check("username")
        .isString()
        .withMessage("Username has invalid characters")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Username must be at least 6 characters"),
      check("newPassword")
        .isString()
        .withMessage("Password has invalid characters")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters"),
      check("confirmPassword")
        .isString()
        .withMessage("Password has invalid characters")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters")
        .custom((value, { req, loc, path }) => {
          if (value !== req.body.newPassword) {
            throw new Error("Passwords must be identical");
          } else {
            return value;
          }
        })
        .withMessage("Passwords must be identical"),
      check("appVersion")
        .exists()
        .withMessage("The App version you sent has incomplete data")
    ];
  },
  getEmail(check) {
    return [
      check("token").isJWT(),
      check("role")
        .isString()
        .custom(value => {
          return value.length;
        }),
      check("username")
        .isString()
        .isLength({ min: 6 }),
      check("appVersion").exists()
    ];
  },
  editEmail(check) {
    return [
      check("token")
        .isJWT()
        .withMessage("Incorrect security token"),
      check("role")
        .isString()
        .withMessage("Role has invalid characters")
        .custom(value => {
          return value.length;
        })
        .withMessage("Role can't be empty"),
      check("username")
        .isString()
        .withMessage("Username has invalid characters")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Username must be at least 6 characters"),
      check("password")
        .isString()
        .withMessage("Password has invalid characters")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters"),
      check("newEmail")
        .isEmail()
        .withMessage("Must be a valid email"),
      check("appVersion")
        .exists()
        .withMessage("The App version you sent has incomplete data")
    ];
  },
  editPassword(check) {
    return [
      check("token")
        .isJWT()
        .withMessage("Incorrect security token"),
      check("role")
        .isString()
        .withMessage("Role has invalid characters")
        .custom(value => {
          return value.length;
        })
        .withMessage("Role can't be empty"),
      check("username")
        .isString()
        .withMessage("Username has invalid characters")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Username must be at least 6 characters"),
      check("password")
        .isString()
        .withMessage("Current password has invalid characters")
        .isLength({ min: 8 })
        .withMessage("Current password must be at least 8 characters"),
      check("newPassword")
        .isString()
        .withMessage("New password has invalid characters")
        .isLength({ min: 8 })
        .withMessage("New Password must be at least 8 characters"),
      check("confirmPassword")
        .isString()
        .withMessage("Confirm password has invalid characters")
        .isLength({ min: 8 })
        .withMessage("Confirm password must be at least 8 characters")
        .custom((value, { req, loc, path }) => {
          if (value !== req.body.newPassword) {
            throw new Error("Passwords must be identical");
          } else {
            return value;
          }
        })
        .withMessage("Passwords must be identical"),
      check("appVersion")
        .exists()
        .withMessage("The App version you sent has incomplete data")
    ];
  }
};

module.exports = VAL;
