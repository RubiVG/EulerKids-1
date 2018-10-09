<template>
  <component :is="currentView"
             :helpers="helpers"
             :shuffleFisher="shuffleFisher"
             :subject="subject"
             :imagenDynamic="imagenDynamic">
  </component>
</template>

<script>
import { shuffleFisher } from "../../../../../../methods/exercises/util";
const preguntas = {
  Dynamic: () => import("./preguntas/Dynamic")
};

export default {
  name: "OrdenDiasSemana",
  props: ["helpers", "subject"],
  components: preguntas,
  data() {
    return {
      shuffleFisher
    };
  },
  methods: {
    imagenDynamic(imagen) {
      return require(`@/assets/Exercises/segundo/matematicas/tiempo/OrdenDiasSemana/${imagen}`);
    }
  },
  computed: {
    currentView() {
      return "Dynamic";
    }
  }
};
</script>
