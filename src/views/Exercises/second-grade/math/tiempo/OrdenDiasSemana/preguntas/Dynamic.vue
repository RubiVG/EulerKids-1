<template>
  <ejercicio-slot>
    <div slot="instruccion">
      Selecciona la respuesta correcta:
    </div>
    <div slot="operacion">
      <div v-if="question.despues">
        ¿Cuál es el día de la semana que viene
        <b><span class="blue--text darken--1--text">{{ question.adverbio }}</span></b>
        {{ question.contraccion }} <span>{{ question.diaPregunta }}</span>?
      </div>
      <!--Anterior-->
      <div v-if="question.anterior">
        ¿Cuál es el día
        <b><span class="blue--text darken--1--text">{{ question.adverbio }}</span></b>
        {{ question.contraccion }} <span>{{ question.diaPregunta }}</span>?
      </div>
      <!--Mañana - Ayer-->
      <div v-if="question.manana">
        Hoy es <span>{{ question.diaPregunta }}</span>
        ¿Qué día {{ question.verbo }}
        <b>
          <span class="blue--text darken--1--text">{{ question.adverbio }}</span>
        </b>?
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
        El orden de los días de la semana es:
      </div>
      <div class="mt-3">
        <img :src="imagenDynamic(question.imagen)"
             height="350"
             class="responsive">
      </div>
      <br/>
      <!--Respuesta anterior y después-->
      <div v-if="anteriorDespues">
        <div class="mt-3">
          Podemos notar que el día
          <b><span class="blue--text darken--1--text">{{ question.adverbio }}</span></b>
          {{ question.contraccion }} {{ question.diaPregunta }}
          es el
          <b><span class="blue--text darken--1--text">{{ question.correcta }}</span></b>.
        </div>
      </div>
      <!--Respuesta mañana y ayer-->
      <div v-if="question.manana">
        <div class="mt-3">
          Si hoy es {{ question.diaPregunta }}
          <b><span class="blue--text darken--1--text">{{ question.adverbio }}</span></b>
          {{ question.verbo }}
          <b><span class="blue--text darken--1--text">{{ question.correcta }}</span></b>.
        </div>
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
  props: [
    "helpers",
    "subject",
    "imagenDynamic",
    "shuffleFisher"
  ],
  components: {
    "card-select-texto": CardSelectTexto,
    "ejercicio-slot": EjercicioSlot,
    "respuesta-usuario": RespuestaUsuario,
    "respuesta-correcta": RespuestaCorrecta
  },
  data() {
    return {
      btn1: false,
      btn2: false,
      textSize: "title",
      //Dummy
      dummy: {
        adverbio: "después",
        diaPregunta: "lunes",
        correcta: "martes",
        imagen: "desLunes.svg",
        dia1: "martes",
        dia2: "sábado",
        dias: ["martes", "sábado"],
        contraccion: "del",
        despues: true //para render la lógica del planteamiento
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
          textoCard: this.dias[0]
        },
        {
          btn: this.btn2,
          active: this.active2,
          textoCard: this.dias[1]
        }
      ];

      return questions;
    },
    question() {
      return this.$store.state.Learn.question;
    },
    dias() {
      const dias = [this.question.dia1, this.question.dia2];

      return this.shuffleFisher(dias);
    },
    anteriorDespues() {
      return this.question.anterior || this.question.despues;
    }
  }
};
</script>
