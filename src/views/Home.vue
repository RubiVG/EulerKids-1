<template>
  <div>
    <section>
      <v-parallax :src="paralax" height="450">
        <v-layout
          column
          align-center
          justify-center
          class="grey--text text--darken-2"
        >
          <img :src="logo" alt="Euler Kids" height="150" />
          <img
            :src="slogan"
            class="responsiveSub
             mt-3"
            alt="practica"
          />
        </v-layout>
      </v-parallax>
    </section>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="subject in subjects" :key="subject.title">
          <subject-card
            :title="subject.title"
            :description="subject.description"
            :img="asset(subject.img)"
            :gradient="subject.gradient"
            :to="subject.to"
          >
          </subject-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import SubjectCard from "../components/Cards/MateriasCard";
import axios from "axios";

export default {
  name: "Home",
  components: {
    "subject-card": SubjectCard
  },
  data() {
    return {
      height: "400",
      subjects: [
        {
          title: "Math",
          description:
            "Enter into a magical world where you´ll discover the beauty of mathematics!",
          img: "math.svg",
          gradient: "grad2",
          to: "/learn/math"
        },
        {
          title: "Science",
          description: "Discover the wonders of the universe through science!",
          img: "science.svg",
          gradient: "grad3",
          to: "/learn/science"
        },
        {
          title: "Language",
          description:
            "Learn how to communicate by landing on the language planet!",
          img: "language.svg",
          gradient: "grad1",
          to: "/learn/language"
        }
      ]
    };
  },
  methods: {
    asset(subject) {
      return require(`@/assets/Subjects/${subject}`);
    }
  },
  computed: {
    paralax() {
      return require(`@/assets/Landing/stars.svg`);
    },
    logo() {
      return require(`@/assets/Landing/ekLogo.svg`);
    },
    slogan() {
      return require(`@/assets/Landing/ekSlogan.svg`);
    }
  },
  created() {
    this.$store.commit("getUrlName", this.$route.name);
  }
};
</script>

<style scoped>
.responsiveSub {
  width: 100%;
  height: 40px;
}
</style>
