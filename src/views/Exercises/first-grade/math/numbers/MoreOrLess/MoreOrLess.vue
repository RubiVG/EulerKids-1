<template>
  <component :is="currentView"
             :helpers="helpers"
             :subject="subject"
             :exerciseMethods="exerciseMethods"
             :btn1="btn1"
             :btn2="btn2"
             :img="img">
  </component>
</template>

<script>
import { exerciseMethods } from "../../../../../../methods/exercises/exerciseHelp";

export default {
  name: "MoreOrLess",
  props: ["helpers", "subject"],
  components: {
    Statement: () => import("./Statement/Statement")
  },
  data() {
    return {
      exerciseMethods,
      btn1: false,
      btn2: false
    };
  },
  methods: {
    img(folder, img) {
      return require(`@/assets/Exercises/first-grade/math/numbers/moreOrLess/dynamic/${folder}/${img}`);
    }
  },
  computed: {
    currentView() {
      return "Statement";
    }
  }
};
</script>
