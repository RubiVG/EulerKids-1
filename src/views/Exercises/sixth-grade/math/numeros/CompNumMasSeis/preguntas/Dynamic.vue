<template>
  <ejercicio-slot>
    <div slot="instruccion">
      Selecciona el símbolo correcto:
    </div>
    <div slot="operacion"
         class="text-xs-center mt-2">
      <span class="katex" v-katex="question.numero1"></span>
      <span class="boxed mr-2 ml-2">
          <span class="katex" v-katex="selected"></span>
        </span>
      <span class="katex" v-katex="question.numero2"></span>
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
      <div>
        Recordemos que para identificar qué número es mayor o menor a otro, debemos
        comparar cada una de las cifras de izquierda a derecha
        <b><span class="blue--text text--darken-1">según su valor posicional</span></b>.
      </div>
      <div>
        En este caso la primer cifra con diferencia se encuentra en las
        <b><span class="blue--text text--darken-1">{{ question.valorPosicional }}</span></b>.
      </div>
      <div class="text-xs-center">
        <span class="katex" v-katex="question.expresion1"></span>
        <span style="visibility: hidden"> ------ </span>
        <span class="katex" v-katex="question.expresion2"></span>
      </div>
      <div>
        En las
        <b><span class="blue--text text--darken-1">{{ question.valorPosicional }}</span></b> podemos ver que el
        <span class="katex blue--text darken-1" v-katex="question.numero1ValorPosicional"></span>
        es
        <span class="katex blue--text darken-1"> {{ question.correctaTexto }} </span>
        <span class="katex blue--text darken-1" v-katex="question.numero2ValorPosicional"></span>.
      </div>
    </div>
    <div slot="respuestaCorrecta">
      <span class="katex" v-katex="question.numero1"></span>
      <respuesta-correcta class="ml-2 mr-2"
                           :helpers="helpers"
                           :correcta="question.correcta"/>
      <span class="katex" v-katex="question.numero2"></span>
    </div>
  </ejercicio-slot>
</template>

<script>
import RespuestaUsuario from "../../../../../../../components/RespuestaEjercicios/respuestaUsuario/RespuestaKatexBox";
import RespuestaCorrecta from "../../../../../../../components/RespuestaEjercicios/respuestaCorrecta/ResCorrKatexBox";
import CardSelectTextoKatex from "../../../../../../../components/LogicaEjercicios/CardSelectTextoKatex";
import EjercicioSlot from "../../../../../slots/EjercicioSlot";

export default {
  name: "Dynamic",
  props: ["helpers", "subject"],
  components: {
    "ejercicio-slot": EjercicioSlot,
    "card-select-texto": CardSelectTextoKatex,
    "respuesta-usuario": RespuestaUsuario,
    "respuesta-correcta": RespuestaCorrecta
  },
  data() {
    return {
      btn1: false,
      btn2: false,
      textSize: "display-1",
      selected: "\\footnotesize ?",
      //Dummy
      dummy: {
        numero1: "3,845,532",
        numero2: "3,945,532",
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "centenas de millar",
        expresion1: "3,\\textcolor{#1E88E5}{8}45,532",
        expresion2: "3,\\textcolor{#1E88E5}{9}45,532",
        numero1ValorPosicional: "8",
        numero2ValorPosicional: "9",
        correcta: "<",
        correctaTexto: "menor que"
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
          textoCard: this.question.menorQue
        },
        {
          btn: this.btn2,
          active: this.active2,
          textoCard: this.question.mayorQue
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
