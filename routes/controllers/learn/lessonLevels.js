module.exports.lessonLevels = (VAL, db, MONGO) => {
  return (req, res) => {
    const username = req.body.username;
    const subject = req.body.subject;
    const grade = req.body.grade;
    const skill = req.body.skill;

    console.log({ username, subject, grade, skill });

    MONGO.findSkills(db.get(), subject, username, grade, skill)
      .then(docs => {
        const lessonsName = docs.map(e => {
          return {
            lesson: e.exerciseName,
            rating: e.rating
          };
        });

        res.status(200).send({
          lessonsName
        });
      })
      .catch(err => {
        console.log(err);
        return res.status(500).send({ message: "Error al buscar lecciones" });
      });
  };
};
