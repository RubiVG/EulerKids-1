<template>
  <v-flex xs12 sm6>
    <!--Card con click-->
    <v-card
      v-if="!$store.state.Learn.gotIt"
      hover
      ripple
      :color="helpers.colorToggleEjer(btn, subject)"
      @click.native="active(btn, answerData)"
    >
      <v-container>
        <v-img contain :src="img" height="200"> </v-img>
      </v-container>
    </v-card>
    <!--Card sin click para gotIt-->
    <v-card
      v-if="$store.state.Learn.gotIt"
      :color="helpers.colorToggleEjer(btn, subject)"
    >
      <v-container>
        <v-img contain :src="img" height="200"> </v-img>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "CardSelectImagen",
  props: ["helpers", "btn", "active", "img", "subject", "answerData"]
};
</script>
