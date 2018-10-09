const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  diez: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
  veinte: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
  sumando1: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
  sumando2: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
  sumandos: [
    ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
    ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
    ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
    ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49"],
    ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
    ["60", "61", "62", "63", "64", "65", "66", "67", "68", "69"],
    ["70", "71", "72", "73", "74", "75", "76", "77", "78", "79"],
    ["80", "81", "82", "83", "84", "85", "86", "87", "88", "89"],
    ["90", "91", "92", "93", "94", "95", "96", "97", "98", "99"]
  ],
  xxx: [
    ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
    ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
    ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
    ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49"],
    ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
    ["60", "61", "62", "63", "64", "65", "66", "67", "68", "69"],
    ["70", "71", "72", "73", "74", "75", "76", "77", "78", "79"],
    ["80", "81", "82", "83", "84", "85", "86", "87", "88", "89"],
    ["90", "91", "92", "93", "94", "95", "96", "97", "98", "99"]
  ],
  Todos() {
    const preguntas = [];
    var counter = 0;

    const rating = correcta => {
      if (correcta < 80) {
        return 800;
      }
      if (correcta >= 80 && correcta < 110) {
        return 1200;
      }
      return 1800;
    };

    // Continuar con Treinta, Cuarenta, etc. =)
    for (var h = 0; h < this.sumandos.length; h++) {
      for (var i = 0; i < this.sumandos[h].length; i++) {
        for (var j = 0; j < this.xxx.length; j++) {
          for (var k = 0; k < this.xxx[j].length - counter; k++) {
            const decenas = this.valorPosicional(this.sumandos[h][i]).decenas;
            const unidades = this.valorPosicional(this.sumandos[h][i]).unidades;
            const diezDecenas = this.valorPosicional(this.xxx[j][k]).decenas;
            const diezUnidades = this.valorPosicional(this.xxx[j][k]).unidades;
            const sumaUnidades = Math.floor(
              Number(unidades) + Number(diezUnidades)
            );
            const sumaDecenas = Math.floor(
              Number(decenas) + Number(diezDecenas)
            );
            const correcta = Math.floor(
              Number(this.sumandos[h][i]) + Number(this.xxx[j][k])
            );

            preguntas.push({
              // "25 + 14 =",
              suma: `${this.sumandos[h][i]} + ${this.xxx[j][k]} =`,
              expresionUnidades: `${decenas}\\textcolor{#1E88E5}{${unidades}} + ${diezDecenas}\\textcolor{#1E88E5}{${diezUnidades}} = \\textcolor{#1E88E5}{${sumaUnidades}}`,
              expresionDecenas: `\\textcolor{#1E88E5}{${decenas}}${unidades} + \\textcolor{#1E88E5}{${diezDecenas}}${diezUnidades} = \\textcolor{#1E88E5}{${sumaDecenas}}${sumaUnidades}`,
              correcta: correcta.toString(),
              respuesta: `${this.sumandos[h][i]} + ${
                this.xxx[j][k]
              } = ${correcta}`,
              id: uuidv4(),
              rating: rating(correcta)
            });
          }
        }
        counter++;
      }
      counter = 0;
    }

    return preguntas;
  },
  valorPosicional(numero) {
    var unidades = numero % 10;
    var decenas = Math.floor((numero / 10) % 10);
    var centenas = Math.floor((numero / 100) % 10);
    var millares = Math.floor((numero / 1000) % 10);
    var diezmillares = Math.floor((numero / 10000) % 10);
    var cienmillares = Math.floor((numero / 100000) % 10);
    return {
      unidades: unidades,
      decenas: decenas,
      centenas: centenas,
      millares: millares,
      diezmillares: diezmillares,
      cienmillares: cienmillares
    };
  },
  all() {
    return this.Todos();
  }
};

//console.log(logic.all());

// const isEqual = require("lodash.isequal");
// const uniqWith = require("lodash.uniqwith");
// const uniqBy = require("lodash.uniqby");
// let ejercicio = logic.all();
// console.log(uniqWith(ejercicio, isEqual).length);
// console.log(uniqBy(ejercicio, "id").length);
// let string = JSON.stringify(ejercicio);
//
// fs.writeFile("SumaDosDigitosSinLLevar.json", string, function(err) {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
// });
