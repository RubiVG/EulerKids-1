<template>
  <v-layout>
    <v-flex xs12
            md6
            offset-md3
            xl4
            offset-xl4>
      <v-card tile>
        <v-container grid-list-sm>
          <v-layout>
            <v-flex xs12>
              <v-alert v-if="errorMsgGetter"
                       outline
                       color="error"
                       icon="warning"
                       :value="true">
                {{ errorMsgGetter }}
                <ul v-for="error in errorsGetter">
                  <li>{{ error.msg }}</li>
                </ul>
              </v-alert>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "CardErrors",
  props: ["errorMsgGetter", "errorsGetter"]
};
</script>
