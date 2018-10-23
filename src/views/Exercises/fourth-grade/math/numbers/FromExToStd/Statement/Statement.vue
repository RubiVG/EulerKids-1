<template>
  <exercise-slot>
    <div slot="instruction">
      Write the number in <b><span class="blue--text darken--1--text"> standard</span></b> form.
      Don't forget the commas.
    </div>
    <div slot="operation">
      <span class="katex" v-katex="question.expanded"></span>
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
      <div>Let's place each digit on the place value chart:</div>
      <v-data-table
              v-if="question.thousands"
              :headers="question.headers"
              :items="question.placeValues"
              hide-actions
              class="elevation-1 mt-2">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.thousands }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.hundreds }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.tens }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.ones }}</td>
        </template>
      </v-data-table>
      <v-data-table
              v-if="question.tenThousands"
              :headers="question.headers"
              :items="question.placeValues"
              hide-actions
              class="elevation-1 mt-2">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.tenThousands }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.thousands }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.hundreds }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.tens }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.ones }}</td>
        </template>
      </v-data-table>
      <v-data-table
              v-if="question.hundredThousands"
              :headers="question.headers"
              :items="question.placeValues"
              hide-actions
              class="elevation-1 mt-2">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.hundredThousands }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.tenThousands }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.thousands }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.hundreds }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.tens }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.ones }}</td>
        </template>
      </v-data-table>
      <br/>
      <div v-for="respuesta in question.answers">
        <span v-katex="respuesta.number"></span> is
        <span v-katex="respuesta.value"></span>
        <span class="blue--text text--darken-1"> {{ respuesta.placeValue }}</span>
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
        expanded: "6,000 + 800 + 5 + 7",
        correct: "6,857",
        headers: [
          {
            text: "Thousands",
            value: "thousands",
            align: "center",
            sortable: false
          },
          {
            text: "Hundreds",
            value: "hundreds",
            align: "center",
            sortable: false
          },
          {
            text: "Tens",
            value: "tens",
            align: "center",
            sortable: false
          },
          {
            text: "Ones",
            value: "ones",
            align: "center",
            sortable: false
          }
        ],
        placeValues: [
          {
            value: false,
            thousands: "6",
            hundreds: "8",
            tens: "5",
            ones: "7"
          }
        ],
        answers: [
          {
            number: "6,000",
            value: "6",
            placeValue: "thousands"
          },
          {
            number: "800",
            value: "8",
            placeValue: "hundreds"
          },
          {
            number: "50",
            value: "5",
            placeValue: "tens"
          },
          {
            number: "7",
            value: "7",
            placeValue: "ones"
          }
        ],
        thousands: true,
      },
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
