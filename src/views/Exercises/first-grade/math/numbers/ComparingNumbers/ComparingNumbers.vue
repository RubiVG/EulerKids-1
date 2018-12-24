<template>
  <component :is="currentView" :helpers="helpers" :subject="subject" :img="img">
  </component>
</template>

<script>
export default {
  name: "CompNumbers",
  props: ["helpers", "subject"],
  components: {
    Statement: () => import("./Statement/Statement")
  },
  methods: {
    img(img) {
      return require(`@/assets/Exercises/first-grade/math/numbers/comparingNumbers/${img}`);
    }
  },
  computed: {
    currentView() {
      return "Statement";
    }
  }
};
</script>
