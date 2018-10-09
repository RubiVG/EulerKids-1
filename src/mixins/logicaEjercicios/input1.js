export default {
  methods: {
    enterPressed(input) {
      // Para checar respuesta con enter en input
      if (input.length) {
        return this.$store.commit("Learn/enterPressedData", true);
      }

      return this.$store.commit("Learn/enterPressedData", false);
    }
  },
  computed: {
    question() {
      return this.$store.state.Learn.question;
    }
  }
};
