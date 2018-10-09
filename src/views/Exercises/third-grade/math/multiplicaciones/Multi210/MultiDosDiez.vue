<template>
  <component :is="currentView"
             :helpers="helpers"
             :enterPressed="enterPressed"
             :question="question">
  </component>
</template>

<script>
import MixinInput1 from "../../../../../../mixins/logicaEjercicios/input1";
const questions = {
  Dynamic: () => import("./preguntas/Dynamic")
};

export default {
  name: "MultiDosDiez",
  props: ["helpers"],
  mixins: [MixinInput1],
  components: questions,
  computed: {
    currentView() {
      return "Dynamic";
    }
  }
};
</script>
