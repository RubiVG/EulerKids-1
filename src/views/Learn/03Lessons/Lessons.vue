<template>
  <v-layout row
            wrap
            class="mt-0">
    <v-flex xs12
            sm8
            offset-sm2
            md6
            offset-md3
            xl4
            offset-xl4>
      <lessons-card :img="imgCard(getImgCard)"
                          :lessonsList="lessonsList"
                          :listData="listData"
                          :becomeEuler="becomeEuler"
                          :max="max"
                          :imgLessons="imgLessons"
                          :lessonsText="lessonsText"
                          :lessonName="lessonName"
                          :rating="rating"
                          :isAuthenticated="isAuthenticated">
      </lessons-card>
    </v-flex>
  </v-layout>
</template>

<script>
import LessonsCard from "../../../components/Cards/LessonsCard";
import MixinLearn from "../../../mixins/learn";

export default {
  name: "Lessons",
  props: [
    "lessonsList",
    "getImgCard",
    "imgCard",
    "imgLessons",
    "isAuthenticated"
  ],
  mixins: [MixinLearn],
  components: {
    "lessons-card": LessonsCard
  },
  data() {
    return {
      lessonName: "lesson",
      rating: "rating"
    };
  },
  methods: {
    lessonLevels() {
      this.$store
        .dispatch("Learn/lessonLevels")
        .then(() => {})
        .catch(() => {});
    },
    listData(lessonsList, lessonsText, lessonName, rating) {
      let hash = Object.create(null),
        result = lessonsList.map(o => {
          return (hash[o[lessonName]] = Object.assign({}, o));
        });
      lessonsText.forEach(o => {
        if (hash[o[lessonName]]) {
          hash[o[lessonName]][rating] = o[rating];
        }
      });

      return result.map(e => e.rating);
    }
  },
  computed: {
    lessonsText() {
      return this.$store.state.Learn.lessonsName;
    }
  },
  created() {
    this.$store.commit("error500Data", false);

    if (this.isAuthenticated) {
      this.lessonLevels();
    }
  }
};
</script>
