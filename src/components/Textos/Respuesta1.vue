<template>
  <div>
    <div class="grey--text text--darken-1 title ">
      Tu respuesta fue:
      <span v-if="$store.state.Learn.userAnswer"
            :class="helpers.tuRespuestaColor($store.state.Learn.userAnswer)">
        {{ correctaTexto }}
      </span>
      <span v-if="!$store.state.Learn.userAnswer"
            :class="helpers.tuRespuestaColor($store.state.Learn.userAnswer)">
        {{ incorrectaTexto }}
      </span>
    </div>
    <br/>
    <div class="grey--text text--darken-1 title ">
      Solución:
    </div>
  </div>
</template>

<script>
export default {
  name: "Respuesta1",
  props: ["helpers", "correctaTexto", "incorrectaTexto"]
};
</script>
