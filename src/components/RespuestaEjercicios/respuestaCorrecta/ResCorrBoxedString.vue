<template>
  <span class="katex blue--text text--darken-1" v-katex="boxedStringAnswer(correcta)">
  </span>
</template>

<script>
import { boxedStringAnswer } from "../../../methods/exercises/util";

export default {
  name: "ResCorrBoxedString",
  props: ["correcta"],
  data() {
    return {
      boxedStringAnswer
    }
  }
};
</script>

