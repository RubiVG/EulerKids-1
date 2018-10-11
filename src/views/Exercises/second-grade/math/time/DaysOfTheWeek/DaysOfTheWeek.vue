<template>
  <component :is="currentView"
             :helpers="helpers"
             :shuffleFisher="shuffleFisher"
             :subject="subject"
             :img="img">
  </component>
</template>

<script>
import { shuffleFisher } from "../../../../../../methods/exercises/util";

export default {
  name: "DaysOfTheWeek",
  props: ["helpers", "subject"],
  components: {
    Statement: () => import("./Statement/Statement")
  },
  data() {
    return {
      shuffleFisher
    };
  },
  methods: {
    img(img) {
      return require(`@/assets/Exercises/second-grade/math/time/DaysOfTheWeek/${img}`);
    }
  },
  computed: {
    currentView() {
      return "Statement";
    }
  }
};
</script>
