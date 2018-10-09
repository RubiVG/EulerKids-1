<template>
  <span :class="helpers.tuRespuestaColor($store.state.Learn.userAnswer)"
        class="boxed">
    <span class="katex" v-katex="expresion"></span>
  </span>
</template>

<script>
export default {
  name: "RespuestaKatexBox",
  props:["helpers", "expresion"]
};
</script>

<style scoped>
.boxed {
  display: inline-block;
  width: 50px;
  border: 1px solid #000;
  text-align: center;
}
</style>
