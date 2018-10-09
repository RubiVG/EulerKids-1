<template>
  <ejercicio-slot>
    <div slot="instruccion">
      Identifica si la línea es paralela, secante ó perpendicular.
    </div>
    <div slot="operacion">
      <div class="mt-3">
        <img :src="imagenDynamic(question.imagen)"
             height="150"
             class="responsive">
      </div>
    </div>
    <div slot="interaccion">
      <v-container fluid>
        <v-layout row
                  align-center
                  justify-center
                  wrap>
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
                         :respuesta-usuario="$store.state.Learn.userAnswer"
                         :respuesta-data="$store.state.Learn.answerData"/>
    </div>
    <div slot="solucion">
      <div>
        Recordemos:
      </div>
      <div class="mt-3">
        <img :src="imagenDynamic(imagenRespuesta)"
             height="350"
             class="responsive">
      </div>
    </div>
    <div slot="respuestaCorrecta">
      <respuesta-correcta :correcta="question.correcta"/>
    </div>
  </ejercicio-slot>
</template>

<script>
import EjercicioSlot from "../../../../../slots/EjercicioSlot";
import RespuestaUsuario from "../../../../../../../components/RespuestaEjercicios/respuestaUsuario/texto";
import RespuestaCorrecta from "../../../../../../../components/RespuestaEjercicios/respuestaCorrecta/texto";
import CardSelectTexto from "../../../../../../../components/LogicaEjercicios/CardSelectTexto";

export default {
  name: "Dynamic",
  props: ["helpers", "subject", "imagenDynamic"],
  components: {
    "ejercicio-slot": EjercicioSlot,
    "card-select-texto": CardSelectTexto,
    "respuesta-usuario": RespuestaUsuario,
    "respuesta-correcta": RespuestaCorrecta
  },
  data() {
    return {
      textSize: "title",
      btn1: false,
      btn2: false,
      btn3: false,
      paralela: "paralela",
      secante: "secante",
      perpendicular: "perpendicular",
      imagenRespuesta: "parpersecresp.svg",
      dummy: {
        imagen: "secante1.svg",
        correcta: "secante"
      }
    };
  },
  methods: {
    active1(input, answerData) {
      this.btn1 = false;
      this.btn2 = false;
      this.btn3 = false;

      if (!input) {
        this.respuestaCorrectaChecker(answerData);
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
        this.respuestaCorrectaChecker(answerData);
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
        this.respuestaCorrectaChecker(answerData);
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
          textoCard: this.paralela
        },
        {
          btn: this.btn2,
          active: this.active2,
          textoCard: this.secante
        },
        {
          btn: this.btn3,
          active: this.active3,
          textoCard: this.perpendicular
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
