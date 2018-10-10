const uuidv4 = require("uuid/v4");

const logic = {
  sujetos: [
    {
      sujeto: "magnifying glasses",
      folder: "todos"
    },
    {
      sujeto: "books",
      folder: "todos"
    },
    {
      sujeto: "candies",
      folder: "todos"
    },
    {
      sujeto: "apples",
      folder: "todos"
    },
    {
      sujeto: "pears",
      folder: "todos"
    },
    {
      sujeto: "spinners",
      folder: "todos"
    },
    {
      sujeto: "cats",
      folder: "todos"
    }
  ],
  rectas: [
    "recta2.svg",
    "recta3.svg",
    "recta4.svg",
    "recta5.svg",
    "recta6.svg",
    "recta7.svg",
    "recta8.svg",
    "recta9.svg",
    "recta10.svg"
  ],
  rating(number) {
    if (number < 4) {
      return 800;
    }
    if (number < 7) {
      return 1200;
    }
    if (number >= 7) {
      return 1800;
    }
  },
  singularLess() {
    const less = "less";
    const correcta = [
      ["lupa1.svg", "lupa1_R.svg"],
      ["book1.svg", "book1_R.svg"],
      ["dulces1.svg", "dulces1_R.svg"],
      ["manzana1.svg", "manzana1_R.svg"],
      ["pera1.svg", "pera1_R.svg"],
      ["trompo1.svg", "trompo1_R.svg"],
      ["gato1.svg", "gato1_R.svg"]
    ];
    const singulares = [
      "magnifying glass",
      "book",
      "candy",
      "apple",
      "pear",
      "spinner",
      "cat"
    ];
    const incorrectas = [
      [
        ["lupa2.svg", "lupa2_R.svg"],
        ["lupa3.svg", "lupa3_R.svg"],
        ["lupa4.svg", "lupa4_R.svg"],
        ["lupa5.svg", "lupa5_R.svg"],
        ["lupa6.svg", "lupa6_R.svg"],
        ["lupa7.svg", "lupa7_R.svg"],
        ["lupa8.svg", "lupa8_R.svg"],
        ["lupa9.svg", "lupa9_R.svg"],
        ["lupa10.svg", "lupa10_R.svg"]
      ],
      [
        ["book2.svg", "book2_R.svg"],
        ["book3.svg", "book3_R.svg"],
        ["book4.svg", "book4_R.svg"],
        ["book5.svg", "book5_R.svg"],
        ["book6.svg", "book6_R.svg"],
        ["book7.svg", "book7_R.svg"],
        ["book8.svg", "book8_R.svg"],
        ["book9.svg", "book9_R.svg"],
        ["book10.svg", "book10_R.svg"]
      ],
      [
        ["dulces2.svg", "dulces2_R.svg"],
        ["dulces3.svg", "dulces3_R.svg"],
        ["dulces4.svg", "dulces4_R.svg"],
        ["dulces5.svg", "dulces5_R.svg"],
        ["dulces6.svg", "dulces6_R.svg"],
        ["dulces7.svg", "dulces7_R.svg"],
        ["dulces8.svg", "dulces8_R.svg"],
        ["dulces9.svg", "dulces9_R.svg"],
        ["dulces10.svg", "dulces10_R.svg"]
      ],
      [
        ["manzana2.svg", "manzana2_R.svg"],
        ["manzana3.svg", "manzana3_R.svg"],
        ["manzana4.svg", "manzana4_R.svg"],
        ["manzana5.svg", "manzana5_R.svg"],
        ["manzana6.svg", "manzana6_R.svg"],
        ["manzana7.svg", "manzana7_R.svg"],
        ["manzana8.svg", "manzana8_R.svg"],
        ["manzana9.svg", "manzana9_R.svg"],
        ["manzana10.svg", "manzana10_R.svg"]
      ],
      [
        ["pera2.svg", "pera2_R.svg"],
        ["pera3.svg", "pera3_R.svg"],
        ["pera4.svg", "pera4_R.svg"],
        ["pera5.svg", "pera5_R.svg"],
        ["pera6.svg", "pera6_R.svg"],
        ["pera7.svg", "pera7_R.svg"],
        ["pera8.svg", "pera8_R.svg"],
        ["pera9.svg", "pera9_R.svg"],
        ["pera10.svg", "pera10_R.svg"]
      ],
      [
        ["trompo2.svg", "trompo2_R.svg"],
        ["trompo3.svg", "trompo3_R.svg"],
        ["trompo4.svg", "trompo4_R.svg"],
        ["trompo5.svg", "trompo5_R.svg"],
        ["trompo6.svg", "trompo6_R.svg"],
        ["trompo7.svg", "trompo7_R.svg"],
        ["trompo8.svg", "trompo8_R.svg"],
        ["trompo9.svg", "trompo9_R.svg"],
        ["trompo10.svg", "trompo10_R.svg"]
      ],
      [
        ["gato2.svg", "gato2_R.svg"],
        ["gato3.svg", "gato3_R.svg"],
        ["gato4.svg", "gato4_R.svg"],
        ["gato5.svg", "gato5_R.svg"],
        ["gato6.svg", "gato6_R.svg"],
        ["gato7.svg", "gato7_R.svg"],
        ["gato8.svg", "gato8_R.svg"],
        ["gato9.svg", "gato9_R.svg"],
        ["gato10.svg", "gato10_R.svg"]
      ]
    ];
    const questions = [];

    for (var i = 0; i < this.sujetos.length; i++) {
      for (var j = 0; j < incorrectas[i].length; j++) {
        questions.push({
          has: less,
          subject: this.sujetos[i].sujeto,
          folder: this.sujetos[i].folder,
          folder2: "rectas",
          correct: correcta[i][0],
          quantity1: "1", // Siempre es uno porque es singular
          object1: singulares[i],
          answer1: correcta[i][1],
          numberLine1: "recta1.svg", // Siempre es uno porque es singular
          incorrect: incorrectas[i][j][0],
          quantity2: (j + 2).toString(), // 2 -> 10
          object2: this.sujetos[i].sujeto,
          answer2: incorrectas[i][j][1],
          numberLine2: this.rectas[j],
          id: uuidv4(),
          rating: this.rating(j + 2)
        });
      }
    }
    return questions;
  },
  pluralLess() {
    const less = "less";
    const correctas = [
      [
        ["lupa2.svg", "lupa2_R.svg"],
        ["lupa3.svg", "lupa3_R.svg"],
        ["lupa4.svg", "lupa4_R.svg"],
        ["lupa5.svg", "lupa5_R.svg"],
        ["lupa6.svg", "lupa6_R.svg"],
        ["lupa7.svg", "lupa7_R.svg"],
        ["lupa8.svg", "lupa8_R.svg"],
        ["lupa9.svg", "lupa9_R.svg"]
      ],
      [
        ["book2.svg", "book2_R.svg"],
        ["book3.svg", "book3_R.svg"],
        ["book4.svg", "book4_R.svg"],
        ["book5.svg", "book5_R.svg"],
        ["book6.svg", "book6_R.svg"],
        ["book7.svg", "book7_R.svg"],
        ["book8.svg", "book8_R.svg"],
        ["book9.svg", "book9_R.svg"]
      ],
      [
        ["dulces2.svg", "dulces2_R.svg"],
        ["dulces3.svg", "dulces3_R.svg"],
        ["dulces4.svg", "dulces4_R.svg"],
        ["dulces5.svg", "dulces5_R.svg"],
        ["dulces6.svg", "dulces6_R.svg"],
        ["dulces7.svg", "dulces7_R.svg"],
        ["dulces8.svg", "dulces8_R.svg"],
        ["dulces9.svg", "dulces9_R.svg"]
      ],
      [
        ["manzana2.svg", "manzana2_R.svg"],
        ["manzana3.svg", "manzana3_R.svg"],
        ["manzana4.svg", "manzana4_R.svg"],
        ["manzana5.svg", "manzana5_R.svg"],
        ["manzana6.svg", "manzana6_R.svg"],
        ["manzana7.svg", "manzana7_R.svg"],
        ["manzana8.svg", "manzana8_R.svg"],
        ["manzana9.svg", "manzana9_R.svg"]
      ],
      [
        ["pera2.svg", "pera2_R.svg"],
        ["pera3.svg", "pera3_R.svg"],
        ["pera4.svg", "pera4_R.svg"],
        ["pera5.svg", "pera5_R.svg"],
        ["pera6.svg", "pera6_R.svg"],
        ["pera7.svg", "pera7_R.svg"],
        ["pera8.svg", "pera8_R.svg"],
        ["pera9.svg", "pera9_R.svg"]
      ],
      [
        ["trompo2.svg", "trompo2_R.svg"],
        ["trompo3.svg", "trompo3_R.svg"],
        ["trompo4.svg", "trompo4_R.svg"],
        ["trompo5.svg", "trompo5_R.svg"],
        ["trompo6.svg", "trompo6_R.svg"],
        ["trompo7.svg", "trompo7_R.svg"],
        ["trompo8.svg", "trompo8_R.svg"],
        ["trompo9.svg", "trompo9_R.svg"]
      ],
      [
        ["gato2.svg", "gato2_R.svg"],
        ["gato3.svg", "gato3_R.svg"],
        ["gato4.svg", "gato4_R.svg"],
        ["gato5.svg", "gato5_R.svg"],
        ["gato6.svg", "gato6_R.svg"],
        ["gato7.svg", "gato7_R.svg"],
        ["gato8.svg", "gato8_R.svg"],
        ["gato9.svg", "gato9_R.svg"]
      ]
    ];
    const incorrectas = [
      [
        ["lupa3.svg", "lupa3_R.svg"],
        ["lupa4.svg", "lupa4_R.svg"],
        ["lupa5.svg", "lupa5_R.svg"],
        ["lupa6.svg", "lupa6_R.svg"],
        ["lupa7.svg", "lupa7_R.svg"],
        ["lupa8.svg", "lupa8_R.svg"],
        ["lupa9.svg", "lupa9_R.svg"],
        ["lupa10.svg", "lupa10_R.svg"]
      ],
      [
        ["book3.svg", "book3_R.svg"],
        ["book4.svg", "book4_R.svg"],
        ["book5.svg", "book5_R.svg"],
        ["book6.svg", "book6_R.svg"],
        ["book7.svg", "book7_R.svg"],
        ["book8.svg", "book8_R.svg"],
        ["book9.svg", "book9_R.svg"],
        ["book10.svg", "book10_R.svg"]
      ],
      [
        ["dulces3.svg", "dulces3_R.svg"],
        ["dulces4.svg", "dulces4_R.svg"],
        ["dulces5.svg", "dulces5_R.svg"],
        ["dulces6.svg", "dulces6_R.svg"],
        ["dulces7.svg", "dulces7_R.svg"],
        ["dulces8.svg", "dulces8_R.svg"],
        ["dulces9.svg", "dulces9_R.svg"],
        ["dulces10.svg", "dulces10_R.svg"]
      ],
      [
        ["manzana3.svg", "manzana3_R.svg"],
        ["manzana4.svg", "manzana4_R.svg"],
        ["manzana5.svg", "manzana5_R.svg"],
        ["manzana6.svg", "manzana6_R.svg"],
        ["manzana7.svg", "manzana7_R.svg"],
        ["manzana8.svg", "manzana8_R.svg"],
        ["manzana9.svg", "manzana9_R.svg"],
        ["manzana10.svg", "manzana10_R.svg"]
      ],
      [
        ["pera3.svg", "pera3_R.svg"],
        ["pera4.svg", "pera4_R.svg"],
        ["pera5.svg", "pera5_R.svg"],
        ["pera6.svg", "pera6_R.svg"],
        ["pera7.svg", "pera7_R.svg"],
        ["pera8.svg", "pera8_R.svg"],
        ["pera9.svg", "pera9_R.svg"],
        ["pera10.svg", "pera10_R.svg"]
      ],
      [
        ["trompo3.svg", "trompo3_R.svg"],
        ["trompo4.svg", "trompo4_R.svg"],
        ["trompo5.svg", "trompo5_R.svg"],
        ["trompo6.svg", "trompo6_R.svg"],
        ["trompo7.svg", "trompo7_R.svg"],
        ["trompo8.svg", "trompo8_R.svg"],
        ["trompo9.svg", "trompo9_R.svg"],
        ["trompo10.svg", "trompo10_R.svg"]
      ],
      [
        ["gato3.svg", "gato3_R.svg"],
        ["gato4.svg", "gato4_R.svg"],
        ["gato5.svg", "gato5_R.svg"],
        ["gato6.svg", "gato6_R.svg"],
        ["gato7.svg", "gato7_R.svg"],
        ["gato8.svg", "gato8_R.svg"],
        ["gato9.svg", "gato9_R.svg"],
        ["gato10.svg", "gato10_R.svg"]
      ]
    ];
    const questions = [];

    for (var i = 0; i < this.sujetos.length; i++) {
      for (var j = 0; j < correctas[i].length; j++) {
        questions.push({
          has: less,
          subject: this.sujetos[i].sujeto,
          folder: this.sujetos[i].folder,
          folder2: "rectas",
          correct: correctas[i][j][0], // 2
          quantity1: (j + 2).toString(), // 2 -> 9
          object1: this.sujetos[i].sujeto,
          answer1: correctas[i][j][1],
          numberLine1: this.rectas[j], // 2
          incorrect: incorrectas[i][j][0], // 3
          quantity2: (j + 3).toString(), // 3 -> 10
          object2: this.sujetos[i].sujeto,
          answer2: incorrectas[i][j][1],
          numberLine2: this.rectas[j + 1], //3
          id: uuidv4(),
          rating: this.rating(j + 2)
        });
      }
    }
    return questions;
  },
  pluralMore() {
    const more = "more";
    const correctas = [
      [
        ["lupa3.svg", "lupa3_R.svg"],
        ["lupa4.svg", "lupa4_R.svg"],
        ["lupa5.svg", "lupa5_R.svg"],
        ["lupa6.svg", "lupa6_R.svg"],
        ["lupa7.svg", "lupa7_R.svg"],
        ["lupa8.svg", "lupa8_R.svg"],
        ["lupa9.svg", "lupa9_R.svg"],
        ["lupa10.svg", "lupa10_R.svg"]
      ],
      [
        ["book3.svg", "book3_R.svg"],
        ["book4.svg", "book4_R.svg"],
        ["book5.svg", "book5_R.svg"],
        ["book6.svg", "book6_R.svg"],
        ["book7.svg", "book7_R.svg"],
        ["book8.svg", "book8_R.svg"],
        ["book9.svg", "book9_R.svg"],
        ["book10.svg", "book10_R.svg"]
      ],
      [
        ["dulces3.svg", "dulces3_R.svg"],
        ["dulces4.svg", "dulces4_R.svg"],
        ["dulces5.svg", "dulces5_R.svg"],
        ["dulces6.svg", "dulces6_R.svg"],
        ["dulces7.svg", "dulces7_R.svg"],
        ["dulces8.svg", "dulces8_R.svg"],
        ["dulces9.svg", "dulces9_R.svg"],
        ["dulces10.svg", "dulces10_R.svg"]
      ],
      [
        ["manzana3.svg", "manzana3_R.svg"],
        ["manzana4.svg", "manzana4_R.svg"],
        ["manzana5.svg", "manzana5_R.svg"],
        ["manzana6.svg", "manzana6_R.svg"],
        ["manzana7.svg", "manzana7_R.svg"],
        ["manzana8.svg", "manzana8_R.svg"],
        ["manzana9.svg", "manzana9_R.svg"],
        ["manzana10.svg", "manzana10_R.svg"]
      ],
      [
        ["pera3.svg", "pera3_R.svg"],
        ["pera4.svg", "pera4_R.svg"],
        ["pera5.svg", "pera5_R.svg"],
        ["pera6.svg", "pera6_R.svg"],
        ["pera7.svg", "pera7_R.svg"],
        ["pera8.svg", "pera8_R.svg"],
        ["pera9.svg", "pera9_R.svg"],
        ["pera10.svg", "pera10_R.svg"]
      ],
      [
        ["trompo3.svg", "trompo3_R.svg"],
        ["trompo4.svg", "trompo4_R.svg"],
        ["trompo5.svg", "trompo5_R.svg"],
        ["trompo6.svg", "trompo6_R.svg"],
        ["trompo7.svg", "trompo7_R.svg"],
        ["trompo8.svg", "trompo8_R.svg"],
        ["trompo9.svg", "trompo9_R.svg"],
        ["trompo10.svg", "trompo10_R.svg"]
      ],
      [
        ["gato3.svg", "gato3_R.svg"],
        ["gato4.svg", "gato4_R.svg"],
        ["gato5.svg", "gato5_R.svg"],
        ["gato6.svg", "gato6_R.svg"],
        ["gato7.svg", "gato7_R.svg"],
        ["gato8.svg", "gato8_R.svg"],
        ["gato9.svg", "gato9_R.svg"],
        ["gato10.svg", "gato10_R.svg"]
      ]
    ];
    const incorrectas = [
      [
        ["lupa2.svg", "lupa2_R.svg"],
        ["lupa3.svg", "lupa3_R.svg"],
        ["lupa4.svg", "lupa4_R.svg"],
        ["lupa5.svg", "lupa5_R.svg"],
        ["lupa6.svg", "lupa6_R.svg"],
        ["lupa7.svg", "lupa7_R.svg"],
        ["lupa8.svg", "lupa8_R.svg"],
        ["lupa9.svg", "lupa9_R.svg"],
        ["lupa10.svg", "lupa10_R.svg"]
      ],
      [
        ["book2.svg", "book2_R.svg"],
        ["book3.svg", "book3_R.svg"],
        ["book4.svg", "book4_R.svg"],
        ["book5.svg", "book5_R.svg"],
        ["book6.svg", "book6_R.svg"],
        ["book7.svg", "book7_R.svg"],
        ["book8.svg", "book8_R.svg"],
        ["book9.svg", "book9_R.svg"],
        ["book10.svg", "book10_R.svg"]
      ],
      [
        ["dulces2.svg", "dulces2_R.svg"],
        ["dulces3.svg", "dulces3_R.svg"],
        ["dulces4.svg", "dulces4_R.svg"],
        ["dulces5.svg", "dulces5_R.svg"],
        ["dulces6.svg", "dulces6_R.svg"],
        ["dulces7.svg", "dulces7_R.svg"],
        ["dulces8.svg", "dulces8_R.svg"],
        ["dulces9.svg", "dulces9_R.svg"],
        ["dulces10.svg", "dulces10_R.svg"]
      ],
      [
        ["manzana2.svg", "manzana2_R.svg"],
        ["manzana3.svg", "manzana3_R.svg"],
        ["manzana4.svg", "manzana4_R.svg"],
        ["manzana5.svg", "manzana5_R.svg"],
        ["manzana6.svg", "manzana6_R.svg"],
        ["manzana7.svg", "manzana7_R.svg"],
        ["manzana8.svg", "manzana8_R.svg"],
        ["manzana9.svg", "manzana9_R.svg"],
        ["manzana10.svg", "manzana10_R.svg"]
      ],
      [
        ["pera2.svg", "pera2_R.svg"],
        ["pera3.svg", "pera3_R.svg"],
        ["pera4.svg", "pera4_R.svg"],
        ["pera5.svg", "pera5_R.svg"],
        ["pera6.svg", "pera6_R.svg"],
        ["pera7.svg", "pera7_R.svg"],
        ["pera8.svg", "pera8_R.svg"],
        ["pera9.svg", "pera9_R.svg"],
        ["pera10.svg", "pera10_R.svg"]
      ],
      [
        ["trompo2.svg", "trompo2_R.svg"],
        ["trompo3.svg", "trompo3_R.svg"],
        ["trompo4.svg", "trompo4_R.svg"],
        ["trompo5.svg", "trompo5_R.svg"],
        ["trompo6.svg", "trompo6_R.svg"],
        ["trompo7.svg", "trompo7_R.svg"],
        ["trompo8.svg", "trompo8_R.svg"],
        ["trompo9.svg", "trompo9_R.svg"],
        ["trompo10.svg", "trompo10_R.svg"]
      ],
      [
        ["gato2.svg", "gato2_R.svg"],
        ["gato3.svg", "gato3_R.svg"],
        ["gato4.svg", "gato4_R.svg"],
        ["gato5.svg", "gato5_R.svg"],
        ["gato6.svg", "gato6_R.svg"],
        ["gato7.svg", "gato7_R.svg"],
        ["gato8.svg", "gato8_R.svg"],
        ["gato9.svg", "gato9_R.svg"],
        ["gato10.svg", "gato10_R.svg"]
      ]
    ];
    const questions = [];

    for (var i = 0; i < this.sujetos.length; i++) {
      for (var j = 0; j < correctas[i].length; j++) {
        questions.push({
          has: more,
          subject: this.sujetos[i].sujeto,
          folder: this.sujetos[i].folder,
          folder2: "rectas",
          correct: correctas[i][j][0],
          quantity1: (j + 3).toString(), // 3 -> 10
          object1: this.sujetos[i].sujeto,
          answer1: correctas[i][j][1],
          numberLine1: this.rectas[j + 1], //
          incorrect: incorrectas[i][j][0],
          quantity2: (j + 2).toString(), // 2 -> 9
          object2: this.sujetos[i].sujeto,
          answer2: incorrectas[i][j][1],
          numberLine2: this.rectas[j],
          id: uuidv4(),
          rating: this.rating(j + 3)
        });
      }
    }
    return questions;
  },
  allMore() {
    const more = "more";
    const correctas = [
      [
        ["lupa3.svg", "lupa3_R.svg"],
        ["lupa4.svg", "lupa4_R.svg"],
        ["lupa5.svg", "lupa5_R.svg"],
        ["lupa6.svg", "lupa6_R.svg"],
        ["lupa7.svg", "lupa7_R.svg"],
        ["lupa8.svg", "lupa8_R.svg"],
        ["lupa9.svg", "lupa9_R.svg"],
        ["lupa10.svg", "lupa10_R.svg"]
      ],
      [
        ["book3.svg", "book3_R.svg"],
        ["book4.svg", "book4_R.svg"],
        ["book5.svg", "book5_R.svg"],
        ["book6.svg", "book6_R.svg"],
        ["book7.svg", "book7_R.svg"],
        ["book8.svg", "book8_R.svg"],
        ["book9.svg", "book9_R.svg"],
        ["book10.svg", "book10_R.svg"]
      ],
      [
        ["dulces3.svg", "dulces3_R.svg"],
        ["dulces4.svg", "dulces4_R.svg"],
        ["dulces5.svg", "dulces5_R.svg"],
        ["dulces6.svg", "dulces6_R.svg"],
        ["dulces7.svg", "dulces7_R.svg"],
        ["dulces8.svg", "dulces8_R.svg"],
        ["dulces9.svg", "dulces9_R.svg"],
        ["dulces10.svg", "dulces10_R.svg"]
      ],
      [
        ["manzana3.svg", "manzana3_R.svg"],
        ["manzana4.svg", "manzana4_R.svg"],
        ["manzana5.svg", "manzana5_R.svg"],
        ["manzana6.svg", "manzana6_R.svg"],
        ["manzana7.svg", "manzana7_R.svg"],
        ["manzana8.svg", "manzana8_R.svg"],
        ["manzana9.svg", "manzana9_R.svg"],
        ["manzana10.svg", "manzana10_R.svg"]
      ],
      [
        ["pera3.svg", "pera3_R.svg"],
        ["pera4.svg", "pera4_R.svg"],
        ["pera5.svg", "pera5_R.svg"],
        ["pera6.svg", "pera6_R.svg"],
        ["pera7.svg", "pera7_R.svg"],
        ["pera8.svg", "pera8_R.svg"],
        ["pera9.svg", "pera9_R.svg"],
        ["pera10.svg", "pera10_R.svg"]
      ],
      [
        ["trompo3.svg", "trompo3_R.svg"],
        ["trompo4.svg", "trompo4_R.svg"],
        ["trompo5.svg", "trompo5_R.svg"],
        ["trompo6.svg", "trompo6_R.svg"],
        ["trompo7.svg", "trompo7_R.svg"],
        ["trompo8.svg", "trompo8_R.svg"],
        ["trompo9.svg", "trompo9_R.svg"],
        ["trompo10.svg", "trompo10_R.svg"]
      ],
      [
        ["gato3.svg", "gato3_R.svg"],
        ["gato4.svg", "gato4_R.svg"],
        ["gato5.svg", "gato5_R.svg"],
        ["gato6.svg", "gato6_R.svg"],
        ["gato7.svg", "gato7_R.svg"],
        ["gato8.svg", "gato8_R.svg"],
        ["gato9.svg", "gato9_R.svg"],
        ["gato10.svg", "gato10_R.svg"]
      ]
    ];
    const incorrectas = [
      [
        ["lupa2.svg", "lupa2_R.svg"],
        ["lupa3.svg", "lupa3_R.svg"],
        ["lupa4.svg", "lupa4_R.svg"],
        ["lupa5.svg", "lupa5_R.svg"],
        ["lupa6.svg", "lupa6_R.svg"],
        ["lupa7.svg", "lupa7_R.svg"],
        ["lupa8.svg", "lupa8_R.svg"],
        ["lupa9.svg", "lupa9_R.svg"],
        ["lupa10.svg", "lupa10_R.svg"]
      ],

      [
        ["book2.svg", "book2_R.svg"],
        ["book3.svg", "book3_R.svg"],
        ["book4.svg", "book4_R.svg"],
        ["book5.svg", "book5_R.svg"],
        ["book6.svg", "book6_R.svg"],
        ["book7.svg", "book7_R.svg"],
        ["book8.svg", "book8_R.svg"],
        ["book9.svg", "book9_R.svg"],
        ["book10.svg", "book10_R.svg"]
      ],
      [
        ["dulces2.svg", "dulces2_R.svg"],
        ["dulces3.svg", "dulces3_R.svg"],
        ["dulces4.svg", "dulces4_R.svg"],
        ["dulces5.svg", "dulces5_R.svg"],
        ["dulces6.svg", "dulces6_R.svg"],
        ["dulces7.svg", "dulces7_R.svg"],
        ["dulces8.svg", "dulces8_R.svg"],
        ["dulces9.svg", "dulces9_R.svg"],
        ["dulces10.svg", "dulces10_R.svg"]
      ],
      [
        ["manzana2.svg", "manzana2_R.svg"],
        ["manzana3.svg", "manzana3_R.svg"],
        ["manzana4.svg", "manzana4_R.svg"],
        ["manzana5.svg", "manzana5_R.svg"],
        ["manzana6.svg", "manzana6_R.svg"],
        ["manzana7.svg", "manzana7_R.svg"],
        ["manzana8.svg", "manzana8_R.svg"],
        ["manzana9.svg", "manzana9_R.svg"],
        ["manzana10.svg", "manzana10_R.svg"]
      ],
      [
        ["pera2.svg", "pera2_R.svg"],
        ["pera3.svg", "pera3_R.svg"],
        ["pera4.svg", "pera4_R.svg"],
        ["pera5.svg", "pera5_R.svg"],
        ["pera6.svg", "pera6_R.svg"],
        ["pera7.svg", "pera7_R.svg"],
        ["pera8.svg", "pera8_R.svg"],
        ["pera9.svg", "pera9_R.svg"],
        ["pera10.svg", "pera10_R.svg"]
      ],
      [
        ["trompo2.svg", "trompo2_R.svg"],
        ["trompo3.svg", "trompo3_R.svg"],
        ["trompo4.svg", "trompo4_R.svg"],
        ["trompo5.svg", "trompo5_R.svg"],
        ["trompo6.svg", "trompo6_R.svg"],
        ["trompo7.svg", "trompo7_R.svg"],
        ["trompo8.svg", "trompo8_R.svg"],
        ["trompo9.svg", "trompo9_R.svg"],
        ["trompo10.svg", "trompo10_R.svg"]
      ],
      [
        ["gato2.svg", "gato2_R.svg"],
        ["gato3.svg", "gato3_R.svg"],
        ["gato4.svg", "gato4_R.svg"],
        ["gato5.svg", "gato5_R.svg"],
        ["gato6.svg", "gato6_R.svg"],
        ["gato7.svg", "gato7_R.svg"],
        ["gato8.svg", "gato8_R.svg"],
        ["gato9.svg", "gato9_R.svg"],
        ["gato10.svg", "gato10_R.svg"]
      ]
    ];
    const questions = [];

    for (var k = 0; k < this.sujetos.length; k++) {
      for (var i = 0; i < incorrectas.length; i++) {
        for (var j = 0; j < correctas[i].length; j++) {
          if (!this.sujetos[i].sujeto.includes(this.sujetos[k].sujeto)) {
            questions.push({
              has: more,
              subject: "objects", // 0? Variable++
              folder: "todos", // 0?
              folder2: "rectas",
              correct: correctas[k][j][0], //0?
              quantity1: (j + 3).toString(), // 3 -> 10
              object1: this.sujetos[k].sujeto,
              answer1: correctas[k][j][1], //0?
              numberLine1: this.rectas[j + 1], //
              incorrect: incorrectas[i][j][0],
              quantity2: (j + 2).toString(), // 2 -> 9
              object2: this.sujetos[i].sujeto,
              answer2: incorrectas[i][j][1],
              numberLine2: this.rectas[j],
              id: uuidv4(),
              rating: this.rating(j + 3)
            });
          }
        }
      }
    }

    return questions;
  },
  allLess() {
    const less = "less";
    const correctas = [
      [
        ["lupa2.svg", "lupa2_R.svg"],
        ["lupa3.svg", "lupa3_R.svg"],
        ["lupa4.svg", "lupa4_R.svg"],
        ["lupa5.svg", "lupa5_R.svg"],
        ["lupa6.svg", "lupa6_R.svg"],
        ["lupa7.svg", "lupa7_R.svg"],
        ["lupa8.svg", "lupa8_R.svg"],
        ["lupa9.svg", "lupa9_R.svg"]
      ],
      [
        ["book2.svg", "book2_R.svg"],
        ["book3.svg", "book3_R.svg"],
        ["book4.svg", "book4_R.svg"],
        ["book5.svg", "book5_R.svg"],
        ["book6.svg", "book6_R.svg"],
        ["book7.svg", "book7_R.svg"],
        ["book8.svg", "book8_R.svg"],
        ["book9.svg", "book9_R.svg"]
      ],
      [
        ["dulces2.svg", "dulces2_R.svg"],
        ["dulces3.svg", "dulces3_R.svg"],
        ["dulces4.svg", "dulces4_R.svg"],
        ["dulces5.svg", "dulces5_R.svg"],
        ["dulces6.svg", "dulces6_R.svg"],
        ["dulces7.svg", "dulces7_R.svg"],
        ["dulces8.svg", "dulces8_R.svg"],
        ["dulces9.svg", "dulces9_R.svg"]
      ],
      [
        ["manzana2.svg", "manzana2_R.svg"],
        ["manzana3.svg", "manzana3_R.svg"],
        ["manzana4.svg", "manzana4_R.svg"],
        ["manzana5.svg", "manzana5_R.svg"],
        ["manzana6.svg", "manzana6_R.svg"],
        ["manzana7.svg", "manzana7_R.svg"],
        ["manzana8.svg", "manzana8_R.svg"],
        ["manzana9.svg", "manzana9_R.svg"]
      ],
      [
        ["pera2.svg", "pera2_R.svg"],
        ["pera3.svg", "pera3_R.svg"],
        ["pera4.svg", "pera4_R.svg"],
        ["pera5.svg", "pera5_R.svg"],
        ["pera6.svg", "pera6_R.svg"],
        ["pera7.svg", "pera7_R.svg"],
        ["pera8.svg", "pera8_R.svg"],
        ["pera9.svg", "pera9_R.svg"]
      ],
      [
        ["trompo2.svg", "trompo2_R.svg"],
        ["trompo3.svg", "trompo3_R.svg"],
        ["trompo4.svg", "trompo4_R.svg"],
        ["trompo5.svg", "trompo5_R.svg"],
        ["trompo6.svg", "trompo6_R.svg"],
        ["trompo7.svg", "trompo7_R.svg"],
        ["trompo8.svg", "trompo8_R.svg"],
        ["trompo9.svg", "trompo9_R.svg"]
      ],
      [
        ["gato2.svg", "gato2_R.svg"],
        ["gato3.svg", "gato3_R.svg"],
        ["gato4.svg", "gato4_R.svg"],
        ["gato5.svg", "gato5_R.svg"],
        ["gato6.svg", "gato6_R.svg"],
        ["gato7.svg", "gato7_R.svg"],
        ["gato8.svg", "gato8_R.svg"],
        ["gato9.svg", "gato9_R.svg"]
      ]
    ];
    const incorrectas = [
      [
        ["lupa3.svg", "lupa3_R.svg"],
        ["lupa4.svg", "lupa4_R.svg"],
        ["lupa5.svg", "lupa5_R.svg"],
        ["lupa6.svg", "lupa6_R.svg"],
        ["lupa7.svg", "lupa7_R.svg"],
        ["lupa8.svg", "lupa8_R.svg"],
        ["lupa9.svg", "lupa9_R.svg"],
        ["lupa10.svg", "lupa10_R.svg"]
      ],
      [
        ["book3.svg", "book3_R.svg"],
        ["book4.svg", "book4_R.svg"],
        ["book5.svg", "book5_R.svg"],
        ["book6.svg", "book6_R.svg"],
        ["book7.svg", "book7_R.svg"],
        ["book8.svg", "book8_R.svg"],
        ["book9.svg", "book9_R.svg"],
        ["book10.svg", "book10_R.svg"]
      ],
      [
        ["dulces3.svg", "dulces3_R.svg"],
        ["dulces4.svg", "dulces4_R.svg"],
        ["dulces5.svg", "dulces5_R.svg"],
        ["dulces6.svg", "dulces6_R.svg"],
        ["dulces7.svg", "dulces7_R.svg"],
        ["dulces8.svg", "dulces8_R.svg"],
        ["dulces9.svg", "dulces9_R.svg"],
        ["dulces10.svg", "dulces10_R.svg"]
      ],
      [
        ["manzana3.svg", "manzana3_R.svg"],
        ["manzana4.svg", "manzana4_R.svg"],
        ["manzana5.svg", "manzana5_R.svg"],
        ["manzana6.svg", "manzana6_R.svg"],
        ["manzana7.svg", "manzana7_R.svg"],
        ["manzana8.svg", "manzana8_R.svg"],
        ["manzana9.svg", "manzana9_R.svg"],
        ["manzana10.svg", "manzana10_R.svg"]
      ],
      [
        ["pera3.svg", "pera3_R.svg"],
        ["pera4.svg", "pera4_R.svg"],
        ["pera5.svg", "pera5_R.svg"],
        ["pera6.svg", "pera6_R.svg"],
        ["pera7.svg", "pera7_R.svg"],
        ["pera8.svg", "pera8_R.svg"],
        ["pera9.svg", "pera9_R.svg"],
        ["pera10.svg", "pera10_R.svg"]
      ],
      [
        ["trompo3.svg", "trompo3_R.svg"],
        ["trompo4.svg", "trompo4_R.svg"],
        ["trompo5.svg", "trompo5_R.svg"],
        ["trompo6.svg", "trompo6_R.svg"],
        ["trompo7.svg", "trompo7_R.svg"],
        ["trompo8.svg", "trompo8_R.svg"],
        ["trompo9.svg", "trompo9_R.svg"],
        ["trompo10.svg", "trompo10_R.svg"]
      ],
      [
        ["gato3.svg", "gato3_R.svg"],
        ["gato4.svg", "gato4_R.svg"],
        ["gato5.svg", "gato5_R.svg"],
        ["gato6.svg", "gato6_R.svg"],
        ["gato7.svg", "gato7_R.svg"],
        ["gato8.svg", "gato8_R.svg"],
        ["gato9.svg", "gato9_R.svg"],
        ["gato10.svg", "gato10_R.svg"]
      ]
    ];
    const questions = [];

    for (var k = 0; k < this.sujetos.length; k++) {
      for (var i = 0; i < incorrectas.length; i++) {
        for (var j = 0; j < correctas[i].length; j++) {
          if (!this.sujetos[i].sujeto.includes(this.sujetos[k].sujeto)) {
            questions.push({
              has: less,
              subject: "objects", // 0? Variable++
              folder: "todos", // 0?
              folder2: "rectas",
              correct: correctas[k][j][0], //0?
              quantity1: (j + 2).toString(), // 2 -> 9
              object1: this.sujetos[k].sujeto,
              answer1: correctas[k][j][1], //0?
              numberLine1: this.rectas[j], //
              incorrect: incorrectas[i][j][0],
              quantity2: (j + 3).toString(), // 2 -> 9
              object2: this.sujetos[i].sujeto,
              answer2: incorrectas[i][j][1],
              numberLine2: this.rectas[j + 1],
              id: uuidv4(),
              rating: this.rating(j + 2)
            });
          }
        }
      }
    }

    return questions;
  },
  all: function() {
    return this.singularLess().concat(
      this.pluralLess(),
      this.pluralMore(),
      this.allMore(),
      this.allLess()
    );
  }
};
