|<template>
  <ejercicio-slot>
    <div slot="instruction">
    </div>
    <div slot="operation">
      <span v-html="question.operacion"></span>
    </div>
    <div slot="interaction">
      <v-container fluid>
        <v-layout row
                  wrap>
          <card-select-imagen
                  v-for="question in questions"
                  :key="question.img"
                  :helpers="helpers"
                  :subject="subject"
                  :btn="question.btn"
                  :active="question.active"
                  :img="question.img"
                  :answerData="question.answerData">
          </card-select-imagen>
        </v-layout>
      </v-container>
    </div>
    <div slot="yourAnswer">
      <!--Control para checar respuesta correcta e imágen borrar después-->
      <!--<span :class="helpers.tuRespuestaColor($store.state.Learn.respuestaUsuario)">-->
        <!--{{ $store.state.Learn.respuestaData }}-->
      <!--</span>-->
      <respuesta-usuario :img="img"
                         :answerData="$store.state.Learn.answerData"/>
    </div>
    <div slot="solution">
      <div>
        <span v-html="question.solucion"></span>
      </div>
      <div class="images-2">
        <img :src="img(question.imagenR1)"
             height="200">
        <img :src="img(question.imagenR2)"
             height="200">
      </div>
    </div>
    <div slot="correctAnswer">
      <respuesta-correcta :img="img"
                          :answerData="question.correcta"/>
    </div>
  </ejercicio-slot>
</template>

<script>
import EjercicioSlot from "../../../../../slots/EjercicioSlot";
import RespuestaUsuario from "../../../../../../../components/RespuestaEjercicios/respuestaUsuario/Imagen";
import RespuestaCorrecta from "../../../../../../../components/RespuestaEjercicios/respuestaCorrecta/Imagen";
import CardSelectImagen from "../../../../../../../components/LogicaEjercicios/CardSelectImagen";
import { shuffleFisher } from "../../../../../../../methods/exercises/util";

export default {
  name: "Dynamic",
  props: ["helpers", "subject", "img"],
  components: {
    "ejercicio-slot": EjercicioSlot,
    "respuesta-usuario": RespuestaUsuario,
    "respuesta-correcta": RespuestaCorrecta,
    "card-select-imagen": CardSelectImagen
  },
  data() {
    return {
      btn1: false,
      btn2: false,
      dummy: {
        operacion: `
        <div>
          Javier y Rosita fueron a la tienda de dulces, cada uno compró una bolsa diferente.
        </div>
        <div>
          ¿Quién compró la bolsa con <b><span class="blue--text darken--1--text">más</span></b>
          dulces?
        </div>
        `,
        solucion: `
          <div class="mt-2 grey--text text--darken-2 subheading">
            <div>
              Notemos que la bolsa de Rosita está más llena.
            </div>
            <div >
              Cuando contamos los dulces de cada bolsa podemos darnos cuenta que la bolsa de Javier
              sólo tiene <span class="blue--text text--darken-1 katex" v-katex="'4'"></span>
              dulces y la de Rosita tiene <span class="blue--text text--darken-1 katex" v-katex="'6'"></span> dulces.
            </div>
          </div>
        `,
        imagen1: "rosita6.svg",
        imagen2: "javier4.svg",
        correcta: "rosita6.svg",
        imagenR1: "rosita6_R.svg",
        imagenR2: "javier4_R.svg"
      }
    };
  },
  methods: {
    active1(input, answerData) {
      this.btn1 = false;
      this.btn2 = false;

      if (!input) {
        this.respuestaCorrectaChecker(answerData);
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
        this.respuestaCorrectaChecker(answerData);
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
          img: this.img(this.imgs[0]),
          answerData: this.imgs[0]
        },
        {
          btn: this.btn2,
          active: this.active2,
          img: this.img(this.imgs[1]),
          answerData: this.imgs[1]
        }
      ];

      return questions;
    },
    question() {
      return this.$store.state.Learn.question;
    },
    imgs() {
      const imgs = [this.question.imagen1, this.question.imagen2];

      return shuffleFisher(imgs);
    }
  }
};
</script>
