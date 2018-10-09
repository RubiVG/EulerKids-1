<template>
  <span :class="helpers.tuRespuestaColor($store.state.Learn.userAnswer)"
        v-katex="expresion">
  </span>
</template>

<script>
export default {
  name: "Katex",
  props: ["helpers", "expresion"]
};
</script>
