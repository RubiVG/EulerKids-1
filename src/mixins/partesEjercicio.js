export default {
  computed: {
    instruction() {
      return this.$store.state.instruction;
    },
    operation() {
      return this.$store.state.operation;
    },
    interaction() {
      return this.$store.state.interaction;
    },
    yourAnswer() {
      return this.$store.state.yourAnswer;
    },
    solution() {
      return this.$store.state.solution;
    },
    correctAnswer() {
      return this.$store.state.correctAnswer;
    }
  }
};
