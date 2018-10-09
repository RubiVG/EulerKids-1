export default {
  data() {
    return {};
  },
  methods: {
    becomeEuler(rating, max) {
      if (!rating) {
        return require(`@/assets/Levels/level1.svg`);
      }

      let b = Math.floor((rating * 100) / max);

      if (b < 50) {
        return require(`@/assets/Levels/level1.svg`);
      }

      if (b >= 50 && b < 70) {
        return require(`@/assets/Levels/level2.svg`);
      }

      if (b >= 70 && b < 90) {
        return require(`@/assets/Levels/level3.svg`);
      }

      if (b >= 90) {
        return require(`@/assets/Levels/level4.svg`);
      }
    }
  },
  computed: {
    max() {
      return this.$store.state.Learn.maxRating;
    }
  }
};
