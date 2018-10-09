<template>
  <div v-if="answerData">
    <v-img :src="img(answerData)"
           height="200"
           contain>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Imagen",
  props: ["img", "answerData"]
};
</script>
