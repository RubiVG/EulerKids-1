<template>
  <ejercicio-slot>
    <div slot="instruccion">
      Resuelve la siguiente operación:
    </div>
    <div slot="operacion">
      <span class="katex" v-katex="question.operacion"></span>
    </div>
    <div slot="interaccion">
      <div v-if="!$store.state.Learn.gotIt">
        <v-flex xs12
                sm4
                md3>
          <v-text-field
                  :color="helpers.colorMaster($store.state.Learn.subject)"
                  @keyup.enter="enterPressed(input1)"
                  v-model="input1"
                  label="Respuesta">
          </v-text-field>
        </v-flex>
      </div>
    </div>
    <div slot="tuRespuesta">
      <respuesta-usuario :helpers="helpers"
                       :expresion="input1"/>
    </div>
    <div slot="solucion">
      <div>
        Recuerda que para hacer cualquier operación con decimales lo más importante es
        <b><span class="blue--text darken--1--text">alinear</span></b>
        el punto decinal de las dos cantidades.
      </div>
      <div class="title">
        <span v-html="question.respuesta1"></span>
      </div>
      <div v-if="question.suma" class="mt-2">
        Ahora suma los números como si fueran enteros, sin olvidar escribir el punto decimal
      </div>
      <div v-if="question.resta" class="mt-2">
        Ahora resta los números como si fueran enteros, sin olvidar escribir el punto decimal
      </div>
      <div class="title">
        <span v-html="question.respuesta2"></span>
      </div>
    </div>
    <div slot="respuestaCorrecta"
         class="grey--text text--darken-2 subheading">
      <respuesta-correcta :correcta="question.correcta"/>
    </div>
  </ejercicio-slot>
</template>

<script>
import EjercicioSlot from "../../../../../slots/EjercicioSlot";
import RespuestaUsuario from "../../../../../../../components/RespuestaEjercicios/respuestaUsuario/Katex";
import RespuestaCorrecta from "../../../../../../../components/RespuestaEjercicios/respuestaCorrecta/ResCorrBoxedString";

export default {
  name: "Dynamic",
  props: ["helpers", "enterPressed", "question"],
  components: {
    "ejercicio-slot": EjercicioSlot,
    "respuesta-usuario": RespuestaUsuario,
    "respuesta-correcta": RespuestaCorrecta
  },
  data() {
    return {
      input1: "",
      dummy: {
        operacion: "2.7 + 1.85 =",
        respuesta1: "88",
        correcta: "20"
      }
    };
  },
  computed: {
    respuestaCorrectaChecker() {
      return this.input1;
    }
  },
  watch: {
    input1(val) {
      return val.length
        ? this.$store.commit("Learn/enableButton")
        : this.$store.commit("Learn/disableButton");
    },
    respuestaCorrectaChecker(val) {
      return val === this.question.correcta
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
