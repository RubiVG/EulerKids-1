<template>
  <exercise-slot>
    <div slot="instruction">
      Solve the addition:
    </div>
    <div slot="operation">
      <div>
        <span class="katex" v-katex="question.addition"></span>
      </div>
    </div>
    <div slot="interaction">
      <div v-if="!$store.state.Learn.gotIt">
        <v-flex xs12
                sm4
                md3>
          <v-text-field
                  :color="helpers.colorMaster($store.state.Learn.subject)"
                  @keyup.enter="enterPressed(input1)"
                  v-model="input1"
                  label="Answer">
          </v-text-field>
        </v-flex>
      </div>
    </div>
    <div slot="yourAnswer">
      <user-answer :helpers="helpers"
                         :expresion="input1"/>
    </div>
    <div slot="solution">
      <div>
        Remember that we need to start adding the ones place numbers.
      </div>
      <div>
        <span class="katex" v-katex="question.onesExpression"></span>
      </div>
      <div>
        Then we add the tens place numbers.
      </div>
      <div>
        <span class="katex" v-katex="question.tensExpression"></span>
      </div>
    </div>
    <div slot="correctAnswer">
      <correct-answer :correct="question.correct"/>
    </div>
  </exercise-slot>
</template>

<script>
import ExerciseSlot from "../../../../../slots/EjercicioSlot";
import UserAnswer from "../../../../../../../components/RespuestaEjercicios/respuestaUsuario/Katex";
import CorrectAnswer from "../../../../../../../components/RespuestaEjercicios/respuestaCorrecta/ResCorrBoxedString";

export default {
  name: "Dynamic",
  props: ["helpers", "enterPressed", "question"],
  components: {
    "exercise-slot": ExerciseSlot,
    "user-answer": UserAnswer,
    "correct-answer": CorrectAnswer
  },
  data() {
    return {
      input1: "",
      dummy: {
        addition: "25 + 14 =",
        onesExpression:
          "2\\textcolor{#1E88E5}{5} + 1\\textcolor{#1E88E5}{4} = \\textcolor{#1E88E5}{9}",
        tensExpression:
          "\\textcolor{#1E88E5}{2}5 + \\textcolor{#1E88E5}{1}4 = \\textcolor{#1E88E5}{3}9",
        correct: "39"
      }
    };
  },
  computed: {
    correctAnswerChecker() {
      return this.input1;
    }
  },
  watch: {
    input1(val) {
      return val.length
        ? this.$store.commit("Learn/enableButton")
        : this.$store.commit("Learn/disableButton");
    },
    correctAnswerChecker(val) {
      return val === this.question.correct
        ? this.$store.commit("Learn/getUserAnswer", {
            answer: true,
            answerData: val
          })
        : this.$store.commit("Learn/getUserAnswer", {
            answer: false,
            answerData: val
          });
    }
  }
};
</script>
