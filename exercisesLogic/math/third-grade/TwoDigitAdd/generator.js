const uuidv4 = require("uuid/v4");
const placeValue = require("../../../../utilities/math").placeValue;

const logic = {
  addends: [
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
    var counter = 0;

    const rating = correct => {
      if (correct < 80) {
        return 800;
      }
      if (correct >= 80 && correct < 110) {
        return 1200;
      }
      return 1800;
    };

    const questions = [];

    for (var h = 0; h < this.addends.length; h++) {
      for (var i = 0; i < this.addends[h].length; i++) {
        for (var j = 0; j < this.xxx.length; j++) {
          for (var k = 0; k < this.xxx[j].length - counter; k++) {
            const decenas = placeValue(this.addends[h][i]).tens;
            const unidades = placeValue(this.addends[h][i]).ones;
            const diezDecenas = placeValue(this.xxx[j][k]).tens;
            const diezUnidades = placeValue(this.xxx[j][k]).ones;
            const sumaUnidades = Math.floor(
              Number(unidades) + Number(diezUnidades)
            );
            const sumaDecenas = Math.floor(
              Number(decenas) + Number(diezDecenas)
            );
            const correcta = Math.floor(
              Number(this.addends[h][i]) + Number(this.xxx[j][k])
            );

            questions.push({
              addition: `${this.addends[h][i]} + ${this.xxx[j][k]} =`,
              onesExpression: `${decenas}\\textcolor{#1E88E5}{${unidades}} + ${diezDecenas}\\textcolor{#1E88E5}{${diezUnidades}} = \\textcolor{#1E88E5}{${sumaUnidades}}`,
              tensExpression: `\\textcolor{#1E88E5}{${decenas}}${unidades} + \\textcolor{#1E88E5}{${diezDecenas}}${diezUnidades} = \\textcolor{#1E88E5}{${sumaDecenas}}${sumaUnidades}`,
              correct: correcta.toString(),
              id: uuidv4(),
              rating: rating(correcta)
            });
          }
        }
        counter++;
      }
      counter = 0;
    }

    return questions;
  },
  all() {
    return this.Todos();
  }
};