<template>
  <v-layout row
            wrap
            class="mt-0">
    <v-flex xs12
            xl10
            offset-xl1>
      <v-tabs icons-and-text
              centered
              dark
              :color="helpers.colorMaster(subject)"
              v-model="active">
        <v-tabs-slider color="pink"/>
        <v-spacer/>
        <v-btn flat
               :dark="isDark(makeBook[counter - 1])"
               icon
               class="hidden-xs-only mt-3"
               :disabled="disabled(makeBook[counter - 1])"
               @click="prev">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-tab v-for="tab in tabs"
               :key="tab.title"
               ripple
               :href="tab.href">
          {{ tab.title }}
          <v-icon>{{ tab.icon }}</v-icon>
        </v-tab>
        <v-btn flat
               :dark="isDark(makeBook[counter + 1])"
               icon
               class="hidden-xs-only mt-3"
               :disabled="disabled(makeBook[counter + 1])"
               @click="next">
          <v-icon>arrow_forward</v-icon>
        </v-btn>
        <v-spacer/>
        <v-tab-item :transition="transition"
                    :reverse-transition="transition"
                    id="learn">
          <v-card class="mt-4">
            <v-layout row
                      justify-space-around>
              <v-flex xs2
                      class="hidden-sm-and-up">
                <div class="text-xs-left">
                  <v-btn small
                         fab
                         dark
                         :color="helpers.colorMaster(subject)"
                         :disabled="disabled(makeBook[counter - 1])"
                         :dark="isDark(makeBook[counter - 1])"
                         @click="prev">
                    <v-icon>arrow_back</v-icon>
                  </v-btn>
                </div>
              </v-flex>
              <v-flex xs2>
                <div class="text-xs-center">
                  <v-btn small
                         fab
                         dark
                         :color="helpers.colorMaster(subject)"
                         @click="goToLessons">
                    <v-icon>menu</v-icon>
                  </v-btn>
                </div>
              </v-flex>
              <v-flex xs2
                      class="hidden-sm-and-up">
                <div class="text-xs-right">
                  <v-btn small
                         fab
                         dark
                         :color="helpers.colorMaster(subject)"
                         :disabled="disabled(makeBook[counter + 1])"
                         :dark="isDark(makeBook[counter + 1])"
                         @click="next">
                    <v-icon>arrow_forward</v-icon>
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
            <component :is="currentView">
            </component>
          </v-card>
        </v-tab-item>
        <v-tab-item :transition="transition"
                    :reverse-transition="transition"
                    id="practice">
          <v-flex xs12
                  sm6
                  offset-sm3
                  v-for="exercise in exercisesList"
                  :key="exercise.exercise">
            <app-card-practica
                    :id="exercise.exercise"
                    :img="exerciseImg(exercise.img)"
                    :gradient="helpers.gradiante(subject)"
                    :to="exercise.to">
            </app-card-practica>
          </v-flex>
        </v-tab-item>
        <v-tab-item id="progress"
                    :transition="transition"
                    :reverse-transition="transition">
          <v-flex xs12>
            <card-info v-if="!isAuthenticated"
                       :helpers="helpers"
                       :subject="subject"
                       :icon="icon"
                       :msg="msg">
            </card-info>
            <app-progreso v-if="isAuthenticated"
                          :spinner="spinner"
                          :src="srcProgress"
                          :imgLessons="imgLessons"
                          :total="total"
                          :correct="correct"
                          :time="time"
                          :rating="rating"
                          :max="max"
                          :exerciseName="exerciseName"
                          :size="size"
                          :width="width">
            </app-progreso>
          </v-flex>
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import LearnMixin from "../../../mixins/learn";
import { lessons } from "./lessons/handler";

export default {
  name: "Lesson",
  props: [
    "helpers",
    "get",
    "subject",
    "grade",
    "skill",
    "lessons",
    "lesson",
    "lessonsList",
    "imgLessons",
    "isAuthenticated"
  ],
  mixins: [LearnMixin],
  components: lessons,
  data() {
    return {
      icon: "info",
      msg: "Log in to track your progress",
      size: 60,
      width: 2,
      counter: 0,
      transition: false,
      active: null
    };
  },
  methods: {
    goToLessons() {
      this.$router.push({ name: "lessons" });
    },
    counterInit() {
      this.counter = this.makeBook.indexOf(this.lesson);
    },
    next() {
      this.counter = this.makeBook.indexOf(this.lesson);
      this.counter++;
      this.$router.push({ path: this.makeBook[this.counter] });
    },
    prev() {
      this.counter = this.makeBook.indexOf(this.lesson);
      this.counter--;
      this.$router.push({ path: this.makeBook[this.counter] });
    },
    disabled(input) {
      return !input;
    },
    isDark(input) {
      return !!input;
    },
    exerciseImg(getImagenLeccion) {
      return require(`@/assets/Lesson/${this.grade}/${
        this.subject
      }/cards/${getImagenLeccion}`);
    },
    getProgress() {
      this.$store
        .dispatch("Learn/getProgress")
        .then(() => {})
        .catch(() => {});
    }
  },
  computed: {
    makeBook() {
      return this.get(
        this.lessons,
        `${this.grade}.${this.subject}.${this.skill}.lessons`,
        []
      ).map(a => {
        return a.page;
      });
    },
    currentView() {
      return this.get(lessons, this.lesson, false);
    },
    exercisesList() {
      return this.get(
        this.lessons,
        `${this.grade}.${this.subject}.${this.skill}.lessons`,
        []
      )
        .filter(a => a.page === this.lesson)
        .reduce((a, b) => {
          return b.exercises;
        }, []);
    },
    tabs() {
      if (this.currentView) {
        this.active = "learn";
        return [
          {
            title: "Learn",
            icon: "book",
            href: "#learn"
          },
          {
            title: "Practice",
            icon: "create",
            href: "#practice"
          },
          {
            title: "Progress",
            icon: "trending_up",
            href: "#progress"
          }
        ];
      }
      this.active = "practice";
      return [
        {
          title: "Practice",
          icon: "create",
          href: "#practice"
        },
        {
          title: "Progress",
          icon: "trending_up",
          href: "#progress"
        }
      ];
    },
    srcProgress() {
      let obj = this.lessonsList
        .filter(e => e.page === this.lesson)
        .reduce((a, b) => {
          return b;
        }, []);

      return this.get(obj, "img", false);
    },
    total() {
      return this.get(this.$store.state.Learn.progress, "total", 0);
    },
    correct() {
      return this.get(this.$store.state.Learn.progress, "correct", 0);
    },
    time() {
      return this.get(this.$store.state.Learn.progress, "time", 0);
    },
    rating() {
      return this.get(this.$store.state.Learn.progress, "rating", 0);
    },
    spinner() {
      return this.$store.state.Learn.spinner;
    },
    exerciseName() {
      return this.get(
        this.lessons,
        `${this.grade}.${this.subject}.${this.skill}.lessons`,
        []
      )
        .filter(a => a.page === this.lesson)
        .reduce((a, b) => {
          return b.exercises;
        }, [])
        .filter(a => a.exercise === this.lesson + "-e")
        .reduce((a, b) => {
          return b.exerciseName;
        }, "(▰˘◡˘▰)");
    }
  },
  watch: {
    $route(id) {
      // Este watch es necesario para buscar progreso de lección y páginas del libro
      this.counterInit();
      if (this.isAuthenticated) {
        this.getProgress();
      }
    }
  },
  created() {
    this.$store.commit("error500Data", false);
    this.counterInit();

    if (this.isAuthenticated) {
      this.getProgress();
    }
  }
};
</script>
