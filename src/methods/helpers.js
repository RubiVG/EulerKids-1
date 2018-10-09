export const helpers = {
  gradiante(subject) {
    if (subject === "math") {
      return "grad2";
    }
    if (subject === "language") {
      return "grad3";
    }
    if (subject === "estadisticas") {
      return "grad7";
    }
  },
  colorMaster(subject) {
    if (subject === "math") {
      return "blue darken-1";
    }
    if (subject === "language") {
      return "green accent-4";
    }
  },
  btnColorMaster(subject) {
    if (subject === "math") {
      return "blue darken-1";
    }
    if (subject === "language") {
      return "pink";
    }
  },
  breadColor(subject) {
    if (subject === "math") {
      return "blue--text text--darken-1";
    }
    if (subject === "language") {
      return "pink--text";
    }
    if (subject === "estadisticas") {
      return "cyan--text";
    }
  },
  colorToggleEjer(e, subject) {
    if (subject === "math") {
      if (e) {
        return "blue darken-1";
      }
      return "grey lighten-5";
    }
    if (subject === "language") {
      if (e) {
        return "pink";
      }
      return "grey lighten-5";
    }
  },
  tuRespuestaColor(correct) {
    return correct ? "green--text accent-4--text" : "pink--text";
  }
};
