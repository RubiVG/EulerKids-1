<template>
  <component :is="currentView"
             :helpers="helpers"
             :subject="subject">
  </component>
</template>

<script>
const preguntas = {
  Dynamic: () => import("./preguntas/Dynamic")
};

export default {
  name: "CompNum",
  props: ["helpers", "subject"],
  components: preguntas,
  computed: {
    currentView() {
      return "Dynamic";
    }
  }
};
</script>
