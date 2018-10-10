module.exports = {
  wrongPass1: "(╹‸╹) Wrong password",
  wrongPass2: "(╹‸╹) Wrong current password",
  wrongEmail: "New email must be different from the current one",
  error500Gen() {
    return {
      message: `⊙.☉ Houston, we have a problem. Your request could not be processed. Try it again later`,
      errors: [
        {
          msg: "Internal server error"
        }
      ]
    };
  },
  noQuestionAvailble() {
    return {
      message: `⊙.☉ Houston, we have a problem. Your request could not be processed. Try it again later`,
      errors: [
        {
          msg: "No data for that exercise"
        }
      ]
    };
  },
  emailRegistered(email) {
    return {
      message: `Email ${email} is already registered`,
      errors: []
    };
  },
  usernameRegistered(username) {
    return {
      message: `Username "${username}" is already registered`,
      errors: []
    };
  },
  notAuthorized() {
    return {
      message: `⊗ ﹏ ⊗ Not authorized`,
      errors: []
    };
  },
  errorUserPass() {
    return {
      message: `⊙﹏⊙ Incorrect username or password`,
      errors: []
    };
  },
  emailNotFound(email) {
    return {
      message: `(╹‸╹) Sorry, we can't find an account connected to ${email}`,
      errors: []
    };
  }
};
