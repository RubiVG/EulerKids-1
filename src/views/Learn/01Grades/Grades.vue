<template>
  <v-layout row
            wrap
            class="ml-0 mr-0">
    <v-flex xs12
            sm6
            md4
            v-for="(grade, i) in grades"
            :key="i">
      <grade-card :img="asset(grade.img)"
                   :gradient="grade.gradient"
                   :to="grade.to">
      </grade-card>
    </v-flex>
  </v-layout>
</template>

<script>
import GradeCard from "../../../components/Cards/CardTemas.vue";

export default {
  name: "Grades",
  props: ["subject"],
  components: {
    "grade-card": GradeCard
  },
  data() {
    return {
      math: [
        {
          img: "first.svg",
          gradient: "grad2",
          to: "math/first-grade"
        },
        {
          img: "second.svg",
          gradient: "grad2",
          to: "math/second-grade"
        },
        // {
        //   img: "third.svg",
        //   gradient: "grad2",
        //   to: "math/third-grade"
        // },
        // {
        //   img: "fourth.svg",
        //   gradient: "grad2",
        //   to: "math/fourth-grade"
        // },
        // {
        //   img: "fifth.svg",
        //   gradient: "grad2",
        //   to: "math/fifth-grade"
        // },
        // {
        //   img: "sixth.svg",
        //   gradient: "grad2",
        //   to: "math/sixth-grade"
        // }
      ],
      science: [
        {
          img: "underConst.svg",
          gradient: "grad3",
          to: "/learn/science"
        }
      ],
      language: [
        {
          img: "underConst.svg",
          gradient: "grad1",
          to: "/learn/language"
        }
      ]
    };
  },
  methods: {
    asset(grade) {
      return require(`@/assets/Grades/${grade}`);
    }
  },
  computed: {
    grades() {
      const subjects = {
        math: this.math,
        science: this.science,
        language: this.language
      };

      return subjects[this.subject];
    }
  },
  created() {
    this.$store.commit("error500Data", false);
  }
};
</script>
