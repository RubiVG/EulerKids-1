<template>
  <span class="katex blue--text text--darken-1" v-katex="boxedStringAnswer(correct)">
  </span>
</template>

<script>
import { boxedStringAnswer } from "../../../methods/exercises/util";

export default {
  name: "ResCorrBoxedString",
  props: ["correct"],
  data() {
    return {
      boxedStringAnswer
    }
  }
};
</script>

