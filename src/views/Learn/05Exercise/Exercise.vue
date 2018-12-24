<template>
  <v-layout row wrap class="mt-0">
    <card-info
      v-if="!isAuthenticated"
      :id="top"
      :helpers="helpers"
      :subject="subject"
      :icon="icon"
      :msg="msg"
    >
    </card-info>
    <v-flex v-if="isAuthenticated" xs12 md8 offset-md2 xl6 offset-xl3>
      <!--Level Bar-->
      <v-card :id="top">
        <v-container>
          <spinner v-if="spinner" :size="size2" :width="width"> </spinner>
          <v-layout row justify-space-between>
            <v-flex xs9 md10>
              <div id="myProgress" class="mt-3" v-if="!spinner">
                <div
                  id="myBar"
                  :style="{
                    width: changeWidth(rating),
                    'background-color': barColor(rating)
                  }"
                >
                  <div class="subheading">{{ barNumber(rating) }}</div>
                </div>
              </div>
            </v-flex>
            <v-flex xs3 md2 v-if="!spinner">
              <v-img
                :src="becomeEuler(rating, max)"
                contain
                height="50"
                class="mb-2"
              >
              </v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <!--Statement-->
    <v-flex xs12 xl10 offset-xl1>
      <v-card>
        <v-container fluid>
          <div :class="borderColor(subject)">
            <div class="grey--text text--darken-1 title ">
              <b>{{ skillName }}</b>
            </div>
            <div class="grey--text text--darken-1 subheading">
              {{ exerciseName }}
            </div>
            <div v-if="!spinner">
              <v-flex xs12 v-if="alertRespuesta">
                <v-alert
                  :value="true"
                  :color="answerAlertColor(userAnswer)"
                  :icon="iconAlert(userAnswer)"
                >
                  <div class="title">{{ emoji(userAnswer) }}</div>
                </v-alert>
              </v-flex>
            </div>
            <spinner v-if="spinner" :size="size" :width="width"> </spinner>
            <component
              v-if="!spinner"
              class="mt-3"
              :is="currentView"
              :helpers="helpers"
              :subject="subject"
            >
            </component>
            <v-btn
              v-if="!$store.state.Learn.gotIt"
              class="mt-3"
              :dark="!disabled"
              :color="helpers.btnColorMaster(subject)"
              :disabled="disabled"
              @click="check"
            >
              Check
            </v-btn>
            <v-btn
              v-if="$store.state.Learn.gotIt"
              class="mt-3"
              :color="helpers.btnColorMaster(subject)"
              dark
              @click="gotIt"
            >
              {{ btnGotItText(userAnswer) }}
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-flex>
    <!--/Statement-->
  </v-layout>
</template>
<script>
import MixinAprende from "../../../mixins/learn";
import { exercises } from "../../Exercises/exercisesList/handler";
import get from "lodash.get";
import glicko2 from "glicko2";

