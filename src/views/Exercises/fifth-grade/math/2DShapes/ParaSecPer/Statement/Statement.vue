<template>
  <exercise-slot>
    <div slot="instruction">
      Determine if lines are parallel, secant or perpendicular.
    </div>
    <div slot="operation">
      <div class="mt-3">
        <img :src="img(question.img)" height="150" class="responsive" />
      </div>
    </div>
    <div slot="interaction">
      <v-container fluid>
        <v-layout row align-center justify-center wrap>
          <card-select-text
            v-for="question in questions"
            :key="question.message"
            :helpers="helpers"
            :btn="question.btn"
            :subject="subject"
            :active="question.active"
            :message="question.message"
            :text-size="textSize"
          />
        </v-layout>
      </v-container>
    </div>
    <div slot="yourAnswer">
      <user-answer
        :helpers="helpers"
        :user-answer="$store.state.Learn.userAnswer"
        :answer-data="$store.state.Learn.answerData"
      />
    </div>
    <div slot="solution">
      <div class="mt-3">
        <img :src="img(answerImg)" height="350" class="responsive" />
      </div>
    </div>
    <div slot="correctAnswer">
      <correct-answer :correct="question.correct" />
    </div>
  </exercise-slot>
</template>

<script>
import ExerciseSlot from "../../../../../slots/EjercicioSlot";
import UserAnswer from "../../../../../../../components/RespuestaEjercicios/respuestaUsuario/texto";
import CorrectAnswer from "../../../../../../../components/RespuestaEjercicios/respuestaCorrecta/texto";
import CardSelectText from "../../../../../../../components/LogicaEjercicios/CardSelectTexto";

export default {
  name: "Dynamic",
  props: ["helpers", "subject", "img"],
  components: {
    "exercise-slot": ExerciseSlot,
    "card-select-text": CardSelectText,
    "user-answer": UserAnswer,
    "correct-answer": CorrectAnswer
  },
  data() {
    return {
      textSize: "title",
      btn1: false,
      btn2: false,
      btn3: false,
      parallel: "parallel",
      secant: "secant",
      perpendicular: "perpendicular",
      answerImg: "parPerSec_A.svg",
      dummy: {
        img: "secante1.svg",
        correct: "secant"
      }
    };
  },
  methods: {
    active1(input, answerData) {
      this.btn1 = false;
      this.btn2 = false;
      this.btn3 = false;

      if (!input) {
        this.correctAnswerChecker(answerData);
        this.btn1 = true;
        this.btn2 = false;
        this.btn3 = false;
        this.$store.commit("Learn/enableButton");
      }

      if (input) {
        this.$store.commit("Learn/getUserAnswer", {
          answer: false,
          answerData: null
        });
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = false;
        this.$store.commit("Learn/disableButton");
      }
    },
    active2(input, answerData) {
      this.btn1 = false;
      this.btn2 = false;
      this.btn3 = false;

      if (!input) {
        this.correctAnswerChecker(answerData);
        this.btn1 = false;
        this.btn2 = true;
        this.btn3 = false;
        this.$store.commit("Learn/enableButton");
      }

      if (input) {
        this.$store.commit("Learn/getUserAnswer", {
          answer: false,
          answerData: null
        });
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = false;
        this.$store.commit("Learn/disableButton");
      }
    },
    active3(input, answerData) {
      this.btn1 = false;
      this.btn2 = false;
      this.btn3 = false;

      if (!input) {
        this.correctAnswerChecker(answerData);
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = true;
        this.$store.commit("Learn/enableButton");
      }

      if (input) {
        this.$store.commit("Learn/getUserAnswer", {
          answer: false,
          answerData: null
        });
        this.btn1 = false;
        this.btn2 = false;
        this.btn3 = false;
        this.$store.commit("Learn/disableButton");
      }
    },
    correctAnswerChecker(answerData) {
      return answerData === this.question.correct
        ? this.$store.commit("Learn/getUserAnswer", {
            answer: true,
            answerData: answerData
          })
        : this.$store.commit("Learn/getUserAnswer", {
            answer: false,
            answerData: answerData
          });
    }
  },
  computed: {
    questions() {
      return [
        {
          btn: this.btn1,
          active: this.active1,
          message: this.parallel
        },
        {
          btn: this.btn2,
          active: this.active2,
          message: this.secant
        },
        {
          btn: this.btn3,
          active: this.active3,
          message: this.perpendicular
        }
      ];
    },
    question() {
      return this.$store.state.Learn.question;
    }
  }
};
</script>
