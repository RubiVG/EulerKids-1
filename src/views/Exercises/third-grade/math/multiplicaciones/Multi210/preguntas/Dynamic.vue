<template>
  <ejercicio-slot>
    <div slot="instruccion">
      Resuelve la siguiente multiplicación:
    </div>
    <div slot="operacion">
      <span class="katex" v-katex="question.multiplicacion"></span>
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
        Recordemos la tabla de multiplicar del <span class="katex blue--text text--darken-1" v-katex="obtenerTabla(question.multiplicacion)"></span>:
      </div>
      <div>
        <v-layout align-center justify-center row fill-height wrap>
          <v-flex xs12
                  sm2>
            <div v-for="n in question.tabla1">
              <span class="katex" v-katex="n"></span>
            </div>
          </v-flex>
          <v-flex xs12
                  sm2>
            <div v-for="n in question.tabla2">
              <span class="katex" v-katex="n"></span>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <div slot="respuestaCorrecta">
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
        multiplicacion: "4 \\times 5 =",
        tabla1: [
          "4 \\times 0 = 0",
          "4 \\times 1 = 4",
          "4 \\times 2 = 8",
          "4 \\times 3 = 12",
          "4 \\times 4 = 16",
          "\\textcolor{#1E88E5}{4 \\times 5 = 20}"
        ],
        tabla2: [
          "4 \\times 6 = 24",
          "4 \\times 7 = 28",
          "4 \\times 8 = 32",
          "4 \\times 9 = 36",
          "4 \\times 10 = 40",
          "4 \\times 11 = 44"
        ],
        correcta: "20"
      }
    };
  },
  methods: {
    obtenerTabla(str) {
      return str.substr(0, str.indexOf(" "));
    }
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
