module.exports.updateRatings = (_, db, MONGO, moment, errorMsg) => {
  return (req, res) => {
    const username = req.body.username;
    const subject = req.body.subject;
    const exercise = req.body.exercise;
    const question = req.body.question;
    const questionId = _.get(question, "id", false);
    const rating = req.body.rating;
    const correct = req.body.correct;
    const time = req.body.time;
    const exerciseName = req.body.exerciseName;
    const skill = req.body.skill;
    const grade = req.body.grade;
    const answerData = req.body.answerData;
    const idMaster = (question, questionId) => {
      return !questionId ? question : questionId;
    };
    const role = req.body.role;
    const skillName = req.body.skillName;
    const subjectName = req.body.subjectName;
    const date = moment().format("YYYY-MM-DD");

    return Promise.all([
      MONGO.updateUserRating(
        db.get(),
        subject,
        username,
        exercise,
        rating,
        time,
        idMaster(question, questionId),
        answerData,
        skill,
        exerciseName,
        grade,
        correct,
        role,
        skillName,
        subjectName
      ),
      MONGO.updateQuestionRating(
        db.get(),
        exercise,
        idMaster(question, questionId),
        time,
        answerData,
        exerciseName,
        skill,
        subject,
        grade,
        correct
      ),
      MONGO.userTotalUsage(
        db.get(),
        username,
        time,
        subject,
        grade,
        date,
        role,
        skill,
        exercise,
        correct
      ),
      MONGO.appTotalUsage(
        db.get(),
        time,
        correct,
        grade,
        subject,
        subjectName,
        skill,
        skillName,
        exercise,
        exerciseName
      ),
      MONGO.appDailyUsage(
        db.get(),
        time,
        correct,
        grade,
        subject,
        subjectName,
        skill,
        skillName,
        exercise,
        exerciseName,
        date
      )
    ])
      .then(() => {
        res.status(200).send();
      })
      .catch(err => {
        res.status(500).send(errorMsg.error500Gen());
      });
  };
};
