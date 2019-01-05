<template>
  <v-layout row wrap class="ml-0 mr-0">
    <v-flex xs12 sm6 md4 v-for="skill in skillsList" :key="skill.to">
      <skill-card
        :img="skillsImg(skill.img)"
        :gradient="gradient(subject)"
        :to="skill.to"
      >
      </skill-card>
    </v-flex>
  </v-layout>
</template>

<script>
import SkillCard from "../../../components/Cards/CardTemas.vue";

export default {
  name: "Skills",
  props: ["gradient", "skillsImg", "skillsList", "subject"],
  components: {
    "skill-card": SkillCard
  },
  created() {
    this.$store.commit("error500Data", false);
  }
};
</script>
