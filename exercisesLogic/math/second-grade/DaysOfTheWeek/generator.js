const uuidv4 = require("uuid/v4");

const logic = {
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  answersBefore: [
    {
      day: "Monday",
      before: "Sunday"
    },
    {
      day: "Tuesday",
      before: "Monday"
    },
    {
      day: "Wednesday",
      before: "Tuesday"
    },
    {
      day: "Thursday",
      before: "Wednesday"
    },
    {
      day: "Friday",
      before: "Thursday"
    },
    {
      day: "Saturday",
      before: "Friday"
    },
    {
      day: "Sunday",
      before: "Saturday"
    }
  ],
  answersAfter: [
    {
      day: "Monday",
      after: "Tuesday"
    },
    {
      day: "Tuesday",
      after: "Wednesday"
    },
    {
      day: "Wednesday",
      after: "Thursday"
    },
    {
      day: "Thursday",
      after: "Friday"
    },
    {
      day: "Friday",
      after: "Saturday"
    },
    {
      day: "Saturday",
      after: "Sunday"
    },
    {
      day: "Sunday",
      after: "Monday"
    }
  ],
  before() {
    const questions = [];

    for (var i = 0; i < this.answersBefore.length; i++) {
      const questionDay = this.answersBefore[i].day;
      const correct = this.answersBefore[i].before;
      const availableDays = this.days.filter(
        e => e !== questionDay && e !== correct
      );

      for (var j = 0; j < availableDays.length; j++) {
        questions.push({
          preposition: "before",
          questionDay: questionDay,
          correct: correct,
          img: `bef${questionDay}.svg`,
          day1: correct,
          day2: availableDays[j],
          before: true,
          id: uuidv4(),
          rating: 800
        });
      }
    }

    return questions;
  },
  after() {
    const questions = [];

    for (var i = 0; i < this.answersAfter.length; i++) {
      const questionDay = this.answersAfter[i].day;
      const correct = this.answersAfter[i].after;
      const availableDays = this.days.filter(
        e => e !== questionDay && e !== correct
      );

      for (var j = 0; j < availableDays.length; j++) {
        questions.push({
          preposition: "after",
          questionDay: questionDay,
          correct: correct,
          img: `aft${questionDay}.svg`,
          day1: correct,
          day2: availableDays[j],
          after: true,
          id: uuidv4(),
          rating: 800
        });
      }
    }

    return questions;
  },
  yesterday() {
    const questions = [];

    for (var i = 0; i < this.answersBefore.length; i++) {
      const questionDay = this.answersBefore[i].day;
      const correct = this.answersBefore[i].before;
      const availableDays = this.days.filter(
        e => e !== questionDay && e !== correct
      );

      for (var j = 0; j < availableDays.length; j++) {
        questions.push({
          adverb: "yesterday",
          questionDay: questionDay,
          correct: correct,
          img: `yes${questionDay}.svg`,
          day1: correct,
          day2: availableDays[j],
          yesterday: true,
          id: uuidv4(),
          rating: 1200
        });
      }
    }

    return questions;
  },
  tomorrow() {
    const questions = [];

    for (var i = 0; i < this.answersAfter.length; i++) {
      const questionDay = this.answersAfter[i].day;
      const correct = this.answersAfter[i].after;
      const availableDays = this.days.filter(
        e => e !== questionDay && e !== correct
      );

      for (var j = 0; j < availableDays.length; j++) {
        questions.push({
          adverb: "tomorrow",
          questionDay: questionDay,
          correct: correct,
          img: `tom${questionDay}.svg`,
          day1: correct,
          day2: availableDays[j],
          tomorrow: true,
          id: uuidv4(),
          rating: 1200
        });
      }
    }

    return questions;
  },
  yesterday1800() {
    const questions = [];

    for (var i = 0; i < this.answersBefore.length; i++) {
      const questionDay = this.answersBefore[i].day;
      const correct = this.answersBefore[i].before;
      const availableDays = this.days.filter(
        e => e !== questionDay && e !== correct
      );

      for (var j = 0; j < availableDays.length; j++) {
        questions.push({
          adverb: "yesterday",
          questionDay: questionDay,
          correct: correct,
          img: `yes${questionDay}.svg`,
          day1: correct,
          day2: availableDays[j],
          yesterday: true,
          id: uuidv4(),
          rating: 1800
        });
      }
    }

    return questions;
  },
  tomorrow1800() {
    const questions = [];

    for (var i = 0; i < this.answersAfter.length; i++) {
      const questionDay = this.answersAfter[i].day;
      const correct = this.answersAfter[i].after;
      const availableDays = this.days.filter(
        e => e !== questionDay && e !== correct
      );

      for (var j = 0; j < availableDays.length; j++) {
        questions.push({
          adverb: "tomorrow",
          questionDay: questionDay,
          correct: correct,
          img: `tom${questionDay}.svg`,
          day1: correct,
          day2: availableDays[j],
          tomorrow: true,
          id: uuidv4(),
          rating: 1800
        });
      }
    }

    return questions;
  },
  all() {
    return this.before().concat(
      this.after(),
      this.yesterday(),
      this.tomorrow(),
      this.yesterday1800(),
      this.tomorrow1800()
    );
  }
};