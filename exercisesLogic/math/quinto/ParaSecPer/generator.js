const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  Paralelas() {
    const rating800 = [3, 8, 13, 15, 18, 20, 23, 28, 33, 38, 43, 45, 48, 50];
    const rating1200 = [
      1,
      2,
      6,
      7,
      11,
      12,
      16,
      17,
      21,
      22,
      24,
      25,
      26,
      27,
      29,
      31,
      32,
      34,
      36,
      37,
      39,
      41,
      42,
      46,
      47
    ];
    const rating1800 = [4, 5, 9, 10, 14, 19, 30, 35, 40, 44, 49];
    const ratings = [
      {
        rating: 800,
        assets: rating800
      },
      {
        rating: 1200,
        assets: rating1200
      },
      {
        rating: 1800,
        assets: rating1800
      }
    ];
    const preguntas = [];

    for (var i = 0; i < ratings.length; i++) {
      for (var j = 0; j < ratings[i].assets.length; j++) {
        preguntas.push({
          imagen: `paralela${ratings[i].assets[j]}.svg`,
          correcta: "paralela",
          id: uuidv4(),
          rating: ratings[i].rating
        });
      }
    }

    return preguntas;
  },
  Secantes() {
    const rating800 = [
      1,
      2,
      3,
      4,
      11,
      12,
      13,
      14,
      21,
      22,
      23,
      24,
      31,
      32,
      33,
      34,
      41,
      42,
      43,
      44
    ];
    const rating1200 = [
      5,
      7,
      8,
      9,
      10,
      15,
      17,
      18,
      19,
      20,
      25,
      26,
      35,
      36,
      45,
      46,
      47,
      48,
      49,
      50
    ];
    const rating1800 = [6, 16, 27, 28, 29, 30, 37, 38, 39, 40];
    const ratings = [
      {
        rating: 800,
        assets: rating800
      },
      {
        rating: 1200,
        assets: rating1200
      },
      {
        rating: 1800,
        assets: rating1800
      }
    ];
    const preguntas = [];

    for (var i = 0; i < ratings.length; i++) {
      for (var j = 0; j < ratings[i].assets.length; j++) {
        preguntas.push({
          imagen: `secante${ratings[i].assets[j]}.svg`,
          correcta: "secante",
          id: uuidv4(),
          rating: ratings[i].rating
        });
      }
    }

    return preguntas;
  },
  Perpendiculares() {
    const rating800 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const rating1200 = [
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ];
    const rating1800 = [
      28,
      29,
      30,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
    ];
    const ratings = [
      {
        rating: 800,
        assets: rating800
      },
      {
        rating: 1200,
        assets: rating1200
      },
      {
        rating: 1800,
        assets: rating1800
      }
    ];
    const preguntas = [];

    for (var i = 0; i < ratings.length; i++) {
      for (var j = 0; j < ratings[i].assets.length; j++) {
        preguntas.push({
          imagen: `perpendicular${ratings[i].assets[j]}.svg`,
          correcta: "perpendicular",
          id: uuidv4(),
          rating: ratings[i].rating
        });
      }
    }

    return preguntas;
  },
  all() {
    return this.Paralelas().concat(this.Secantes(), this.Perpendiculares());
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
// fs.writeFile("ParaSecPer.json", string, function(err) {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
// });
