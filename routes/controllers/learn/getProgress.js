module.exports.getProgress = (db, MONGO, _, HELP) => {
  return (req, res) => {
    const username = req.body.username;
    const subject = req.body.subject;
    const grade = req.body.grade;
    const skill = req.body.skill;
    const lesson = req.body.lesson + "-e";

    return Promise.all([
      MONGO.findTema(db.get(), subject, username, grade, skill, lesson),
      MONGO.findDailyPractice(db.get(), username)
    ])
      .then(docs => {
        const progress = _.chain(docs)
          .nth(0)
          .value()
          .map(e => {
            return {
              total: e.total,
              correct: e.correct,
              rating: e.rating,
              time: e.time
            };
          })
          .reduce((a, b) => {
            return b;
          }, []);
        const dailyPracticeFilter = _.chain(docs)
          .nth(1)
          .value()

          .filter(e => _.get(e, [grade, subject, skill, lesson]));
        const dailyPracticeFinal = HELP.dailyPractice(dailyPracticeFilter, _);

        res.status(200).send({
          progress: progress,
          dailyPractice: dailyPracticeFinal
        });
      })
      .catch(err => {
        res.status(500).send();
      });
  };
};
