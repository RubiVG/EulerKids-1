const namespaced = true;
import axios from "axios";

const state = {
  spinner: false,
  email: null,
  settingsErrorMsg: null,
  settingsErrors: []
};

const mutations = {
  onOffSpinner(state, payload) {
    state.spinner = payload;
  },
  emailData(state, payload) {
    state.email = payload;
  },
  getSettingsErrors(state, payload) {
    state.settingsErrorMsg = payload.message;
    state.settingsErrors = payload.errors;
  }
};

const getters = {
  settingsErrorMsgGetter: state => {
    return state.settingsErrorMsg;
  },
  settingsErrorsGetter: state => {
    return state.settingsErrors;
  }
};

const actions = {
  getEmailErrorHandler({ commit, dispatch }, error) {
    if (error.response.status === 500 || error.response.status === 422) {
      commit("getSettingsErrors", {
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
    }
  },
  settingsErrorHandler({ commit, dispatch }, error) {
    if (error.response.status === 500 || error.response.status === 422) {
      commit("onOffSpinner", false);

      return;
    }

    dispatch("securityErrors", error, { root: true });

    if (error.response.status === 401 || error.response.status === 403) {
      commit("dialogPayload", true, { root: true });
      dispatch("getServerMsgError", error, { root: true });
    }
  },
  getEmail({ state, commit, dispatch, getters, rootState }) {
    commit("onOffSpinner", true);

    return new Promise((resolve, reject) => {
      axios
        .post("/getEmail", {
          token: rootState.token,
          role: rootState.role,
          username: rootState.username,
          appVersion: rootState.appVersion
        })
        .then(response => {
          resolve(response);
          commit("emailData", response.data.email);
          commit("onOffSpinner", false);
        })
        .catch(error => {
          dispatch("getEmailErrorHandler", error);
          reject(error);
        });
    });
  },
  editEmail({ state, commit, dispatch, getters, rootState }, payload) {
    commit("onOffSpinner", true);

    return new Promise((resolve, reject) => {
      axios
        .post("/editEmail", {
          token: rootState.token,
          role: rootState.role,
          username: rootState.username,
          password: payload.password,
          newEmail: payload.newEmail,
          appVersion: rootState.appVersion
        })
        .then(response => {
          resolve(response);
          commit("emailData", response.data.email);
          commit("onOffSpinner", false);
        })
        .catch(error => {
          dispatch("settingsErrorHandler", error);
          reject(error);
        });
    });
  },
  editPassword({ state, commit, dispatch, getters, rootState }, payload) {
    commit("onOffSpinner", true);

    return new Promise((resolve, reject) => {
      axios
        .post("/editPassword", {
          token: rootState.token,
          role: rootState.role,
          username: rootState.username,
          password: payload.password,
          newPassword: payload.newPassword,
          confirmPassword: payload.confirmPassword,
          appVersion: rootState.appVersion
        })
        .then(response => {
          resolve(response);
          commit("onOffSpinner", false);
        })
        .catch(error => {
          dispatch("settingsErrorHandler", error);
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
