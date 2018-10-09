module.exports.getProgress = (db, MONGO) => {
  return (req, res) => {
    // console.log("getProgress");

    const username = req.body.username;
    const subject = req.body.subject;
    const grade = req.body.grade;
    const skill = req.body.skill;
    const lesson = req.body.lesson + "-e"; // Para convertirlo en string de ejercicio

    MONGO.findTema(db.get(), subject,  username, grade, skill, lesson)
      .then(docs => {
        const progress = docs
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

        res.status(200).send({
          progress: progress
        });
      })
      .catch(err => {
        return res.status(500).send({ message: "Error al obtener progreso" });
      });
  };
};
