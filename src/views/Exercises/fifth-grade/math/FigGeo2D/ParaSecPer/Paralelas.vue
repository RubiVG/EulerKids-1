<template>
  <component :is="currentView"
             :helpers="helpers"
             :subject="subject"
             :imagenDynamic="imagenDynamic">
  </component>
</template>

<script>
const preguntas = {
  Dynamic: () => import("./preguntas/Dynamic")
};

export default {
  name: "Paralelas",
  props: ["helpers", "subject"],
  components: preguntas,
  methods: {
    imagenDynamic(imagen) {
      return require(`@/assets/Exercises/quinto/matematicas/figGeo2D/ParaSecPer/${imagen}`);
    }
  },
  computed: {
    currentView() {
      return "Dynamic";
    }
  }
};
</script>
