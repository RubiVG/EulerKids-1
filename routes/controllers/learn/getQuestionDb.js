const _ = require("lodash");
const db = require("../../../database/dbModule");
const MONGO = require("../../mongoDb");
const HELP = require("../../helpers");
const exercisesData = require("../../exercisesData/exercisesData");
const errorMsg = require("../../modules/errorMsg");

module.exports.getQuestionDb = (req, res) => {
  console.log("getQuestionDb");

  const role = req.body.role;
  const username = req.body.username;
  const subject = req.params.subject;
  const exercise = req.params.exercise;
  const exerciseName = req.body.exerciseName;
  const grade = req.body.grade;
  const skill = req.body.skill;
  const skillName = req.body.skillName;
  const subjectName = req.body.subjectName;
  const data = _.get(exercisesData, exercise, false);
  const ratingDefault = 500;

  if (!data) {
    return res.status(500).send(errorMsg.noQuestionAvailble());
  }

  if (!username) {
    return data()
      .then(pool => {
        const questionsRating800 = HELP.questionsRatingFilter(
          ratingDefault,
          pool
        );
        const randomQuestion = HELP.shuffleFisher(questionsRating800);
        const finalQuestion = _.head(randomQuestion);
        const finalQuestionRating = _.get(finalQuestion, "rating", false);

        return res.status(200).send({
          question: finalQuestion,
          rating: ratingDefault,
          questionRating: finalQuestionRating
        });
      })
      .catch(err => {
        res.status(500).send(errorMsg.error500Gen());
      });
  }

  return Promise.all([
    MONGO.findRatingUsuarioEjer(db.get(), subject, username, exercise),
    data()
  ])
    .then(allData => {
      const current = _.chain(allData)
        .nth(0)
        .get("current", false)
        .value();
      const rating = _.chain(allData)
        .nth(0)
        .get("rating", false)
        .value();
      const answered = _.chain(allData)
        .nth(0)
        .get("answered", [])
        .value();
      const pool = _.nth(allData, 1);
      res.locals.ratingMaster = HELP.ratingMaster(rating, ratingDefault);

      if (current) {
        const questionCurrent = _.find(pool, e => {
          return e.id === current;
        });
        res.locals.questionRating = _.get(questionCurrent, "rating", false);

        if (!rating) {
          throw {
            status: 200,
            question: questionCurrent,
            rating: ratingDefault,
            questionRating: res.locals.questionRating
          };
        }

        throw {
          status: 200,
          question: questionCurrent,
          rating: rating,
          questionRating: res.locals.questionRating
        };
      }

      // No current ⬇
      const notAnsweredPool = pool.filter(e => !answered.includes(e.id));
      const userRatingQuestions = HELP.questionsRatingFilter(
        res.locals.ratingMaster,
        notAnsweredPool
      );

      if (userRatingQuestions.length) {
        const randomQuestions = HELP.shuffleFisher(userRatingQuestions);
        const finalQuestion = _.head(randomQuestions);
        const randomRatingQuestion = _.get(finalQuestion, "rating", false);

        // Obtenemos la data de la pregunta. Siempre en el Pool
        res.locals.finalQuestion = finalQuestion;

        // Rating de la pregunta final
        res.locals.questionRating = randomRatingQuestion;
      }

      if (!userRatingQuestions.length) {
        const userRatingQuestionsPool = HELP.questionsRatingFilter(
          res.locals.ratingMaster,
          pool
        );

        const randomQuestions = HELP.shuffleFisher(userRatingQuestionsPool);
        const finalQuestion = _.head(randomQuestions);
        const finalQuestionRating = _.get(finalQuestion, "rating", false);

        // Obtenemos la data de la pregunta. Siempre en el Pool
        res.locals.finalQuestion = finalQuestion;

        // Rating de la pregunta final
        res.locals.questionRating = finalQuestionRating;
      }

      return MONGO.setCurrent(
        db.get(),
        subject,
        username,
        grade,
        exercise,
        skill,
        exerciseName,
        _.get(res.locals.finalQuestion, "id", false),
        role,
        skillName,
        subjectName
      );
    })
    .then(() => {
      return res.status(200).send({
        question: res.locals.finalQuestion,
        rating: res.locals.ratingMaster,
        questionRating: res.locals.questionRating
      });
    })
    .catch(err => {
      // console.log("err = ", err);
      if (err.status === 200) {
        return res.status(err.status).send({
          question: err.question,
          rating: err.rating,
          questionRating: err.questionRating
        });
      }

      res.status(500).send(errorMsg.error500Gen());
    });
};
