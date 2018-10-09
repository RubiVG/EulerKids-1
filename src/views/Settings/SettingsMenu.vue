<template>
  <v-layout row
            wrap
            class="ml-0 mr-0">
    <v-flex xs12
            sm6
            md4
            v-for="setting in settings"
            :key="setting.to">
      <card-temas
              :img="imgSettings(setting.img)"
              :gradient="gradient"
              :to="setting.to">
      </card-temas>
    </v-flex>
  </v-layout>
</template>

<script>
import CardTemas from "../../components/Cards/CardTemas.vue";
export default {
  name: "SettingsMenu",
  props: ["isAuthenticated", "gradient", "imgSettings", "settings"],
  components: {
    "card-temas": CardTemas
  },
  created() {
    if (!this.isAuthenticated) {
      this.$store.commit("dialogPayload", true)
    }
  }
};
</script>
