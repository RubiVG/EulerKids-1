<template>
  <ejercicio-slot>
    <div slot="instruccion">
      Escribe el siguiente número en forma <b><span class="blue--text darken--1--text"> estándar</span></b>.
      No olvides las comas.
    </div>
    <div slot="operacion">
      <span class="katex" v-katex="question.escribe"></span>
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
      <div>Coloquemos cada dígito en su valor posicional:</div>
      <!--unidades de millar-->
      <v-data-table
              v-if="question.unidadesMillar"
              :headers="question.headers"
              :items="question.valores"
              hide-actions
              class="elevation-1 mt-2">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.unidadesMillar }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.centenas }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.decenas }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.unidades }}</td>
        </template>
      </v-data-table>
      <!--decenas de millar-->
      <v-data-table
              v-if="question.decenasMillar"
              :headers="question.headers"
              :items="question.valores"
              hide-actions
              class="elevation-1 mt-2">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.decenasMillar }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.unidadesMillar }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.centenas }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.decenas }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.unidades }}</td>
        </template>
      </v-data-table>
      <!--centenas de millar-->
      <v-data-table
              v-if="question.centenasMillar"
              :headers="question.headers"
              :items="question.valores"
              hide-actions
              class="elevation-1 mt-2">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.centenasMillar }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.decenasMillar }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.unidadesMillar }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.centenas }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.decenas }}</td>
          <td class="text-xs-center title blue--text text--darken-1">{{ props.item.unidades }}</td>
        </template>
      </v-data-table>
      <br/>
      <div v-for="respuesta in question.respuestas">
        <span class="katex" v-katex="respuesta.numero"></span> {{ respuesta.verbo }}
        <span class="katex" v-katex="respuesta.valor"></span>
        <span class="blue--text text--darken-1"> {{ respuesta.unidad }}</span>
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
      // Dummy Data
      correcta: "6,857",
      headers: [
        {
          text: "Unidades de Millar",
          value: "unidadesMillar",
          align: "center",
          sortable: false
        },
        {
          text: "Centenas",
          value: "centenas",
          align: "center",
          sortable: false
        },
        {
          text: "Decenas",
          value: "decenas",
          align: "center",
          sortable: false
        },
        {
          text: "Unidades",
          value: "unidades",
          align: "center",
          sortable: false
        }
      ],
      valores: [
        {
          value: false,
          unidadesMillar: "6",
          centenas: "8",
          decenas: "5",
          unidades: "7"
        }
      ],
      respuestas: [
        {
          numero: "6,000",
          verbo: "son",
          valor: "6",
          unidad: "unidades de millar"
        },
        {
          numero: "800",
          verbo: "son",
          valor: "8",
          unidad: "centenas"
        },
        {
          numero: "50",
          verbo: "son",
          valor: "5",
          unidad: "decenas"
        },
        {
          numero: "7",
          verbo: "son",
          valor: "7",
          unidad: "unidades"
        }
      ]
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
