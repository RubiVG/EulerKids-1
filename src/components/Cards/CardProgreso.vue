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
            <v-img :src="imgLessons(src)"
                   height="100px"
                   contain
                   class="ma-2">
            </v-img>
            <div class="title grey--text text--darken-1 text-xs-center">
              {{ exerciseName }}
            </div>
          </v-flex>
        </v-layout>
        <spinner v-if="spinner"
                 :width="width"
                 :size="size">
        </spinner>
        <v-card v-if="!spinner"
                tile
                flat>
          <v-container fluid
                       grid-list-lg >
            <v-layout >
              <v-flex xs12>
                <div class="title grey--text text--darken-1 text-xs-center">
                  Correct
                  <p class="blue--text text--darken-1 text-xs-center mt-2">
                    {{ formatNumber(correct) }}/{{ formatNumber(total) }}
                  </p>
                </div>
              </v-flex>
              <v-flex xs12>
                <div class="title grey--text text--darken-1 text-xs-center">
                  Time
                  <p class="blue--text text--darken-1 text-xs-center mt-2">
                    {{ tiempoFormat(time) }}
                  </p>
                </div>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12>
                <div class="title grey--text text--darken-1 text-xs-center">
                  Current Level
                  <v-img :src="becomeEuler(rating, max)"
                         contain
                         height="100"
                         class="mt-2">
                  </v-img>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import MixinLearn from "../../mixins/learn";
import Spinner from "../../components/Spinners/Spinner"

export default {
  props: [
    "src",
    "imgLessons",
    "total",
    "correct",
    "time",
    "rating",
    "exerciseName",
    "spinner",
    "size",
    "width"
  ],
  name: "CardProgreso",
  mixins: [MixinLearn],
  components: {
    spinner: Spinner
  },
  methods: {
    formatNumber(number) {
      return new Intl.NumberFormat().format(number);
    },
    tiempoFormat(userSeconds) {
      var seconds = Math.floor(userSeconds),
        hours = Math.floor(seconds / 3600);
      seconds -= hours * 3600;
      var minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds;
    }
  }
};
</script>
