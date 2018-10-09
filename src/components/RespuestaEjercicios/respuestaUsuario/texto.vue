<template>
  <span :class="helpers.tuRespuestaColor(userAnswer)">
    {{ answerData }}
  </span>
</template>

<script>
export default {
  name: "texto",
  props: ["helpers", "userAnswer", "answerData"]
};
</script>
