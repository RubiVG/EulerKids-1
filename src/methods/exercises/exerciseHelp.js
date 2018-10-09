import { store } from "../../store/store";

export const exerciseMethods = {
  active1(input, answerData) {
    if (!input) {
      store.commit("Learn/oneOn");
      store.commit("Learn/getUserAnswer", {
        answer: true,
        answerData: answerData
      });
      store.commit("Learn/enableButton");
    }
    if (input) {
      store.commit("Learn/allOff");
      store.commit("Learn/getUserAnswer", {
        answer: false,
        answerData: null
      });
      store.commit("Learn/disableButton");
    }
  },
  active2(input, answerData) {
    if (!input) {
      store.commit("Learn/twoOn");
      store.commit("Learn/getUserAnswer", {
        answer: false,
        answerData: answerData
      });
      store.commit("Learn/enableButton");
    }
    if (input) {
      store.commit("Learn/allOff");
      store.commit("Learn/getUserAnswer", {
        answer: false,
        answerData: null
      });
      store.commit("Learn/disableButton");
    }
  },
  buttons(key) {
    if (key === "1") {
      return store.state.Learn.btn1;
    }
    return store.state.Learn.btn2;
  }
};
