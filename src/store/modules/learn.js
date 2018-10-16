const namespaced = true;
import axios from "axios";

const state = {
  maxRating: 1700,
  btn1: false,
  btn2: false,
  sendBtn: true,
  gotIt: false,
  answerBackgroundColor: "grey lighten-4",
  subject: "",
  grade: "",
  skill: "",
  skillName: "",
  lesson: "",
  exerciseName: "",
  exerciseUrl: "",
  exerciseErrorMsg: null,
  exerciseErrors: [],
  userAnswer: false, // Boolean
  answerData: null, // -> La data de la respuesta
  question: null,
  rating: 0,
  questionRating: 0,
  spinner: false,
  lessonsName: [],
  progress: null,
  enterPressed: false
};

const mutations = {
  oneOn: state => {
    state.btn1 = true;
    state.btn2 = false;
  },
  twoOn: state => {
    state.btn1 = false;
    state.btn2 = true;
  },
  allOff: state => {
    state.btn1 = false;
    state.btn2 = false;
  },
  getUserAnswer(state, payload) {
    state.userAnswer = payload.answer;
    state.answerData = payload.answerData;
  },
  gotItPayload(state, payload) {
    state.gotIt = payload;
  },
  enableButton: state => {
    state.sendBtn = false;
  },
  disableButton: state => {
    state.sendBtn = true;
  },
  resetExercise: state => {
    state.btn1 = false;
    state.btn2 = false;
    state.sendBtn = true;
    state.gotIt = false;
    state.userAnswer = false;
    state.answerData = null;
    state.question = null;
    state.rating = 0;
    state.questionRating = 0;
    state.enterPressed = false;
  },
  getExerciseUrl(state, payload) {
    state.exerciseUrl = payload;
  },
  getSubject(state, payload) {
    state.subject = payload;
  },
  getGrade(state, payload) {
    state.grade = payload;
  },
  getSkill(state, payload) {
    state.skill = payload;
  },
  getSkillName(state, payload) {
    state.skillName = payload;
  },
  getExerciseName(state, payload) {
    state.exerciseName = payload;
  },
  getLesson(state, payload) {
    state.lesson = payload;
  },
  getRating(state, payload) {
    state.rating = payload;
  },
  getQuestionRating(state, payload) {
    state.questionRating = payload;
  },
  getQuestion(state, payload) {
    state.question = payload;
  },
  onOffSpinner(state, payload) {
    state.spinner = payload;
  },
  updateRating(state, payload) {
    state.rating = payload.rating;
  },
  getLessonsName(state, payload) {
    state.lessonsName = payload;
  },
  getProgress(state, payload) {
    state.progress = payload;
  },
  enterPressedData(state, payload) {
    state.enterPressed = payload;
  },
  getExerciseErrors(state, payload) {
    state.exerciseErrorMsg = payload.message;
    state.exerciseErrors = payload.errors;
  }
};

const getters = {
  exerciseErrorMsgGetter: state => {
    return state.exerciseErrorMsg;
  },
  exerciseErrorsGetter: state => {
    return state.exerciseErrors;
  },
  subjectName: state => {
    if (state.subject === "math") {
      return "Math";
    }

    if (state.subject === "language") {
      return "Language";
    }

    if (state.subject === "science") {
      return "Science";
    }
  },
  exerciseUrlGetter: state => {
    return `/exercises/${state.subject}/${state.exerciseUrl}`;
  },
  enterPressedChecker: state => {
    return state.enterPressed;
  }
};

const actions = {
  errorHandler({ commit, dispatch }, error) {
    dispatch("securityErrors", error, { root: true });

    if (error.response.status === 401 || error.response.status === 403) {
      commit("dialogPayload", true, { root: true });
      dispatch("getServerMsgError", error, { root: true });
    }
  },
  exerciseErrorHandler({ commit, dispatch }, error) {
    if (error.response.status === 500 || error.response.status === 422) {
      commit("getExerciseErrors", {
        message: error.response.data.message,
        errors: error.response.data.errors
      });
      commit("error500Data", true, { root: true });

      return;
    }

    dispatch("securityErrors", error, { root: true });

    if (error.response.status === 401 || error.response.status === 403) {
      commit("dialogPayload", true, { root: true });
      dispatch("getServerMsgError", error, { root: true });
      dispatch("getQuestionDb");
    }
  },
  lessonLevels({ state, commit, dispatch, rootState }) {
    commit("onOffSpinner", true);

    return new Promise((resolve, reject) => {
      axios
        .post("/lessonLevels", {
          token: rootState.token,
          role: rootState.role,
          username: rootState.username,
          subject: state.subject,
          grade: state.grade,
          skill: state.skill,
          appVersion: rootState.appVersion
        })
        .then(response => {
          commit("getLessonsName", response.data.lessonsName);
          commit("onOffSpinner", false);
          resolve(response);
        })
        .catch(error => {
          dispatch("errorHandler", error);
          reject(error);
        });
    });
  },
  getProgress({ state, commit, dispatch, rootState }) {
    commit("onOffSpinner", true);

    return new Promise((resolve, reject) => {
      axios
        .post("/getProgress", {
          token: rootState.token,
          role: rootState.role,
          username: rootState.username,
          subject: state.subject,
          grade: state.grade,
          skill: state.skill,
          lesson: state.lesson,
          appVersion: rootState.appVersion
        })
        .then(response => {
          commit("getProgress", response.data.progress);
          commit("onOffSpinner", false);
          resolve(response);
        })
        .catch(error => {
          dispatch("errorHandler", error);
          reject(error);
        });
    });
  },
  getQuestionDb({ state, commit, dispatch, getters, rootState }) {
    commit("onOffSpinner", true);
    commit("error500Data", false, { root: true });

    return new Promise((resolve, reject) => {
      axios
        .post(getters.exerciseUrlGetter, {
          token: rootState.token,
          role: rootState.role,
          username: rootState.username,
          subject: state.subject,
          subjectName: getters.subjectName,
          grade: state.grade,
          skill: state.skill,
          skillName: state.skillName,
          exerciseName: state.exerciseName,
          appVersion: rootState.appVersion
        })
        .then(response => {
          commit("getQuestion", response.data.question);
          commit("getRating", response.data.rating);
          commit("getQuestionRating", response.data.questionRating);
          commit("onOffSpinner", false);
          resolve(response);
          console.log("getQuestionDb responded")
        })
        .catch(error => {
          dispatch("exerciseErrorHandler", error);
          reject(error);
        });
    });
  },
  updateRatings({ state, commit, dispatch, getters, rootState }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/updateRatings", {
          token: rootState.token,
          role: rootState.role,
          username: rootState.username,
          subject: state.subject,
          subjectName: getters.subjectName,
          grade: state.grade,
          skill: state.skill,
          skillName: state.skillName,
          exerciseName: state.exerciseName,
          exercise: state.exerciseUrl,
          question: state.question,
          rating: state.rating,
          correct: payload.correct,
          time: payload.time,
          userAnswer: state.userAnswer,
          answerData: state.answerData,
          appVersion: rootState.appVersion
        })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          commit("onOffSpinner", true);
          dispatch("exerciseErrorHandler", error);
          reject(error);
        });
    });
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
