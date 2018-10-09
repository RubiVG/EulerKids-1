<template>
  <div>
    <div v-if="$store.state.Learn.userAnswer"
         class="images-2 responsive">
      <v-flex xs12
              sm4
              offset-sm4>
        <div>
          <v-img :src="img(question.folder, question.correct)"
                 height="150"
                 contain>
          </v-img>
        </div>
      </v-flex>
    </div>
    <div v-if="!$store.state.Learn.userAnswer"
         class="images-2 responsive">
      <v-flex xs12
              sm4
              offset-sm4 >
        <div>
          <v-img :src="img(question.folder, question.incorrect)"
                 height="150"
                 contain>
          </v-img>
        </div>
      </v-flex>
    </div>
  </div>
</template>

<script>
export default {
  name: "Respuesta2",
  props: ["helpers", "img", "question"]
};
</script>
