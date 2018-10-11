import Vue from "vue";
import Vuex from "vuex";
import Program from "./data/program";
import Learn from "./modules/learn";
import Settings from "./modules/settings";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Learn,
    Settings
  },
  state: {
    appVersion: null,
    username: null,
    role: null,
    token: null,
    authenticated: false,
    skills: Program.skills,
    lessons: Program.lessons,
    urlName: null,
    routeParamsName: null,
    dialog: false,
    serverMsg: null,
    serverErrors: [],
    instruction: false,
    operation: false,
    interaction: false,
    yourAnswer: false,
    solution: false,
    correctAnswer: false,
    error500: false,
    actualizarApp: false
  },
  mutations: {
    appVersionData(state, payload) {
      state.appVersion = payload;
    },
    authorized(state, payload) {
      state.authenticated = true;
      state.token = payload.token;
      state.username = payload.username;
      state.role = payload.role;
    },
    twoFactAuth1(state, payload) {
      state.token = payload.token;
      state.username = payload.username;
      state.role = payload.role;
    },
    twoFactAuth2(state, payload) {
      state.authenticated = payload;
    },
    notAuthorized(state) {
      state.authenticated = false;
      state.token = null;
      state.username = null;
      state.role = null;
    },
    getUrlName(state, payload) {
      state.urlName = payload;
    },
    getRouteParamsName(state, payload) {
      state.routeParamsName = payload;
    },
    resetExerciseElements: state => {
      state.instruction = false;
      state.operation = false;
      state.interaction = false;
      state.yourAnswer = false;
      state.solution = false;
      state.correctAnswer = false;
    },
    exerciseChooseElements: state => {
      state.instruction = true;
      state.operation = true;
      state.interaction = true;
      state.yourAnswer = true;
      state.solution = true;
      state.correctAnswer = true;
    },
    error500Data(state, payload) {
      state.error500 = payload;
    },
    updateAppPayload(state, payload) {
      state.actualizarApp = payload;
    },
    dialogPayload(state, payload) {
      state.dialog = payload;
    },
    serverMsgPayload(state, payload) {
      state.serverMsg = payload.message;
      state.serverErrors = payload.errors;
    }
  },
  getters: {
    isAuthenticated: state => {
      return state.authenticated;
    },
    isThereError500: state => {
      return state.error500;
    },
    isThereNewApp: state => {
      return state.actualizarApp;
    },
    showDialog: state => {
      return state.dialog;
    },
    serverMsgGetter: state => {
      return state.serverMsg;
    },
    serverErrorsGetter: state => {
      return state.serverErrors;
    }
  },
  actions: {
    resetServerMsg({ commit }) {
      commit("serverMsgPayload", {
        message: null,
        errors: []
      });
    },
    getServerMsgError({ commit }, payload) {
      commit("serverMsgPayload", {
        message: payload.response.data.message,
        errors: payload.response.data.errors
      });
    },
    getServerMsgSuccess({ commit }, payload) {
      commit("serverMsgPayload", {
        message: payload.data.message,
        errors: []
      });
    },
    securityErrors({ commit }, payload) {
      if (payload.response.status === 401 || payload.response.status === 403) {
        return commit("notAuthorized");
      }

      if (payload.response.status === 418) {
        return commit("updateAppPayload", true);
      }
    },
    dataAfterLogInSignUp({ state, commit, dispatch }, payload) {
      if (state.urlName === "lessons") {
        commit("twoFactAuth1", payload.response);
        return dispatch("Learn/lessonLevels")
          .then(() => {
            commit("twoFactAuth2", true);
            payload.resolve();
          })
          .catch(error => {
            if (
              error.response.status === 401 ||
              error.response.status === 403
            ) {
              payload.reject();
              return;
            }

            commit("twoFactAuth2", true);
            payload.resolve();
          });
      }

      if (state.urlName === "lesson") {
        commit("twoFactAuth1", payload.response);
        return dispatch("Learn/getProgress")
          .then(() => {
            commit("twoFactAuth2", true);
            payload.resolve();
          })
          .catch(error => {
            if (
              error.response.status === 401 ||
              error.response.status === 403
            ) {
              payload.reject();
              return;
            }

            commit("twoFactAuth2", true);
            payload.resolve();
          });
      }

      if (state.urlName === "exercise") {
        commit("twoFactAuth1", payload.response);
        return dispatch("Learn/getQuestionDb")
          .then(() => {
            commit("twoFactAuth2", true);
            payload.resolve();
          })
          .catch(error => {
            if (
              error.response.status === 401 ||
              error.response.status === 403
            ) {
              payload.reject();
              return;
            }

            commit("twoFactAuth2", true);
            payload.resolve();
          });
      }

      if (state.urlName === "setting") {
        commit("twoFactAuth1", payload.response);

        // Tenemos que dispatch getEmail o user u tro view de settings
        if (state.routeParamsName === "email") {
          dispatch("Settings/getEmail")
            .then(() => {
              commit("twoFactAuth2", true);
              payload.resolve();
            })
            .catch(error => {
              if (
                error.response.status === 401 ||
                error.response.status === 403
              ) {
                payload.reject();
                return;
              }

              commit("twoFactAuth2", true);
              payload.resolve();
            });
        }
      }

      commit("authorized", payload.response);
      payload.resolve(payload.response);
    },
    appVersion({ state, commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("/getAppVersion")
          .then(response => {
            resolve(response.data.appVersion);
            commit("appVersionData", response.data.appVersion);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    signUp({ state, commit, dispatch }, payload) {
      dispatch("resetServerMsg");

      return new Promise((resolve, reject) => {
        axios
          .post("/signUp", {
            username: payload.username,
            password: payload.password,
            email: payload.email,
            appVersion: state.appVersion
          })
          .then(response => {
            dispatch("dataAfterLogInSignUp", {
              response: response.data,
              resolve: resolve,
              reject: reject
            });
          })
          .catch(error => {
            commit("notAuthorized");
            dispatch("getServerMsgError", error);
            reject(error);
          });
      });
    },
    login({ state, commit, dispatch }, payload) {
      dispatch("resetServerMsg");

      return new Promise((resolve, reject) => {
        axios
          .post("/login", {
            username: payload.username,
            password: payload.password,
            appVersion: state.appVersion
          })
          .then(response => {
            dispatch("dataAfterLogInSignUp", {
              response: response.data,
              resolve: resolve,
              reject: reject
            });
          })
          .catch(error => {
            commit("notAuthorized");
            dispatch("getServerMsgError", error);
            reject(error);
          });
      });
    },
    sendLink({ state, commit, dispatch }, payload) {
      dispatch("resetServerMsg");

      return new Promise((resolve, reject) => {
        axios
          .post("/sendLink", {
            email: payload.email,
            appVersion: state.appVersion
          })
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            dispatch("getServerMsgError", error);
            reject(error);
          });
      });
    },
    setNewPassword({ state, commit, dispatch }, payload) {
      dispatch("resetServerMsg");

      return new Promise((resolve, reject) => {
        axios
          .post("/setNewPassword", {
            token: payload.token,
            username: payload.username,
            newPassword: payload.newPassword,
            confirmPassword: payload.confirmPassword,
            appVersion: state.appVersion
          })
          .then(response => {
            resolve(response);
            dispatch("getServerMsgSuccess", response);
            commit("authorized", response.data);
          })
          .catch(error => {
            dispatch("getServerMsgError", error);
            reject(error);
          });
      });
    },
    signOut({ state, commit, dispatch }) {
      commit("notAuthorized");
      commit("error500Data", false);
      if (state.urlName === "exercise") {
        dispatch("Learn/getQuestionDb").catch(error => {});
      }
    }
  }
});
