const uuidv4 = require("uuid/v4");
const fs = require("fs");
const randomNumberGen = require("../../../../utilities/random").randomNumberGen;
const digits = require("../../../../utilities/random").digits;
const _ = require("lodash");

const mjAPI = require("mathjax-node");
mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
    fontURL:
      "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HT  ML-CSS" // for webfont urls in the CSS for HTML output
  }
});
mjAPI.start();

const logic = {
  numFinal: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  numInit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  SumaDosDecimales() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 150; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales1 = digits(numerosDisponibles, 2);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales2 = digits(numerosDisponibles, 2);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 + numero2).toFixed(2);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0") {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
            "+\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
                "+\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} + ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    suma: true,
                    id: uuidv4(),
                    rating: 800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  SumaDosDecimalesCeroPrimerSumando() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 150; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales1 = digits(numerosDisponibles, 1);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales2 = digits(numerosDisponibles, 2);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 + numero2).toFixed(2);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0") {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\` +
            "+\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\` +
                "+\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} + ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    suma: true,
                    id: uuidv4(),
                    rating: 800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  SumaDosDecimalesCeroSegundoSumando() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 150; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales1 = digits(numerosDisponibles, 2);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales2 = digits(numerosDisponibles, 1);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 + numero2).toFixed(2);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0") {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
            "+\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
                "+\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} + ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    suma: true,
                    id: uuidv4(),
                    rating: 800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  SumaTresDecimales() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 150; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales1 = digits(numerosDisponibles, 3);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales2 = digits(numerosDisponibles, 3);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 + numero2).toFixed(3);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0") {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
            "+\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
                "+\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} + ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    suma: true,
                    id: uuidv4(),
                    rating: 1200 // 1200
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  SumaTresDecimalesCeroPrimerSumando() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 150; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales1 = digits(numerosDisponibles, 2);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales2 = digits(numerosDisponibles, 3);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 + numero2).toFixed(3);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0") {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\` +
            "+\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\` +
                "+\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} + ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    suma: true,
                    id: uuidv4(),
                    rating: 1200 // 1200
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  SumaTresDecimalesCeroSegundoSumando() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 150; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales1 = digits(numerosDisponibles, 3);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales2 = digits(numerosDisponibles, 2);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 + numero2).toFixed(3);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0") {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
            "+\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
                "+\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} + ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    suma: true,
                    id: uuidv4(),
                    rating: 1200 // 1200
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  SumaCuatroDecimales() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 150; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales1 = digits(numerosDisponibles, 4);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales2 = digits(numerosDisponibles, 4);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 + numero2).toFixed(4);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0") {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
            "+\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
                "+\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} + ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    suma: true,
                    id: uuidv4(),
                    rating: 1800 // 1800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  SumaCuatroDecimalesCeroPrimerSumando() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 150; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales1 = digits(numerosDisponibles, 3);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales2 = digits(numerosDisponibles, 4);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 + numero2).toFixed(4);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0") {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\` +
            "+\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\` +
                "+\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} + ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    suma: true,
                    id: uuidv4(),
                    rating: 1800 // 1800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  SumaCuatroDecimalesDosCerosPrimerSumando() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 150; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales1 = digits(numerosDisponibles, 2);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales2 = digits(numerosDisponibles, 4);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 + numero2).toFixed(4);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0") {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\ \\ \\\\` +
            "+\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\ \\ \\\\` +
                "+\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} + ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    suma: true,
                    id: uuidv4(),
                    rating: 1800 // 1800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  SumaCuatroDecimalesCeroSegundoSumando() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 150; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales1 = digits(numerosDisponibles, 4);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales2 = digits(numerosDisponibles, 3);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 + numero2).toFixed(4);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0") {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
            "+\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
                "+\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} + ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    suma: true,
                    id: uuidv4(),
                    rating: 1800 // 1800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  SumaCuatroDecimalesDosCerosSegundoSumando() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 150; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales1 = digits(numerosDisponibles, 4);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales2 = digits(numerosDisponibles, 2);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 + numero2).toFixed(4);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0") {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
            "+\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\ \\ \\\\` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\` +
                "+\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\ \\ \\\\` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} + ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    suma: true,
                    id: uuidv4(),
                    rating: 1800 // 1800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  RestasDosDecimales() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 300; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales1 = digits(numerosDisponibles, 2);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales2 = digits(numerosDisponibles, 2);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 - numero2).toFixed(2);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0" && numero1 > numero2) {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
            "-\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
                "-\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} - ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    resta: true,
                    id: uuidv4(),
                    rating: 800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  RestasDosDecimalesCeroMinuendo() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 250; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales1 = digits(numerosDisponibles, 1);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales2 = digits(numerosDisponibles, 2);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 - numero2).toFixed(2);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0" && numero1 > numero2) {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\\n` +
            "-\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\\n` +
                "-\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} - ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    resta: true,
                    id: uuidv4(),
                    rating: 800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  RestasDosDecimalesCeroSustraendo() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 250; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales1 = digits(numerosDisponibles, 2);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 2)[0]
        );
        const decimales2 = digits(numerosDisponibles, 1);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 - numero2).toFixed(2);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0" && numero1 > numero2) {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
            "-\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
                "-\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} - ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    resta: true,
                    id: uuidv4(),
                    rating: 800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  RestasTresDecimales() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 250; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales1 = digits(numerosDisponibles, 3);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales2 = digits(numerosDisponibles, 3);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 - numero2).toFixed(3);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0" && numero1 > numero2) {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
            "-\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
                "-\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} - ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    resta: true,
                    id: uuidv4(),
                    rating: 1200 //1200
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  RestasTresDecimalesCeroMinuendo() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 250; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales1 = digits(numerosDisponibles, 2);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales2 = digits(numerosDisponibles, 3);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 - numero2).toFixed(3);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0" && numero1 > numero2) {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\\n` +
            "-\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\\n` +
                "-\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} - ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    resta: true,
                    id: uuidv4(),
                    rating: 1200 //1200
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  RestasTresDecimalesCeroSustraendo() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 250; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales1 = digits(numerosDisponibles, 3);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 3)[0]
        );
        const decimales2 = digits(numerosDisponibles, 2);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 - numero2).toFixed(3);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0" && numero1 > numero2) {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
            "-\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
                "-\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} - ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    resta: true,
                    id: uuidv4(),
                    rating: 1200 //1200
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  RestasCuatroDecimales() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 250; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales1 = digits(numerosDisponibles, 4);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales2 = digits(numerosDisponibles, 4);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 - numero2).toFixed(4);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0" && numero1 > numero2) {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
            "-\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
                "-\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} - ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    resta: true,
                    id: uuidv4(),
                    rating: 1800 //1800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  RestasCuatroDecimalesCeroMinuendo() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 250; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales1 = digits(numerosDisponibles, 3);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales2 = digits(numerosDisponibles, 4);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 - numero2).toFixed(4);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0" && numero1 > numero2) {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\\n` +
            "-\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\\\\n` +
                "-\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} - ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    resta: true,
                    id: uuidv4(),
                    rating: 1800 //1800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  RestasCuatroDecimalesDosCerosMinuendo() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 250; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales1 = digits(numerosDisponibles, 2);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales2 = digits(numerosDisponibles, 4);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 - numero2).toFixed(4);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0" && numero1 > numero2) {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\ \\ \\\\\n` +
            "-\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\ \\ \\ \\ \\\\\n` +
                "-\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} - ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    resta: true,
                    id: uuidv4(),
                    rating: 1800 //1800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  RestasCuatroDecimalesCeroSustraendo() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 250; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales1 = digits(numerosDisponibles, 4);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales2 = digits(numerosDisponibles, 3);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 - numero2).toFixed(4);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0" && numero1 > numero2) {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
            "-\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
                "-\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} - ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    resta: true,
                    id: uuidv4(),
                    rating: 1800 //1800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  RestasCuatroDecimalesDosCerosSustraendo() {
    return new Promise((resolve, reject) => {
      const preguntas = [];

      for (let i = 0; i < 250; i++) {
        const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const enteros1 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales1 = digits(numerosDisponibles, 4);
        const enteros2 = digits(
          numerosDisponibles,
          randomNumberGen(1, 1, 4)[0]
        );
        const decimales2 = digits(numerosDisponibles, 2);
        const numero1 = Number(`${enteros1}.${decimales1}`);
        const numero2 = Number(`${enteros2}.${decimales2}`);
        const correcta = (numero1 - numero2).toFixed(4);
        const correctaDecimales = correcta
          .substr(correcta.indexOf("."))
          .substring(1);
        const correctaEnteros = correcta.split(".").shift();

        if (correcta.slice(-1) !== "0" && numero1 > numero2) {
          const math1 =
            "\\begin{array}{r}\n" +
            `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
            "-\\!\\!\\!\\!\\!& " +
            `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\ \\ \\\\\n` +
            "\\hline\n" +
            "\\end{array}";
          mjAPI
            .typeset({
              math: math1,
              format: "TeX",
              svg: true,
              speakText: false
            })
            .then(math1 => {
              const math2 =
                "\\begin{array}{r}\n" +
                `& ${enteros1}\\color{#E91E63}.${decimales1}\\\\\n` +
                "-\\!\\!\\!\\!\\!& " +
                `${enteros2}\\color{#E91E63}.${decimales2}\\ \\ \\ \\ \\\\\n` +
                "\\hline\n" +
                `& ${correctaEnteros} \\color{#E91E63}.${correctaDecimales}\n` +
                "\\end{array}";

              mjAPI
                .typeset({
                  math: math2,
                  format: "TeX",
                  svg: true,
                  speakText: false
                })
                .then(math2 => {
                  preguntas.push({
                    operacion: `${enteros1}.${decimales1} - ${enteros2}.${decimales2} `,
                    respuesta1: math1.svg,
                    respuesta2: math2.svg,
                    correcta: correcta,
                    resta: true,
                    id: uuidv4(),
                    rating: 1800 //1800
                  });

                  resolve(preguntas);
                });
            });
        }
      }
    });
  },
  all() {
    // Promise.all es solamente cuando terminamos todos los methods.
    // Para pruebas podemos usar por ejemplo: return this.SumasDosDecimales()
    return Promise.all([
      this.SumaDosDecimales(),
      this.SumaDosDecimalesCeroPrimerSumando(),
      this.SumaDosDecimalesCeroSegundoSumando(),
      this.SumaTresDecimales(),
      this.SumaTresDecimalesCeroPrimerSumando(),
      this.SumaTresDecimalesCeroSegundoSumando(),
      this.SumaCuatroDecimales(),
      this.SumaCuatroDecimalesCeroPrimerSumando(),
      this.SumaCuatroDecimalesDosCerosPrimerSumando(),
      this.SumaCuatroDecimalesCeroSegundoSumando(),
      this.SumaCuatroDecimalesDosCerosSegundoSumando(),
      this.RestasDosDecimales(),
      this.RestasDosDecimalesCeroMinuendo(),
      this.RestasDosDecimalesCeroSustraendo(),
      this.RestasTresDecimales(),
      this.RestasTresDecimalesCeroMinuendo(),
      this.RestasTresDecimalesCeroSustraendo(),
      this.RestasCuatroDecimales(),
      this.RestasCuatroDecimalesCeroMinuendo(),
      this.RestasCuatroDecimalesDosCerosMinuendo(),
      this.RestasCuatroDecimalesCeroSustraendo(),
      this.RestasCuatroDecimalesDosCerosSustraendo()
    ]);
  }
};

logic.all().then(data => {
  // console.log(data)

  // const isEqual = require("lodash.isequal");
  // const uniqWith = require("lodash.uniqwith");
  // const uniqBy = require("lodash.uniqby");
  //
  // let ejercicio = _.flatten(data);
  // console.log(ejercicio);
  // console.log(ejercicio.length);
  // console.log(uniqWith(ejercicio, isEqual).length);
  // console.log(uniqBy(ejercicio, "id").length);
  // let string = JSON.stringify(ejercicio);
  //
  // fs.writeFile("SumRestDecimal.json", string, function(err) {
  //   if (err) {
  //     console.log(err);
  //     throw err;
  //   }
  // });
});