export default {
  name: "Ejercicio",
  props: [
    "subject",
    "skill",
    "exercise",
    "exerciseName",
    "skillName",
    "helpers",
    "isAuthenticated"
  ],
  mixins: [MixinAprende],
  components: exercises,
  data() {
    return {
      size: 60,
      size2: 44,
      width: 2,
      icon: "videogame_asset",
      msg: "(╹◡╹) Login to track your progress and access all levels.",
      alertRespuesta: false,
      timer: null,
      seconds: 0,
      yeah: [
        "(☆^ー^☆) Perfect! Correct answer",
        "｡◕‿◕｡ Excellent! Correct answer",
        "｡^‿^｡ Amazing! Correct answer",
        "(╹◡╹) Awesome! Correct answer",
        "（＾_＾）Wonderful! Correct answer"
      ],
      sorry: [
        "(・_・) Oops! Wrong answer",
        "●⌢● Sorry! Wrong answer",
        "(´╹‸╹`) Oops! Wrong answer",
        "⊙_☉  Sorry! Wrong answer"
      ],
      top: "top"
    };
  },
  methods: {
    check() {
      this.alertRespuesta = true;
      this.$store.commit("Learn/gotItPayload", true);
      this.pageToTop(this.top);

      // Para desabilitar botón enviar cuando leemos la respuesta
      this.$store.commit("Learn/disableButton");

      if (this.isAuthenticated) {
        if (this.userAnswer) {
          //Primero actualizamos el rating
          this.updateRatingGlicko(1, 0);

          // Actualizamos ratings de usuario y pregunta
          this.updateRatings(true);
        }

        if (!this.userAnswer) {
          //Primero actualizamos el rating
          if (this.$store.state.Learn.rating > 0) {
            this.updateRatingGlicko(0, 100);

            // Actualizamos ratings de usuario y pregunta
            this.updateRatings(false);
          }

          if (this.$store.state.Learn.rating <= 0) {
            this.updateRatingGlicko(0, 0);

            // Actualizamos ratings de usuario y pregunta
            this.updateRatings(false);
          }
        }
      }
    },
    gotIt() {
      this.$store.commit("Learn/resetExercise");

      // Ocultamos alerta
      this.alertRespuesta = false;

      // Solicitamos preguntaDb
      this.getQuestionDb();

      // reseteamos los segundos
      this.seconds = 0;
    },
    getQuestionDb() {
      this.$store
        .dispatch("Learn/getQuestionDb")
        .then(() => {})
        .catch(() => {});
    },
    updateRatings(correct) {
      this.$store
        .dispatch("Learn/updateRatings", {
          correct: correct,
          time: this.seconds
        })
        .catch(err => {
          this.$store.commit("Learn/gotItPayload", false);
          this.alertRespuesta = false;
        });
    },
    changeWidth(rating) {
      let porcentaje = (rating * 100) / this.max;

      if (porcentaje < 0) {
        return 0;
      }

      if (porcentaje < 90) {
        return Math.floor((rating * 100) / this.max) + "%";
      }

      if (porcentaje >= 90 && porcentaje < 100) {
        return Math.floor((rating * 100) / this.max) + "%";
      }

      if (porcentaje >= 100) {
        return "100%";
      }
    },
    barColor(rating) {
      let b = Math.floor((rating * 100) / this.max);

      if (b < 50) {
        return "#E91E63";
      }

      if (b >= 50 && b < 70) {
        return "#FFC107";
      }

      if (b >= 70 && b < 90) {
        return "#1E88E5";
      }

      if (b >= 90) {
        return "#64DD17";
      }
    },
    barNumber(rating) {
      let porcentaje = (rating * 100) / this.max;

      if (porcentaje < 0) {
        return 0;
      }

      if (porcentaje < 90) {
        return Math.floor((rating * 100) / this.max);
      }

      if (porcentaje >= 90 && porcentaje < 100) {
        return Math.floor((rating * 100) / this.max);
      }

      if (porcentaje >= 100) {
        return "100";
      }
    },
    borderColor(subject) {
      if (subject === "math") {
        return {
          math: true
        };
      }

      if (subject === "language") {
        return {
          language: true
        };
      }
    },
    answerAlertColor(correct) {
      return correct ? "green accent-4" : "pink";
    },
    iconAlert(correct) {
      return correct ? "check_circle" : "cancel";
    },
    emoji(correct) {
      return correct
        ? this.yeah[Math.floor(Math.random() * this.yeah.length)]
        : this.sorry[Math.floor(Math.random() * this.sorry.length)];
    },
    startClock() {
      this.timer = setInterval(() => {
        this.seconds++;
      }, 1000);
    },
    glicko(username, question, points) {
      let settings = {
        tau: 0.5,
        rating: 1500,
        rd: 200,
        vol: 0.06
      };
      let ranking = new glicko2.Glicko2(settings);
      let a = ranking.makePlayer(username, 175, 0.06);
      let b = ranking.makePlayer(question, 175, 0.06);
      let matches = [];
      matches.push([a, b, points]);
      ranking.updateRatings(matches);

      return {
        username: Math.round(a.getRating()),
        question: Math.round(b.getRating())
      };
    },
    updateRatingGlicko(point, less) {
      const rating =
        this.glicko(
          this.$store.state.Learn.rating,
          this.$store.state.Learn.questionRating,
          point
        ).username - less;

      const ratingFinal = (rating, max) => {
        if (rating < max) {
          return rating > 1 ? rating : 1;
        }

        return rating >= max ? max : rating;
      };

      this.$store.commit("Learn/updateRating", {
        rating: ratingFinal(rating, this.max)
      });
    },
    pageToTop(elementId) {
      const element = document.getElementById(elementId);
      element.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    },
    btnGotItText(userAnswer) {
      return userAnswer ? "Next" : "Got it";
    }
  },
  computed: {
    currentView() {
      return get(exercises, this.exercise, false);
    },
    disabled() {
      return this.$store.state.Learn.sendBtn || this.spinner;
    },
    userAnswer() {
      return this.$store.state.Learn.userAnswer;
    },
    rating() {
      return this.$store.state.Learn.rating;
    },
    spinner() {
      return this.$store.state.Learn.spinner;
    },
    question() {
      return this.$store.state.Learn.question;
    },
    enterPressed() {
      return this.$store.getters["Learn/enterPressedChecker"];
    }
  },
  watch: {
    $route() {},
    isAuthenticated() {
      this.gotIt();
    },
    enterPressed(bool) {
      if (bool) {
        this.check();
      }
    }
  },
  onIdle() {
    clearInterval(this.timer);
  },
  onActive() {
    this.startClock();
  },
  created() {
    // Seleccionamos las partes del ejercicio que necesitamos
    this.$store.commit("exerciseChooseElements");
    this.getQuestionDb();

    if (!this.currentView) {
      this.$store.commit("Learn/resetExercise");
    }
  },
  mounted() {
    this.startClock();
  },
  destroyed() {
    this.$store.commit("Learn/resetExercise");
    this.$store.commit("resetExerciseElements");
    this.$store.commit("error500Data", false);
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.problems {
  padding: 10px;
  border: 1px solid #1e88e5;
}
.math {
  padding: 10px;
  border: 1px solid #1e88e5;
}

.language {
  padding: 10px;
  border: 1px solid #e91e63;
}

.top {
  margin-top: 110px;
}

#myProgress {
  width: 100%;
  background-color: #eceff1;
}

#myBar {
  height: 30px;
  text-align: right;
  padding-right: 20px;
  line-height: 30px;
  color: white;
}
</style>
