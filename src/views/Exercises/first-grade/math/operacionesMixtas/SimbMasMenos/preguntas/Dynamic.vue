<template>
  <ejercicio-slot>
    <div slot="instruccion">
      Selecciona el símbolo que corresponde para que la operación sea correcta.
    </div>
    <div slot="operacion">
      <div class="text-xs-center mt-2">
        <span class="katex" v-katex="question.numero1"></span>
        <span class="boxed mr-2 ml-2">
            <span class="katex" v-katex="selected"></span>
        </span>
        <span class="katex" v-katex="question.numero2"></span>
      </div>
    </div>
    <div slot="interaccion">
      <v-container fluid>
        <v-layout row
                  align-center
                  justify-center
                  wrap
                  class="display-1">
          <card-select-texto v-for="question in questions"
                             :key="question.textoCard"
                             :helpers="helpers"
                             :btn="question.btn"
                             :subject="subject"
                             :active="question.active"
                             :texto-card="question.textoCard"
                             :text-size="textSize">
          </card-select-texto>
        </v-layout>
      </v-container>
    </div>
    <div slot="tuRespuesta">
      <respuesta-usuario :helpers="helpers"
                         :expresion="selected"/>
    </div>
    <div slot="solucion">
      <div v-if="question.suma">
        <div>
          Si
          <b><span class="blue--text text--darken-1">sumamos</span></b>
          los números <span class="blue--text text--darken-1" v-katex="question.parte1 "></span>
          y
          <span class="blue--text text--darken-1" v-katex="question.parte2"></span>
          obtenemos el número
          <span class="blue--text text--darken-1" v-katex="question.total"></span>.
        </div>
        En esta operación estamos
        <b><span class="blue--text text--darken-1">juntando</span></b>
        las dos cantidades, por lo que el símbolo que debemos utilizar es el de la
        <b><span class="blue--text text--darken-1">suma</span></b>.
      </div>
      <div v-if="question.resta">
        <div>
          Si
          <b><span class="blue--text text--darken-1">restamos</span></b>
          al
          <span class="blue--text text--darken-1" v-katex="question.parte1"></span>
          el número
          <span class="blue--text text--darken-1" v-katex="question.parte2"></span>
          obtenemos el número
          <span class="blue--text text--darken-1" v-katex="question.total"></span>.
        </div>
        En esta operación el resultado es la
        <b><span class="blue--text text--darken-1">diferencia</span></b>
        de los números
        <span class="blue--text text--darken-1" v-katex="question.parte1"></span>
        y
        <span class="blue--text text--darken-1" v-katex="question.parte2"></span>
        por lo que estamos realizando una
        <b><span class="blue--text text--darken-1">resta</span></b>.
      </div>
      <div class="text-xs-center">
        <span class="katex" v-katex="question.expresion1"></span>
      </div>
    </div>
    <div slot="respuestaCorrecta">
      <respuesta-correcta :correcta="question.correcta"/>
    </div>
  </ejercicio-slot>
</template>

<script>
import CardSelectTextoKatex from "../../../../../../../components/LogicaEjercicios/CardSelectTextoKatex";
import EjercicioSlot from "../../../../../slots/EjercicioSlot";
import RespuestaUsuario from "../../../../../../../components/RespuestaEjercicios/respuestaUsuario/RespuestaKatexBox";
import RespuestaCorrecta from "../../../../../../../components/RespuestaEjercicios/respuestaCorrecta/ResCorrKatexBox";

export default {
  name: "Dynamic",
  props: ["helpers", "subject"],
  components: {
    "card-select-texto": CardSelectTextoKatex,
    "ejercicio-slot": EjercicioSlot,
    "respuesta-usuario": RespuestaUsuario,
    "respuesta-correcta": RespuestaCorrecta
  },
  data() {
    return {
      btn1: false,
      btn2: false,
      textSize: "display-1",
      selected: "\\footnotesize ?",
      suma: "+",
      resta: "-",
      //Dummy
      dummy: {
        numero1: "8",
        numero2: `9 = 17`,
        expresion1: "8\\textcolor{#1E88E5}{+}9 = 17",
        total: "17",
        parte1: "8",
        parte2: "9",
        suma: true,
        correcta: "+"
      }
    };
  },
  methods: {
    active1(input, answerData) {
      this.btn1 = false;
      this.btn2 = false;

      if (!input) {
        this.respuestaCorrectaChecker(answerData);
        this.selected = answerData;
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
        this.selected = "\\footnotesize ?";
      }
    },
    active2(input, answerData) {
      this.btn1 = false;
      this.btn2 = false;

      if (!input) {
        this.respuestaCorrectaChecker(answerData);
        this.selected = answerData;
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
        this.selected = "\\footnotesize ?";
      }
    },
    respuestaCorrectaChecker(answerData) {
      return answerData === this.question.correcta
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
      const questions = [
        {
          btn: this.btn1,
          active: this.active1,
          textoCard: this.suma
        },
        {
          btn: this.btn2,
          active: this.active2,
          textoCard: this.resta
        }
      ];

      return questions;
    },
    question() {
      return this.$store.state.Learn.question;
    }
  }
};
</script>

<style scoped>
.boxed {
  display: inline-block;
  width: 50px;
  border: 1px solid #000;
  text-align: center;
}
</style>
