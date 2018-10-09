<template>
  <v-flex xs12
          sm6>
    <!--Card con click-->
    <v-card v-if="!$store.state.Learn.gotIt"
            hover
            ripple
            :color="colorToggle(btn, subject)"
            @click.native="active(btn, answerData)">
      <v-container>
        <v-img contain
               :src="img"
               height="200">
        </v-img>
      </v-container>
    </v-card>

    <!--Card sin click para gotIt-->
    <v-card v-if="$store.state.Learn.gotIt"
            :color="colorToggle(btn, subject)">
      <v-container>
        <v-img contain
               :src="img"
               height="200">
        </v-img>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "CardPreguntaEjer",
  props: ["colorToggle", "btn", "active", "img", "subject", "answerData"]
};
</script>
