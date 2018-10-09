<template>
  <span class="boxed title">
    <span class="katex blue--text text--darken-1" v-katex="correcta"></span>
  </span>
</template>

<script>
export default {
  name: "ResCorrKatexBox",
  props: ["correcta"]
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
