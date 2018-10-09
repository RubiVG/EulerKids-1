<template>
  <v-flex xs12
          md6
          offset-md3
          xl4
          offset-xl4>
    <v-card tile>
      <v-container fluid grid-list-lg>
        <v-layout>
          <v-flex>
            <v-flex xs12 >
              <v-alert outline
                       class="subheading text-xs-center"
                       :color="helpers.colorMaster(subject)"
                       :icon="icon"
                       :value="true">
                {{ msg }}
              </v-alert>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "CardInfo",
  props: ["helpers", "subject", "icon", "msg"]
};
</script>
