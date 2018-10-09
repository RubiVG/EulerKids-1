<template>
  <div>
    <div v-if="instruction"
         class="grey--text text--darken-2 subheading">
      <slot name="instruction"></slot>
    </div>
    <div v-if="operation"
         class="grey--text text--darken-2 subheading">
      <slot name="operation"></slot>
    </div>
    <div v-if="interaction"
         class="grey--text text--darken-2 subheading">
      <slot name="interaction"></slot>
    </div>
    <br/>
    <div v-if="$store.state.Learn.gotIt"
         :class="$store.state.Learn.answerBackgroundColor">
      <v-container fluid>
        <div v-if="yourAnswer"
             class="grey--text text--darken-1 title">
          Your answer was:
          <div class="mt-2">
            <slot name="yourAnswer"></slot>
          </div>
          <br/>
        </div>
        <div v-if="solution">
          <div class="grey--text text--darken-1 title">
            Solution:
          </div>
          <div class="mt-2 grey--text text--darken-2 subheading">
            <slot name="solution"></slot>
          </div>
          <br/>
        </div>
        <div v-if="correctAnswer">
          <div class="grey--text text--darken-1 title">
            Correct Answer:
          </div>
          <div class="mt-2 grey--text text--darken-2 subheading">
            <slot name="correctAnswer"></slot>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import partesEjercicio from "../../../mixins/partesEjercicio";

export default {
  name: "EjercicioSlot",
  mixins: [partesEjercicio]
};
</script>
