<template>
  <ejercicio-slot>
    <div slot="instruccion">
      Resuelve la suma:
    </div>
    <div slot="operacion">
      <div>
        <span class="katex" v-katex="question.suma"></span>
      </div>
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
        Recuerda que debemos comenzar sumando las unidades de cada cantidad.
      </div>
      <div>
        <span class="katex" v-katex="question.expresionUnidades"></span>
      </div>
      <div>
        Después sumamos las decenas de cada cantidad.
      </div>
      <div>
        <span class="katex" v-katex="question.expresionDecenas"></span>
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
        suma: "25 + 14 =",
        expresionUnidades:
          "2\\textcolor{#1E88E5}{5} + 1\\textcolor{#1E88E5}{4} = \\textcolor{#1E88E5}{9}",
        expresionDecenas:
          "\\textcolor{#1E88E5}{2}5 + \\textcolor{#1E88E5}{1}4 = \\textcolor{#1E88E5}{3}9",
        correcta: "39",
        respuesta: "25 + 14 = 39"
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
      // Tenemos que hacer commit de getRespuestaUsuario y si la respuesta
      // es correcta (input === respuestaCorrecta) pasamos true en el payload.
      // respuestaData en el caso del input es la respuesta del usuario

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
