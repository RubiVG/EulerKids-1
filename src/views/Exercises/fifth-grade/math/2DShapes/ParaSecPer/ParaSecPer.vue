<template>
  <component :is="currentView" :helpers="helpers" :subject="subject" :img="img">
  </component>
</template>

<script>
export default {
  name: "ParaSecPer",
  props: ["helpers", "subject"],
  components: {
    Statement: () => import("./Statement/Statement")
  },
  methods: {
    img(img) {
      return require(`@/assets/Exercises/fifth-grade/math/2DShapes/ParaSecPer/${img}`);
    }
  },
  computed: {
    currentView() {
      return "Statement";
    }
  }
};
</script>
