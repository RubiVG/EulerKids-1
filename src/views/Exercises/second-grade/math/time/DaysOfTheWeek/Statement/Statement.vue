<template>
  <exercise-slot>
    <div slot="instruction">
      Remember the days of the week:
    </div>
    <div slot="operation">
      <div v-if="beforeAfter">
        What day comes <b><span class="blue--text darken--1--text">{{ question.preposition }}</span></b>
        {{ question.questionDay }}?
      </div>
      <div v-if="question.tomorrow">
        If today is {{ question.questionDay }},
        what day will be <b><span class="blue--text darken--1--text">{{ question.adverb }}</span></b>?
      </div>
      <div v-if="question.yesterday">
        If today is {{ question.questionDay }},
        what day was <b><span class="blue--text darken--1--text">{{ question.adverb }}</span></b>?
      </div>
    </div>
    <div slot="interaction">
      <v-container fluid>
        <v-layout row
                  align-center
                  justify-center
                  wrap>
          <card-select-text v-for="question in questions"
                             :key="question.message"
                             :helpers="helpers"
                             :btn="question.btn"
                             :subject="subject"
                             :active="question.active"
                             :message="question.message"
                             :text-size="textSize">
          </card-select-text>
        </v-layout>
      </v-container>
    </div>
    <div slot="yourAnswer">
      <user-answer :helpers="helpers"
                   :user-answer="$store.state.Learn.userAnswer"
                   :answer-data="$store.state.Learn.answerData"/>
    </div>
    <div slot="solution">
      <div>
        The days of the week are:
      </div>
      <div class="mt-3">
        <img :src="img(question.img)"
             height="400"
             class="responsive">
      </div>
      <br/>
      <!--Before answer-->
      <div v-if="beforeAfter">
        <div class="mt-3">
          We can notice that the day that comes
          <b><span class="blue--text darken--1--text">{{ question.preposition }}</span></b>
          {{ question.questionDay }}
          is
          <b><span class="blue--text darken--1--text">{{ question.correct }}</span></b>.
        </div>
      </div>
      <div v-if="question.tomorrow">
        If today is {{ question.questionDay }}, <b><span class="blue--text darken--1--text">{{ question.adverb }}</span></b>
        will be <b><span class="blue--text darken--1--text">{{ question.correct }}</span></b>.
      </div>
      <div v-if="question.yesterday">
        If today is {{ question.questionDay }}, <b><span class="blue--text darken--1--text">{{ question.adverb }}</span></b>
        was <b><span class="blue--text darken--1--text">{{ question.correct }}</span></b>.
      </div>
    </div>
    <div slot="correctAnswer">
      <correct-answer :correct="question.correct"/>
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
  props: ["helpers", "subject", "img", "shuffleFisher"],
  components: {
    "exercise-slot": ExerciseSlot,
    "card-select-text": CardSelectText,
    "user-answer": UserAnswer,
    "correct-answer": CorrectAnswer
  },
  data() {
    return {
      btn1: false,
      btn2: false,
      textSize: "title"
    };
  },
  methods: {
    active1(input, answerData) {
      this.btn1 = false;
      this.btn2 = false;

      if (!input) {
        this.correctAnswerChecker(answerData);
        this.btn1 = true;
        this.btn2 = false;
        this.$store.commit("Learn/enableButton");
      }

      if (input) {
        this.$store.commit("Learn/getUserAnswer", {
          answer: false,
          answerData: null
        });
        this.btn1 = false;
        this.btn2 = false;
        this.$store.commit("Learn/disableButton");
      }
    },
    active2(input, answerData) {
      this.btn1 = false;
      this.btn2 = false;

      if (!input) {
        this.correctAnswerChecker(answerData);
        this.btn1 = false;
        this.btn2 = true;
        this.$store.commit("Learn/enableButton");
      }

      if (input) {
        this.$store.commit("Learn/getUserAnswer", {
          answer: false,
          answerData: null
        });
        this.btn1 = false;
        this.btn2 = false;
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
          message: this.days[0]
        },
        {
          btn: this.btn2,
          active: this.active2,
          message: this.days[1]
        }
      ];
    },
    question() {
      return this.$store.state.Learn.question;
    },
    days() {
      const days = [this.question.day1, this.question.day2];

      return this.shuffleFisher(days);
    },
    beforeAfter() {
      return this.question.before || this.question.after;
    }
  }
};
</script>
