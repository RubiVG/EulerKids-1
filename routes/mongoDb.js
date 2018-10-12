module.exports = {
  createIndexUser(db) {
    const collection = db.collection("users");

    return collection.createIndex(
      {
        username: 1
      },
      {
        unique: true
      }
    );
  },
  createIndexEmail(db) {
    const collection = db.collection("users");

    return collection.createIndex(
      {
        email: 1
      },
      {
        unique: true
      }
    );
  },
  createIndexMath(db) {
    const collection = db.collection("math");

    return collection.createIndex(
      {
        username: 1,
        subject: 1,
        grade: 1,
        skill: 1,
        exercise: 1
      },
      {
        unique: true
      }
    );
  },
  createIndexQuestions(db) {
    let collection = db.collection("questions");

    return collection.createIndex(
      {
        exercise: 1,
        id: 1,
        exerciseName: 1,
        skill: 1,
        subject: 1,
        grade: 1
      },
      {
        unique: true
      }
    );
  },
  createIndexUserTotalUsage(db) {
    const collection = db.collection("userTotalUsage");

    return collection.createIndex(
      {
        username: 1,
        date: 1,
        role: 1
      },
      {
        unique: true
      }
    );
  },
  createIndexAppDailyUsage(db) {
    const collection = db.collection("appDailyUsage");

    return collection.createIndex(
      {
        date: 1
      },
      {
        unique: true
      }
    );
  },
  createUser(db, username, password, email, bcrypt, moment) {
    const collection = db.collection("users");

    return bcrypt
      .genSalt(10)
      .then(salt => {
        return bcrypt.hash(password, salt);
      })
      .then(hash => {
        return collection.insertOne({
          username,
          email,
          role: "user",
          password: hash,
          createdAt: moment().format("YYYY-MM-DD, h:mm:ss a"),
          banned: false
        });
      });
  },
  findUsername(db, username) {
    const collection = db.collection("users");

    return collection.findOne({
      username: username
    });
  },
  findSkills(db, subject, username, grade, skill) {
    const collection = db.collection(subject);

    return collection
      .find({
        username: username,
        subject: subject,
        grade: grade,
        skill: skill
      })
      .toArray();
  },
  findTema(db, subject, username, grade, skill, exercise) {
    const collection = db.collection(subject);

    return collection
      .find({
        username: username,
        subject: subject,
        grade: grade,
        skill: skill,
        exercise: exercise
      })
      .toArray();
  },
  findRatingUsuarioEjer(db, subject, username, exercise) {
    const collection = db.collection(subject);

    return collection.findOne({
      username: username,
      exercise: exercise
    });
  },
  setCurrent(
    db,
    subject,
    username,
    grade,
    exercise,
    skill,
    exerciseName,
    preguntaId,
    role,
    skillName,
    subjectName
  ) {
    const collection = db.collection(subject);

    return collection.updateOne(
      {
        username: username,
        subject: subject,
        grade: grade,
        skill: skill,
        exercise: exercise,
        exerciseName: exerciseName,
        role: role,
        skillName: skillName,
        subjectName: subjectName
      },
      {
        $set: {
          current: preguntaId
        }
      },
      {
        upsert: true
      }
    );
  },
  updateUserRating(
    db,
    subject,
    username,
    exercise,
    rating,
    time,
    questionId,
    userAnswer,
    skill,
    exerciseName,
    grade,
    correct,
    role,
    skillName,
    subjectName
  ) {
    const collection = db.collection(subject);
    const pathCorrectAnswer = correct => {
      return correct ? "correct" : "incorrect";
    };
    const addToSet = (correct, questionId, userAnswer) => {
      return correct
        ? {
            answered: questionId
          }
        : {
            answered: questionId,
            wrongAnswered: {
              id: questionId,
              answer: userAnswer
            }
          };
    };

    return collection.updateOne(
      {
        username: username,
        subject: subject,
        grade: grade,
        skill: skill,
        exercise: exercise,
        exerciseName: exerciseName,
        role: role,
        skillName: skillName,
        subjectName: subjectName
      },
      {
        $set: {
          rating: rating
        },
        $inc: {
          total: 1,
          time: time,
          [pathCorrectAnswer(correct)]: 1
        },
        $unset: {
          current: ""
        },
        $addToSet: addToSet(correct, questionId, userAnswer)
      },
      {
        upsert: true
      }
    );
  },
  updateQuestionRating(
    db,
    exercise,
    id,
    time,
    userAnswered,
    exerciseName,
    skill,
    subject,
    grade,
    correct
  ) {
    const collection = db.collection("questions");

    const update = correct => {
      return correct
        ? {
            $inc: {
              total: 1,
              time: time,
              correct: 1
            }
          }
        : {
            $inc: {
              total: 1,
              time: time,
              incorrect: 1,
              [`incorrectAnswers.${userAnswered}`]: 1
            }
          };
    };

    return collection.updateOne(
      {
        exercise: exercise,
        id: id,
        exerciseName: exerciseName,
        skill: skill,
        subject: subject,
        grade: grade
      },
      update(correct),
      {
        upsert: true
      }
    );
  },
  userTotalUsage(
    db,
    username,
    time,
    subject,
    grade,
    date,
    role,
    skill,
    exercise,
    correct
  ) {
    let collection = db.collection("userTotalUsage");
    const pathCorrectAnswer = correct => {
      return correct ? "correct" : "incorrect";
    };

    return collection.updateOne(
      {
        username: username,
        date: date,
        role: role
      },
      {
        $inc: {
          total: 1,
          time: time,
          [pathCorrectAnswer(correct)]: 1,
          [`${subject}.total`]: 1,
          [`${subject}.${pathCorrectAnswer(correct)}`]: 1,
          [`${subject}.time`]: time,
          [`${grade}.total`]: 1,
          [`${grade}.${pathCorrectAnswer(correct)}`]: 1,
          [`${grade}.time`]: time,
          [`${grade}.${subject}.total`]: 1,
          [`${grade}.${subject}.${pathCorrectAnswer(correct)}`]: 1,
          [`${grade}.${subject}.time`]: time,
          // Tema
          [`${grade}.${subject}.${skill}.total`]: 1,
          [`${grade}.${subject}.${skill}.${pathCorrectAnswer(correct)}`]: 1,
          [`${grade}.${subject}.${skill}.time`]: time,
          // ejercicio
          [`${grade}.${subject}.${skill}.${exercise}.total`]: 1,
          [`${grade}.${subject}.${skill}.${exercise}.${pathCorrectAnswer(
            correct
          )}`]: 1,
          [`${grade}.${subject}.${skill}.${exercise}.time`]: time
        }
      },
      {
        upsert: true
      }
    );
  },
  appTotalUsage(
    db,
    time,
    correcta,
    grade,
    subject,
    subjectName,
    skill,
    skillName,
    exercise,
    exerciseName
  ) {
    const collection = db.collection("appTotalUsage");
    const pathCorrectAnswer = correct => {
      return correct ? "correct" : "incorrect";
    };
    const pathPrimariaBajaAlta = grade => {
      if (["first-grade", "second-grade", "third-grade"].includes(grade)) {
        return "primariaBaja";
      }

      return "primariaAlta";
    };

    return collection.updateOne(
      {
        id: "app"
      },
      {
        $inc: {
          total: 1,
          time: time,
          [pathCorrectAnswer(correcta)]: 1,
          [`${subject}.total`]: 1,
          [`${subject}.${pathCorrectAnswer(correcta)}`]: 1,
          [`${subject}.time`]: time,
          [`${grade}.total`]: 1,
          [`${grade}.${pathCorrectAnswer(correcta)}`]: 1,
          [`${grade}.time`]: time,
          [`${grade}.${subject}.total`]: 1,
          [`${grade}.${subject}.${pathCorrectAnswer(correcta)}`]: 1,
          [`${grade}.${subject}.time`]: time,
          // Primaria Baja-Alta
          [`${pathPrimariaBajaAlta(grade)}.total`]: 1,
          [`${pathPrimariaBajaAlta(grade)}.time`]: time,
          [`${pathPrimariaBajaAlta(grade)}.${pathCorrectAnswer(correcta)}`]: 1,
          [`exercises.${exerciseName}.total`]: 1,
          [`exercises.${exerciseName}.time`]: time,
          [`exercises.${exerciseName}.${pathCorrectAnswer(correcta)}`]: 1
        },
        $set: {
          [`exercises.${exerciseName}.grade`]: grade,
          [`exercises.${exerciseName}.subject`]: subject,
          [`exercises.${exerciseName}.subjectName`]: subjectName,
          [`exercises.${exerciseName}.exercise`]: exercise,
          [`exercises.${exerciseName}.exerciseName`]: exerciseName,
          [`exercises.${exerciseName}.skill`]: skill,
          [`exercises.${exerciseName}.skillName`]: skillName
        }
      },
      {
        upsert: true
      }
    );
  },
  appDailyUsage(
    db,
    time,
    correcta,
    grade,
    subject,
    subjectName,
    skill,
    skillName,
    exercise,
    exerciseName,
    date
  ) {
    const collection = db.collection("appDailyUsage");
    const pathCorrectAnswer = correct => {
      return correct ? "correct" : "incorrect";
    };
    const pathPrimariaBajaAlta = grade => {
      if (["first-grade", "second-grade", "third-grade"].includes(grade)) {
        return "primariaBaja";
      }
      return "primariaAlta";
    };

    return collection.updateOne(
      {
        date: date
      },
      {
        $inc: {
          total: 1,
          time: time,
          [pathCorrectAnswer(correcta)]: 1,
          [`${subject}.total`]: 1,
          [`${subject}.${pathCorrectAnswer(correcta)}`]: 1,
          [`${subject}.time`]: time,
          [`${grade}.total`]: 1,
          [`${grade}.${pathCorrectAnswer(correcta)}`]: 1,
          [`${grade}.time`]: time,
          [`${grade}.${subject}.total`]: 1,
          [`${grade}.${subject}.${pathCorrectAnswer(correcta)}`]: 1,
          [`${grade}.${subject}.time`]: time,
          // Primaria Baja-Alta
          [`${pathPrimariaBajaAlta(grade)}.total`]: 1,
          [`${pathPrimariaBajaAlta(grade)}.time`]: time,
          [`${pathPrimariaBajaAlta(grade)}.${pathCorrectAnswer(correcta)}`]: 1,
          [`exercises.${exerciseName}.total`]: 1,
          [`exercises.${exerciseName}.time`]: time,
          [`exercises.${exerciseName}.${pathCorrectAnswer(correcta)}`]: 1
        },
        $set: {
          [`exercises.${exerciseName}.grade`]: grade,
          [`exercises.${exerciseName}.subject`]: subject,
          [`exercises.${exerciseName}.subjectName`]: subjectName,
          [`exercises.${exerciseName}.exercise`]: exercise,
          [`exercises.${exerciseName}.exerciseName`]: exerciseName,
          [`exercises.${exerciseName}.skill`]: skill,
          [`exercises.${exerciseName}.skillName`]: skillName
        }
      },
      {
        upsert: true
      }
    );
  },
  findEmail(db, email) {
    const collection = db.collection("users");

    return collection.findOne({
      email: email
    });
  },
  editEmail(db, username, newEmail) {
    const collection = db.collection("users");

    return collection.findOneAndUpdate(
      {
        username: username
      },
      {
        $set: {
          email: newEmail
        }
      },
      {
        returnOriginal: false
      }
    );
  },
  changePasswordCreated(db, email, moment, encryptionKey) {
    const pathCreatedAt = "changePassword.createdAt";
    const pathEncryptionKey = "changePassword.encryptionKey";
    const pathCompleted = "changePassword.completed";
    const collection = db.collection("users");

    return collection.updateOne(
      {
        email: email
      },
      {
        $set: {
          [pathCreatedAt]: moment().format("YYYY-MM-DD, h:mm:ss a"),
          [pathEncryptionKey]: encryptionKey,
          [pathCompleted]: false
        }
      }
    );
  },
  changePassword(db, username, newPassword, bcrypt, moment) {
    const pathEncryptionKey = "changePassword.encryptionKey";
    const pathCompleted = "changePassword.completed";
    const pathChangedAt = "changePassword.changedAt";
    const collection = db.collection("users");

    return bcrypt
      .genSalt(10)
      .then(salt => {
        return bcrypt.hash(newPassword, salt);
      })
      .then(hash => {
        collection.updateOne(
          {
            username: username
          },
          {
            $set: {
              password: hash,
              [pathCompleted]: true,
              [pathChangedAt]: moment().format("YYYY-MM-DD, h:mm:ss a")
            },
            $unset: {
              [pathEncryptionKey]: ""
            }
          }
        );
      });
  },
  editPassword(db, username, newPassword, bcrypt) {
    const collection = db.collection("users");

    return bcrypt
      .genSalt(10)
      .then(salt => {
        return bcrypt.hash(newPassword, salt);
      })
      .then(hash => {
        collection.updateOne(
          {
            username: username
          },
          {
            $set: {
              password: hash
            }
          }
        );
      });
  },
  deleteAccount(db, username, moment) {
    const collection = db.collection("users");

    return collection.updateOne(
      {
        username: username
      },
      {
        $set: {
          deleted: true,
          deletedAt: moment().format("YYYY-MM-DD, h:mm:ss a")
        }
      }
    );
  }
};
