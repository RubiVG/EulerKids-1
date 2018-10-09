const uuidv4 = require("uuid/v4");
const fs = require("fs");
const shuffleFisher = require("../../../../utilities/random").shuffleFisher;
const randomFromArray = require("../../../../utilities/random").randomFromArray;
const randomNumberGen = require("../../../../utilities/random").randomNumberGen;
const uniq_array_numbers = require("../../../../utilities/random")
  .uniq_array_numbers;

const logic = {
  Unidades() {
    const ceroUnidades = randomNumberGen(1500, 1000000, 100000000).map(e => {
      return e - this.valorPosicional(e).unidades;
    });
    const unique = uniq_array_numbers(ceroUnidades);
    // Escogemos 200 números
    const random = randomFromArray(shuffleFisher(unique), 200);
    const sumoUnidades = (number, randomUnidades) => {
      const number1 = number + randomUnidades[0];
      const number2 = number + randomUnidades[1];

      return {
        number1,
        number2
      };
    };
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < random.length; i++) {
      const randomUnidades = randomNumberGen(2, 0, 9);
      const numeros = sumoUnidades(random[i], randomUnidades);
      const unidades1 = this.valorPosicional(numeros.number1).unidades;
      const unidades2 = this.valorPosicional(numeros.number2).unidades;
      preguntas.push({
        numero1: Intl.NumberFormat().format(numeros.number1),
        numero2: Intl.NumberFormat().format(numeros.number2),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "unidades",
        expresion1: `${Intl.NumberFormat()
          .format(numeros.number1)
          .slice(0, -1)}\\textcolor{#1E88E5}{${unidades1}}`,
        expresion2: `${Intl.NumberFormat()
          .format(numeros.number2)
          .slice(0, -1)}\\textcolor{#1E88E5}{${unidades2}}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(numeros.number1, numeros.number2).simbolo,
        correctaTexto: mayorQueMenorQue(numeros.number1, numeros.number2).texto,
        id: uuidv4(),
        rating: 800
      });
    }

    return preguntas;
  },
  Decenas() {
    const ceroEnDecenas = randomNumberGen(1500, 1000000, 900000000).map(e => {
      return e - this.valorPosicional(e).decenas * 10;
    });
    const unique = uniq_array_numbers(ceroEnDecenas);
    // Escogemos 200 números
    const random = randomFromArray(shuffleFisher(unique), 200);
    const sumoUnidades = (number, randomDecenas) => {
      const number1 = number + randomDecenas[0] * 10;
      const number2 = number + randomDecenas[1] * 10;

      return {
        number1,
        number2
      };
    };
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < random.length; i++) {
      const randomUnidades = randomNumberGen(2, 0, 9);
      const numeros = sumoUnidades(random[i], randomUnidades);
      const unidades1 = this.valorPosicional(numeros.number1).decenas;
      const unidades2 = this.valorPosicional(numeros.number2).decenas;
      const millones1 = Intl.NumberFormat()
        .format(numeros.number1)
        .split(",")
        .shift();
      const millares = Intl.NumberFormat()
        .format(numeros.number1)
        .substr(
          Intl.NumberFormat()
            .format(numeros.number1)
            .indexOf(",") + ",".length
        )
        .split(",")
        .shift();
      const centenas = Intl.NumberFormat()
        .format(numeros.number1)
        .split(",")
        .pop()
        .slice(0, -2);
      const unidades = Intl.NumberFormat()
        .format(numeros.number1)
        .split(",")
        .pop()
        .substring(2);

      preguntas.push({
        numero1: Intl.NumberFormat().format(numeros.number1),
        numero2: Intl.NumberFormat().format(numeros.number2),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "decenas",
        expresion1: `${millones1},${millares},${centenas}\\textcolor{#1E88E5}{${unidades1}}${unidades}`,
        expresion2: `${millones1},${millares},${centenas}\\textcolor{#1E88E5}{${unidades2}}${unidades}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(numeros.number1, numeros.number2).simbolo,
        correctaTexto: mayorQueMenorQue(numeros.number1, numeros.number2).texto,
        id: uuidv4(),
        rating: 1200 // Este es 1200
      });
    }

    return preguntas;
  },
  Centenas() {
    const ceroEnCentenas = randomNumberGen(1500, 1000000, 900000000).map(e => {
      return e - this.valorPosicional(e).centenas * 100;
    });
    const unique = uniq_array_numbers(ceroEnCentenas);
    // Escogemos 200 números
    const random = randomFromArray(shuffleFisher(unique), 200);
    const sumoUnidades = (number, randomCentenas) => {
      const number1 = number + randomCentenas[0] * 100;
      const number2 = number + randomCentenas[1] * 100;

      return {
        number1,
        number2
      };
    };
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < random.length; i++) {
      const randomUnidades = randomNumberGen(2, 0, 9);
      const numeros = sumoUnidades(random[i], randomUnidades);
      const unidades1 = this.valorPosicional(numeros.number1).centenas;
      const unidades2 = this.valorPosicional(numeros.number2).centenas;
      const millones1 = Intl.NumberFormat()
        .format(numeros.number1)
        .split(",")
        .shift();
      const millares = Intl.NumberFormat()
        .format(numeros.number1)
        .substr(
          Intl.NumberFormat()
            .format(numeros.number1)
            .indexOf(",") + ",".length
        )
        .split(",")
        .shift();
      const centenas = Intl.NumberFormat()
        .format(numeros.number1)
        .split(",")
        .pop()
        .substring(1);

      preguntas.push({
        numero1: Intl.NumberFormat().format(numeros.number1),
        numero2: Intl.NumberFormat().format(numeros.number2),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "centenas",
        expresion1: `${millones1},${millares},\\textcolor{#1E88E5}{${unidades1}}${centenas}`,
        expresion2: `${millones1},${millares},\\textcolor{#1E88E5}{${unidades2}}${centenas}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(numeros.number1, numeros.number2).simbolo,
        correctaTexto: mayorQueMenorQue(numeros.number1, numeros.number2).texto,
        id: uuidv4(),
        rating: 1200 // Este es 1200
      });
    }

    return preguntas;
  },
  UnidadesDeMillar() {
    const ceroEnMillares = randomNumberGen(1500, 1000000, 900000000).map(e => {
      return e - this.valorPosicional(e).millares * 1000;
    });
    const unique = uniq_array_numbers(ceroEnMillares);
    // Escogemos 200 números
    const random = randomFromArray(shuffleFisher(unique), 200);
    const sumoUnidades = (number, randomMillares) => {
      const number1 = number + randomMillares[0] * 1000;
      const number2 = number + randomMillares[1] * 1000;

      return {
        number1,
        number2
      };
    };
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < random.length; i++) {
      const randomUnidades = randomNumberGen(2, 0, 9);
      const numeros = sumoUnidades(random[i], randomUnidades);
      const unidades1 = this.valorPosicional(numeros.number1).millares;
      const unidades2 = this.valorPosicional(numeros.number2).millares;
      const millones1 = Intl.NumberFormat()
        .format(numeros.number1)
        .split(",")
        .shift();
      const millares = Intl.NumberFormat()
        .format(numeros.number1)
        .substr(
          Intl.NumberFormat()
            .format(numeros.number1)
            .indexOf(",") + ",".length
        )
        .split(",")
        .shift()
        .slice(0, -1);
      const centenas = Intl.NumberFormat()
        .format(numeros.number1)
        .split(",")
        .pop();

      preguntas.push({
        numero1: Intl.NumberFormat().format(numeros.number1),
        numero2: Intl.NumberFormat().format(numeros.number2),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "unidades de millar",
        expresion1: `${millones1},${millares}\\textcolor{#1E88E5}{${unidades1}},${centenas}`,
        expresion2: `${millones1},${millares}\\textcolor{#1E88E5}{${unidades2}},${centenas}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(numeros.number1, numeros.number2).simbolo,
        correctaTexto: mayorQueMenorQue(numeros.number1, numeros.number2).texto,
        id: uuidv4(),
        rating: 1200 // Este es 1200
      });
    }

    return preguntas;
  },
  UnidadesDeMillarDiff() {
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < 200; i++) {
      const generadorMillares = randomNumberGen(2, 100, 999);
      const randomUnidade2 = randomNumberGen(2, 1, 9);
      const valor1 =
        Number(generadorMillares[0]) -
        this.valorPosicional(generadorMillares[0]).unidades +
        randomUnidade2[0];
      const valor2 =
        Number(generadorMillares[0]) -
        this.valorPosicional(generadorMillares[0]).unidades +
        randomUnidade2[1];
      const unidades1 = this.valorPosicional(valor1).unidades;
      const unidades2 = this.valorPosicional(valor2).unidades;
      const millares1Inicio = valor1.toString().slice(0, -1);
      const millares2Inicio = valor2.toString().slice(0, -1);
      const millones1 = Intl.NumberFormat()
        .format(randomNumberGen(1, 1, 999).toString())
        .split(",")
        .shift();
      const numerosDisponibles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const digits = (numerosDisponibles, cantidadCifrasFinal) => {
        var string = "";

        for (var i = 0; i < cantidadCifrasFinal; i++) {
          var item =
            numerosDisponibles[
              Math.floor(Math.random() * numerosDisponibles.length)
            ];
          string += item.toString();
        }
        return string;
      };
      const centenas1 = digits(numerosDisponibles, 3);
      const centenas2 = digits(numerosDisponibles, 3);

      preguntas.push({
        numero1: Intl.NumberFormat().format(
          millones1 + valor1.toString() + centenas1
        ),
        numero2: Intl.NumberFormat().format(
          millones1 + valor2.toString() + centenas2
        ),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "unidades de millar",
        expresion1: `${millones1},${millares1Inicio}\\textcolor{#1E88E5}{${unidades1}},${centenas1}`,
        expresion2: `${millones1},${millares2Inicio}\\textcolor{#1E88E5}{${unidades2}},${centenas2}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(unidades1, unidades2).simbolo,
        correctaTexto: mayorQueMenorQue(unidades1, unidades2).texto,
        id: uuidv4(),
        rating: 1800 // Este es 1800
      });
    }

    return preguntas;
  },
  DecenasDeMillar() {
    const ceroEnMillares = randomNumberGen(1500, 1000000, 900000000).map(e => {
      return e - this.valorPosicional(e).decenasMillar * 10000;
    });
    const unique = uniq_array_numbers(ceroEnMillares);
    // Escogemos 200 números
    const random = randomFromArray(shuffleFisher(unique), 200);
    const sumoUnidades = (number, randomMillares) => {
      const number1 = number + randomMillares[0] * 10000;
      const number2 = number + randomMillares[1] * 10000;

      return {
        number1,
        number2
      };
    };
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < random.length; i++) {
      const randomUnidades = randomNumberGen(2, 0, 9);
      const numeros = sumoUnidades(random[i], randomUnidades);
      const unidades1 = this.valorPosicional(numeros.number1).decenasMillar;
      const unidades2 = this.valorPosicional(numeros.number2).decenasMillar;
      const millones1 = Intl.NumberFormat()
        .format(numeros.number1)
        .split(",")
        .shift();
      const millares = Intl.NumberFormat()
        .format(numeros.number1)
        .substr(
          Intl.NumberFormat()
            .format(numeros.number1)
            .indexOf(",") + ",".length
        )
        .split(",")
        .shift()
        .slice(0, -2);
      const unidadMillar = Intl.NumberFormat()
        .format(numeros.number1)
        .substr(
          Intl.NumberFormat()
            .format(numeros.number1)
            .indexOf(",") + ",".length
        )
        .split(",")
        .shift()
        .substring(2);
      const centenas = Intl.NumberFormat()
        .format(numeros.number1)
        .split(",")
        .pop();

      preguntas.push({
        numero1: Intl.NumberFormat().format(numeros.number1),
        numero2: Intl.NumberFormat().format(numeros.number2),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "decenas de millar",
        expresion1: `${millones1},${millares}\\textcolor{#1E88E5}{${unidades1}}${unidadMillar},${centenas}`,
        expresion2: `${millones1},${millares}\\textcolor{#1E88E5}{${unidades2}}${unidadMillar},${centenas}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(numeros.number1, numeros.number2).simbolo,
        correctaTexto: mayorQueMenorQue(numeros.number1, numeros.number2).texto,
        id: uuidv4(),
        rating: 1200 // Este es 1200
      });
    }

    return preguntas;
  },
  DecenasDeMillarDiff() {
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < 200; i++) {
      const generadorMillares = randomNumberGen(2, 100, 999);
      const randomUnidades = randomNumberGen(2, 1, 9);
      const randomUnidade2 = randomNumberGen(2, 1, 9);
      const valor1 =
        Number(generadorMillares[0]) -
        this.valorPosicional(generadorMillares[0]).decenas * 10 +
        randomUnidades[0] * 10 -
        this.valorPosicional(generadorMillares[0]).unidades +
        randomUnidade2[0];
      const valor2 =
        Number(generadorMillares[0]) -
        this.valorPosicional(generadorMillares[0]).decenas * 10 +
        randomUnidades[1] * 10 -
        this.valorPosicional(generadorMillares[0]).unidades +
        randomUnidade2[1];
      const unidades1 = this.valorPosicional(valor1).decenas;
      const unidades2 = this.valorPosicional(valor2).decenas;
      const millares1 = valor1.toString().substring(2);
      const millares1Inicio = valor1.toString().slice(0, -2);
      const millares2 = valor2.toString().substring(2);
      const millares2Inicio = valor2.toString().slice(0, -2);
      const millones1 = Intl.NumberFormat()
        .format(randomNumberGen(1, 1, 999).toString())
        .split(",")
        .shift();
      const numerosDisponibles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const digits = (numerosDisponibles, cantidadCifrasFinal) => {
        var string = "";

        for (var i = 0; i < cantidadCifrasFinal; i++) {
          var item =
            numerosDisponibles[
              Math.floor(Math.random() * numerosDisponibles.length)
            ];
          string += item.toString();
        }
        return string;
      };
      const centenas1 = digits(numerosDisponibles, 3);
      const centenas2 = digits(numerosDisponibles, 3);

      preguntas.push({
        numero1: Intl.NumberFormat().format(
          millones1 + valor1.toString() + centenas1
        ),
        numero2: Intl.NumberFormat().format(
          millones1 + valor2.toString() + centenas2
        ),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "decenas de millar",
        expresion1: `${millones1},${millares1Inicio}\\textcolor{#1E88E5}{${unidades1}}${millares1},${centenas1}`,
        expresion2: `${millones1},${millares2Inicio}\\textcolor{#1E88E5}{${unidades2}}${millares2},${centenas2}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(unidades1, unidades2).simbolo,
        correctaTexto: mayorQueMenorQue(unidades1, unidades2).texto,
        id: uuidv4(),
        rating: 1800 // Este es 1800
      });
    }

    return preguntas;
  },
  CentenasDeMillar() {
    const ceroEnMillares = randomNumberGen(1500, 1000000, 900000000).map(e => {
      return e - this.valorPosicional(e).centenasMillar * 100000;
    });
    const unique = uniq_array_numbers(ceroEnMillares);
    // Escogemos 200 números
    const random = randomFromArray(shuffleFisher(unique), 200);
    const sumoUnidades = (number, randomMillares) => {
      const number1 = number + randomMillares[0] * 100000;
      const number2 = number + randomMillares[1] * 100000;

      return {
        number1,
        number2
      };
    };
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < random.length; i++) {
      const randomUnidades = randomNumberGen(2, 0, 9);
      const numeros = sumoUnidades(random[i], randomUnidades);
      const unidades1 = this.valorPosicional(numeros.number1).centenasMillar;
      const unidades2 = this.valorPosicional(numeros.number2).centenasMillar;
      const millones1 = Intl.NumberFormat()
        .format(numeros.number1)
        .split(",")
        .shift();
      const millares = Intl.NumberFormat()
        .format(numeros.number1)
        .substr(
          Intl.NumberFormat()
            .format(numeros.number1)
            .indexOf(",") + ",".length
        )
        .split(",")
        .shift()
        .substring(1);
      const centenas = Intl.NumberFormat()
        .format(numeros.number1)
        .split(",")
        .pop();

      preguntas.push({
        numero1: Intl.NumberFormat().format(numeros.number1),
        numero2: Intl.NumberFormat().format(numeros.number2),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "centenas de millar",
        expresion1: `${millones1},\\textcolor{#1E88E5}{${unidades1}}${millares},${centenas}`,
        expresion2: `${millones1},\\textcolor{#1E88E5}{${unidades2}}${millares},${centenas}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(numeros.number1, numeros.number2).simbolo,
        correctaTexto: mayorQueMenorQue(numeros.number1, numeros.number2).texto,
        id: uuidv4(),
        rating: 1200 // Este es 1200
      });
    }

    return preguntas;
  },
  CentenasDeMillarDiff() {
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < 200; i++) {
      const generadorMillares = randomNumberGen(2, 100, 999);
      const randomUnidades = randomNumberGen(2, 1, 9);
      const valor1 =
        Number(generadorMillares[0]) -
        this.valorPosicional(generadorMillares[0]).centenas * 100 +
        randomUnidades[0] * 100;
      const valor2 =
        Number(generadorMillares[1]) -
        this.valorPosicional(generadorMillares[1]).centenas * 100 +
        randomUnidades[1] * 100;
      const unidades1 = this.valorPosicional(valor1).centenas;
      const unidades2 = this.valorPosicional(valor2).centenas;
      const millares1 = valor1.toString().substring(1);
      const millares2 = valor2.toString().substring(1);
      const millones1 = Intl.NumberFormat()
        .format(randomNumberGen(1, 1, 999).toString())
        .split(",")
        .shift();
      const numerosDisponibles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const digits = (numerosDisponibles, cantidadCifrasFinal) => {
        var string = "";

        for (var i = 0; i < cantidadCifrasFinal; i++) {
          var item =
            numerosDisponibles[
              Math.floor(Math.random() * numerosDisponibles.length)
            ];
          string += item.toString();
        }
        return string;
      };
      const centenas1 = digits(numerosDisponibles, 3);
      const centenas2 = digits(numerosDisponibles, 3);

      preguntas.push({
        numero1: Intl.NumberFormat().format(
          millones1 + valor1.toString() + centenas1
        ),
        numero2: Intl.NumberFormat().format(
          millones1 + valor2.toString() + centenas2
        ),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "centenas de millar",
        expresion1: `${millones1},\\textcolor{#1E88E5}{${unidades1}}${millares1},${centenas1}`,
        expresion2: `${millones1},\\textcolor{#1E88E5}{${unidades2}}${millares2},${centenas2}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(unidades1, unidades2).simbolo,
        correctaTexto: mayorQueMenorQue(unidades1, unidades2).texto,
        id: uuidv4(),
        rating: 1800 // Este es 1800
      });
    }

    return preguntas;
  },
  UnidadesDeMillon() {
    const cienMilANoventamil = randomNumberGen(1500, 100000, 900000).map(e => {
      return e;
    });
    const unique = uniq_array_numbers(cienMilANoventamil);
    // Escogemos 200 números
    const random = randomFromArray(shuffleFisher(unique), 200);
    const multiplicoMillones = (number, randomNumber) => {
      const number1 = number + randomNumber[0] * 1000000;
      const number2 = number + randomNumber[1] * 1000000;

      return {
        number1,
        number2
      };
    };
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < random.length; i++) {
      // Escogemos dos números del 1 al 9. No escogemos 0 porque estamos multiplicando
      const randomNumber = randomNumberGen(2, 1, 9);
      const numeros = multiplicoMillones(random[i], randomNumber);
      const unidades1 = this.valorPosicional(numeros.number1).unidadMillon;
      const unidades2 = this.valorPosicional(numeros.number2).unidadMillon;

      preguntas.push({
        numero1: Intl.NumberFormat().format(numeros.number1),
        numero2: Intl.NumberFormat().format(numeros.number2),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "unidades de millón",
        expresion1: `\\textcolor{#1E88E5}{${unidades1}}${Intl.NumberFormat()
          .format(numeros.number1)
          .substring(1)}`,
        expresion2: `\\textcolor{#1E88E5}{${unidades2}}${Intl.NumberFormat()
          .format(numeros.number2)
          .substring(1)}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(numeros.number1, numeros.number2).simbolo,
        correctaTexto: mayorQueMenorQue(numeros.number1, numeros.number2).texto,
        id: uuidv4(),
        rating: 800
      });
    }

    return preguntas;
  },
  UnidadesDeMillonDiff() {
    const unoA999 = randomNumberGen(900, 1, 999).map(e => {
      return e - this.valorPosicional(e).unidades;
    });
    const unique = uniq_array_numbers(unoA999);
    // Escogemos 200 números
    const random = randomFromArray(shuffleFisher(unique), 100);
    const sumoUnidades = (number, randomNumber) => {
      const number1 = number + randomNumber[0];
      const number2 = number + randomNumber[1];

      return {
        number1,
        number2
      };
    };
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < random.length; i++) {
      // Escogemos dos números del 1 al 9. No escogemos 0 porque estamos multiplicando
      const randomNumber = randomNumberGen(2, 1, 9);
      const numeros = sumoUnidades(random[i], randomNumber);
      const unidades1 = this.valorPosicional(numeros.number1).unidades;
      const unidades2 = this.valorPosicional(numeros.number2).unidades;
      const millones = numeros.number1.toString().slice(0, -1);
      const millares1 = randomNumberGen(1, 100, 999).toString();
      const millares2 = randomNumberGen(1, 100, 999).toString();
      const centenas1 = randomNumberGen(1, 100, 999).toString();
      const centenas2 = randomNumberGen(1, 100, 999).toString();

      preguntas.push({
        numero1: Intl.NumberFormat().format(
          numeros.number1.toString() + millares1 + centenas1
        ),
        numero2: Intl.NumberFormat().format(
          numeros.number2.toString() + millares2 + centenas2
        ),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "unidades de millón",
        expresion1: `${millones}\\textcolor{#1E88E5}{${unidades1}},${millares1},${centenas1}`,
        expresion2: `${millones}\\textcolor{#1E88E5}{${unidades2}},${millares2},${centenas2}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(numeros.number1, numeros.number2).simbolo,
        correctaTexto: mayorQueMenorQue(numeros.number1, numeros.number2).texto,
        id: uuidv4(),
        rating: 1800 // este es 1800
      });
    }

    return preguntas;
  },
  DecenasDeMillonDiff() {
    // ponemos diez porque debe tener siempre decenas
    const unoA999 = randomNumberGen(900, 10, 999).map(e => {
      return e - this.valorPosicional(e).decenas * 10;
    });
    const unique = uniq_array_numbers(unoA999);
    // Escogemos 100 números
    const random = randomFromArray(shuffleFisher(unique), 100);
    const sumoUnidades = (number, randomNumber) => {
      const number1 = number + randomNumber[0] * 10;
      const number2 = number + randomNumber[1] * 10;

      return {
        number1,
        number2
      };
    };
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < random.length; i++) {
      // Escogemos dos números del 1 al 9. No escogemos 0 porque estamos multiplicando
      const randomNumber = randomNumberGen(2, 1, 9);
      const numeros = sumoUnidades(random[i], randomNumber);
      const unidades1 = this.valorPosicional(numeros.number1).decenas;
      const unidades2 = this.valorPosicional(numeros.number2).decenas;
      const centenasMillon = numeros.number1.toString().slice(0, -2);
      const unidadesMillon1 = randomNumberGen(2, 0, 9);
      const millones1 = centenasMillon + unidades1 + unidadesMillon1[0];
      const millones2 = centenasMillon + unidades2 + unidadesMillon1[1];
      const millares1 = randomNumberGen(1, 100, 999).toString();
      const millares2 = randomNumberGen(1, 100, 999).toString();
      const centenas1 = randomNumberGen(1, 100, 999).toString();
      const centenas2 = randomNumberGen(1, 100, 999).toString();

      preguntas.push({
        numero1: Intl.NumberFormat().format(millones1 + millares1 + centenas1),
        numero2: Intl.NumberFormat().format(millones2 + millares2 + centenas2),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "decenas de millón",
        expresion1: `${centenasMillon}\\textcolor{#1E88E5}{${unidades1}}${
          unidadesMillon1[0]
        },${millares1},${centenas1}`,
        expresion2: `${centenasMillon}\\textcolor{#1E88E5}{${unidades2}}${
          unidadesMillon1[1]
        },${millares2},${centenas2}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(numeros.number1, numeros.number2).simbolo,
        correctaTexto: mayorQueMenorQue(numeros.number1, numeros.number2).texto,
        id: uuidv4(),
        rating: 1800 // este es 1800
      });
    }

    return preguntas;
  },
  CentenasDeMillonDiff() {
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < 200; i++) {
      const randomUnidades = randomNumberGen(2, 1, 9);
      const millones = randomNumberGen(2, 100000000, 999000000);
      const millonFlat1 =
        millones[0] -
        this.valorPosicional(millones[0]).centenaMillon * 100000000 +
        randomUnidades[0] * 100000000;
      const millonFlat2 =
        millones[1] -
        this.valorPosicional(millones[1]).centenaMillon * 100000000 +
        randomUnidades[1] * 100000000;
      const unidades1 = this.valorPosicional(millonFlat1).centenaMillon;
      const unidades2 = this.valorPosicional(millonFlat2).centenaMillon;
      const millones1 = Intl.NumberFormat()
        .format(millonFlat1)
        .split(",")
        .shift()
        .substring(1);
      const millones2 = Intl.NumberFormat()
        .format(millonFlat2)
        .split(",")
        .shift()
        .substring(1);
      const millares1 = Intl.NumberFormat()
        .format(millonFlat1)
        .substr(
          Intl.NumberFormat()
            .format(millonFlat1)
            .indexOf(",") + ",".length
        )
        .split(",")
        .shift();
      const millares2 = Intl.NumberFormat()
        .format(millonFlat2)
        .substr(
          Intl.NumberFormat()
            .format(millonFlat2)
            .indexOf(",") + ",".length
        )
        .split(",")
        .shift();
      const centenas1 = Intl.NumberFormat()
        .format(millonFlat1)
        .split(",")
        .pop();
      const centenas2 = Intl.NumberFormat()
        .format(millonFlat2)
        .split(",")
        .pop();

      preguntas.push({
        numero1: Intl.NumberFormat().format(millonFlat1),
        numero2: Intl.NumberFormat().format(millonFlat2),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "centenas de millón",
        expresion1: `\\textcolor{#1E88E5}{${unidades1}}${millones1},${millares1},${centenas1}`,
        expresion2: `\\textcolor{#1E88E5}{${unidades2}}${millones2},${millares2},${centenas2}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(millonFlat1, millonFlat2).simbolo,
        correctaTexto: mayorQueMenorQue(millonFlat1, millonFlat2).texto,
        id: uuidv4(),
        rating: 1800 // este es 1800
      });
    }

    return preguntas;
  },
  DecenasDeMillon() {
    const millonANueve = randomNumberGen(1500, 1000000, 9000000).map(e => {
      return e;
    });
    const unique = uniq_array_numbers(millonANueve);
    // Escogemos 200 números
    const random = randomFromArray(shuffleFisher(unique), 200);
    const multiplicoDiezMillones = (number, randomNumber) => {
      const number1 = number + randomNumber[0] * 10000000;
      const number2 = number + randomNumber[1] * 10000000;

      return {
        number1,
        number2
      };
    };
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < random.length; i++) {
      // Escogemos dos números del 1 al 9. No escogemos 0 porque estamos multiplicando
      const randomNumber = randomNumberGen(2, 1, 9);
      const numeros = multiplicoDiezMillones(random[i], randomNumber);
      const unidades1 = this.valorPosicional(numeros.number1).decenaMillon;
      const unidades2 = this.valorPosicional(numeros.number2).decenaMillon;

      preguntas.push({
        numero1: Intl.NumberFormat().format(numeros.number1),
        numero2: Intl.NumberFormat().format(numeros.number2),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "decenas de millón",
        expresion1: `\\textcolor{#1E88E5}{${unidades1}}${Intl.NumberFormat()
          .format(numeros.number1)
          .substring(1)}`,
        expresion2: `\\textcolor{#1E88E5}{${unidades2}}${Intl.NumberFormat()
          .format(numeros.number2)
          .substring(1)}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(numeros.number1, numeros.number2).simbolo,
        correctaTexto: mayorQueMenorQue(numeros.number1, numeros.number2).texto,
        id: uuidv4(),
        rating: 800
      });
    }

    return preguntas;
  },
  CentenasDeMillon() {
    const diezMillonesANoventa = randomNumberGen(1500, 10000000, 90000000).map(
      e => {
        return e;
      }
    );
    const unique = uniq_array_numbers(diezMillonesANoventa);
    // Escogemos 200 números
    const random = randomFromArray(shuffleFisher(unique), 200);
    const multiplicoCienMillones = (number, randomNumber) => {
      const number1 = number + randomNumber[0] * 100000000;
      const number2 = number + randomNumber[1] * 100000000;

      return {
        number1,
        number2
      };
    };
    const mayorQueMenorQue = (number1, number2) => {
      return number1 < number2
        ? {
            simbolo: "<",
            texto: "menor que"
          }
        : {
            simbolo: ">",
            texto: "mayor que"
          };
    };

    const preguntas = [];

    for (var i = 0; i < random.length; i++) {
      // Escogemos dos números del 1 al 9. No escogemos 0 porque estamos multiplicando
      const randomNumber = randomNumberGen(2, 1, 9);
      const numeros = multiplicoCienMillones(random[i], randomNumber);
      const unidades1 = this.valorPosicional(numeros.number1).centenaMillon;
      const unidades2 = this.valorPosicional(numeros.number2).centenaMillon;

      preguntas.push({
        numero1: Intl.NumberFormat().format(numeros.number1),
        numero2: Intl.NumberFormat().format(numeros.number2),
        menorQue: "<",
        mayorQue: ">",
        valorPosicional: "centenas de millón",
        expresion1: `\\textcolor{#1E88E5}{${unidades1}}${Intl.NumberFormat()
          .format(numeros.number1)
          .substring(1)}`,
        expresion2: `\\textcolor{#1E88E5}{${unidades2}}${Intl.NumberFormat()
          .format(numeros.number2)
          .substring(1)}`,
        numero1ValorPosicional: unidades1.toString(),
        numero2ValorPosicional: unidades2.toString(),
        correcta: mayorQueMenorQue(numeros.number1, numeros.number2).simbolo,
        correctaTexto: mayorQueMenorQue(numeros.number1, numeros.number2).texto,
        id: uuidv4(),
        rating: 800
      });
    }

    return preguntas;
  },
  valorPosicional(numero) {
    const unidades = numero % 10;
    const decenas = Math.floor((numero / 10) % 10);
    const centenas = Math.floor((numero / 100) % 10);
    const millares = Math.floor((numero / 1000) % 10);
    const decenasMillar = Math.floor((numero / 10000) % 10);
    const centenasMillar = Math.floor((numero / 100000) % 10);
    const unidadMillon = Math.floor((numero / 1000000) % 10);
    const decenaMillon = Math.floor((numero / 10000000) % 10);
    const centenaMillon = Math.floor((numero / 100000000) % 10);

    return {
      unidades: unidades,
      decenas: decenas,
      centenas: centenas,
      millares: millares,
      decenasMillar: decenasMillar,
      centenasMillar: centenasMillar,
      unidadMillon: unidadMillon,
      decenaMillon: decenaMillon,
      centenaMillon: centenaMillon
    };
  },
  all() {
    return this.Unidades().concat(
      this.Decenas(),
      this.Centenas(),
      this.UnidadesDeMillar(),
      this.UnidadesDeMillarDiff(),
      this.DecenasDeMillar(),
      this.DecenasDeMillarDiff(),
      this.CentenasDeMillar(),
      this.CentenasDeMillarDiff(),
      this.UnidadesDeMillon(),
      this.UnidadesDeMillonDiff(),
      this.DecenasDeMillonDiff(),
      this.CentenasDeMillonDiff(),
      this.DecenasDeMillon(),
      this.CentenasDeMillon()
    );
  }
};

//console.log(logic.all());

const isEqual = require("lodash.isequal");
const uniqWith = require("lodash.uniqwith");
const uniqBy = require("lodash.uniqby");

// let ejercicio = logic.all();
// console.log(uniqWith(ejercicio, isEqual).length);
// console.log(uniqBy(ejercicio, "id").length);
// let string = JSON.stringify(ejercicio);
//
// fs.writeFile("CompNumMasSeis.json", string, function(err) {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
// });
