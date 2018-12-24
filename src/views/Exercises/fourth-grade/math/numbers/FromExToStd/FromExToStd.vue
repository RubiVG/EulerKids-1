<template>
  <component
    :is="currentView"
    :helpers="helpers"
    :enterPressed="enterPressed"
    :question="question"
  >
  </component>
</template>

<script>
import MixinInput1 from "../../../../../../mixins/logicaEjercicios/input1";

export default {
  name: "FromExToStd",
  props: ["helpers"],
  mixins: [MixinInput1],
  components: {
    Statement: () => import("./Statement/Statement")
  },
  computed: {
    currentView() {
      return "Statement";
    }
  }
};
</script>
