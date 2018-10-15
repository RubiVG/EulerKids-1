const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  multiplicando: [2, 3, 4, 5, 10],
  multiplicador: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  multiplicadores1: [0, 1, 2, 3, 4, 5],
  multiplicadores2: [6, 7, 8, 9, 10, 11],
  Tablas() {
    const preguntas = [];

    const tablaGen = (multiplicando, multiplicadores, correcta) => {
      const final = [];

      const tabla = multiplicadores.forEach((curr, index, arr) => {
        const producto = multiplicando * curr;
        if (producto === correcta) {
          final.push(
            `\\textcolor{#1E88E5}{${multiplicando} \\times ${curr} = ${producto}}`
          );
        } else {
          final.push(`${multiplicando} \\times ${curr} = ${producto}`);
        }
      });

      return final;
    };
    const rating = (multiplicando, multiplicador) => {
      if ([2, 3, 4, 5, 10].includes(multiplicando)) {
        if ([0, 1, 2, 3].includes(multiplicador)) {
          return 800;
        }
      }

      if ([2, 3, 4, 5, 10].includes(multiplicando)) {
        if ([4, 5, 6].includes(multiplicador)) {
          return 1200;
        }
      }

      return 1800;
    };

    for (var i = 0; i < this.multiplicando.length; i++) {
      for (var j = 0; j < this.multiplicador.length; j++) {
        const multiplicando = this.multiplicando[i];
        const multiplicador = this.multiplicador[j];
        const correcta = multiplicando * multiplicador;
        preguntas.push({
          multiplicacion: `${multiplicando} \\times ${multiplicador} =`,
          tabla1: tablaGen(multiplicando, this.multiplicadores1, correcta),
          tabla2: tablaGen(multiplicando, this.multiplicadores2, correcta),
          correcta: correcta.toString(),
          id: uuidv4(),
          rating: rating(multiplicando, multiplicador)
        });
      }
    }

    return preguntas;
  },
  all() {
    return this.Tablas();
  }
};
