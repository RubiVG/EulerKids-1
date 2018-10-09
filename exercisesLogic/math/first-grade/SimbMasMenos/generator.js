const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  sumandos: [["1", "2", "3", "4", "5", "6", "7", "8", "9"]],
  xxx: [["1", "2", "3", "4", "5", "6", "7", "8", "9"]],
  integers: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
    [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
  ],
  Sumas() {
    const preguntas = [];
    var counter = 0;

    const rating = correcta => {
      if (correcta < 5) {
        return 800;
      }
      if (correcta >= 5 && correcta < 8) {
        return 1200;
      }
      return 1800;
    };

    for (var h = 0; h < this.sumandos.length; h++) {
      for (var i = 0; i < this.sumandos[h].length; i++) {
        for (var j = 0; j < this.xxx.length; j++) {
          for (var k = 0; k < this.xxx[j].length - counter; k++) {
            const correcta = Math.floor(
              Number(this.sumandos[h][i]) + Number(this.xxx[j][k])
            );
            // Sumas con resultado menor a 10
            if (correcta > 10) {
              break;
            }
            preguntas.push({
              numero1: this.sumandos[h][i],
              numero2: `${this.xxx[j][k]} = ${correcta}`,
              expresion1: `${this.sumandos[h][i]}\\textcolor{#1E88E5}{+}${
                this.xxx[j][k]
                } = ${correcta}`,
              parte1: this.sumandos[h][i],
              parte2: this.xxx[j][k],
              total: correcta.toString(),
              suma: true,
              correcta: "+",
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
  Restas() {
    const preguntas = [];

    const rating = correcta => {
      if (correcta < 2) {
        return 800;
      }
      if (correcta >= 2 && correcta < 5) {
        return 1200;
      }
      return 1800;
    };

    for (var h = 0; h < this.sumandos.length; h++) {
      for (var i = 0; i < this.sumandos[h].length; i++) {
        for (var j = 0; j < this.xxx.length; j++) {
          for (var k = 0; k < this.xxx[j].length; k++) {
            const correcta = Math.floor(
              Number(this.sumandos[h][i]) - Number(this.xxx[j][k])
            );

            // Restas con resultado negativo
            if (correcta < 0) {
              break;
            }

            preguntas.push({
              numero1: this.sumandos[h][i],
              numero2: `${this.xxx[j][k]} = ${correcta}`,
              expresion1: `${this.sumandos[h][i]}\\textcolor{#1E88E5}{-}${
                this.xxx[j][k]
                } = ${correcta}`,
              parte1: this.sumandos[h][i],
              parte2: this.xxx[j][k],
              total: correcta.toString(),
              resta: true,
              correcta: "-",
              id: uuidv4(),
              rating: rating(correcta)
            });
          }
        }
      }
    }

    return preguntas;
  },
  all() {
    return this.Sumas().concat(this.Restas());
  }
};

// console.log(logic.all());

const isEqual = require("lodash.isequal");
const uniqWith = require("lodash.uniqwith");
const uniqBy = require("lodash.uniqby");

// let ejercicio = logic.all();
// console.log(uniqWith(ejercicio, isEqual).length);
// console.log(uniqBy(ejercicio, "id").length);
// let string = JSON.stringify(ejercicio);
//
// fs.writeFile("SimbMasMenos.json", string, function(err) {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
// });
