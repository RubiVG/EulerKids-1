const uuidv4 = require("uuid/v4");
const fs = require("fs");
const _ = require("lodash");

const logic = {
  dias: [
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
    "domingo"
  ],
  respuestasDespues: [
    {
      dia: "lunes",
      despues: "martes"
    },
    {
      dia: "martes",
      despues: "miércoles"
    },
    {
      dia: "miércoles",
      despues: "jueves"
    },
    {
      dia: "jueves",
      despues: "viernes"
    },
    {
      dia: "viernes",
      despues: "sábado"
    },
    {
      dia: "sábado",
      despues: "domingo"
    },
    {
      dia: "domingo",
      despues: "lunes"
    }
  ],
  respuestasAnterior: [
    {
      dia: "lunes",
      anterior: "domingo"
    },
    {
      dia: "martes",
      anterior: "lunes"
    },
    {
      dia: "miércoles",
      anterior: "martes"
    },
    {
      dia: "jueves",
      anterior: "miércoles"
    },
    {
      dia: "viernes",
      anterior: "jueves"
    },
    {
      dia: "sábado",
      anterior: "viernes"
    },
    {
      dia: "domingo",
      anterior: "sábado"
    }
  ],
  diaManana() {
    const preguntas = [];

    for (var i = 0; i < this.respuestasDespues.length; i++) {
      const diaPregunta = this.respuestasDespues[i].dia;
      const manana = this.respuestasDespues[i].despues;
      const diasDisponibles = this.dias.filter(
        e => e !== diaPregunta && e !== manana
      );

      for (var j = 0; j < diasDisponibles.length; j++) {
        preguntas.push({
          diaPregunta: diaPregunta,
          verbo: "será",
          correcta: manana,
          imagen: `ma${_.deburr(
            diaPregunta.replace(/\w/, c => c.toUpperCase())
          )}.svg`, //"desLunes.svg",
          dia1: manana,
          dia2: diasDisponibles[j], // día random
          adverbio: "mañana",
          manana: true, //para render la lógica del planteamiento
          id: uuidv4(),
          rating: 800
        });
      }
    }

    return preguntas;
  },
  diaAyer() {
    const preguntas = [];

    for (var i = 0; i < this.respuestasAnterior.length; i++) {
      const diaPregunta = this.respuestasAnterior[i].dia;
      const ayer = this.respuestasAnterior[i].anterior;
      const diasDisponibles = this.dias.filter(
        e => e !== diaPregunta && e !== ayer
      );

      for (var j = 0; j < diasDisponibles.length; j++) {
        preguntas.push({
          diaPregunta: diaPregunta,
          verbo: "fue",
          correcta: ayer,
          imagen: `ay${_.deburr(
            diaPregunta.replace(/\w/, c => c.toUpperCase())
          )}.svg`, //"desLunes.svg",
          dia1: ayer, // igual que despues
          dia2: diasDisponibles[j], // día random
          adverbio: "ayer",
          manana: true, //para render la lógica del planteamiento
          id: uuidv4(),
          rating: 800
        });
      }
    }

    return preguntas;
  },
  diaDespues() {
    const preguntas = [];

    for (var i = 0; i < this.respuestasDespues.length; i++) {
      const diaPregunta = this.respuestasDespues[i].dia;
      const despues = this.respuestasDespues[i].despues;
      const diasDisponibles = this.dias.filter(
        e => e !== diaPregunta && e !== despues
      );

      for (var j = 0; j < diasDisponibles.length; j++) {
        preguntas.push({
          adverbio: "después",
          diaPregunta: diaPregunta,
          correcta: despues,
          imagen: `des${_.deburr(
            diaPregunta.replace(/\w/, c => c.toUpperCase())
          )}.svg`, //"desLunes.svg",
          dia1: despues, // igual que despues
          dia2: diasDisponibles[j], // día random
          contraccion: "del",
          despues: true, //para render la lógica del planteamiento
          id: uuidv4(),
          rating: 1200
        });
      }
    }

    return preguntas;
  },
  diaAnterior() {
    const preguntas = [];

    for (var i = 0; i < this.respuestasAnterior.length; i++) {
      const diaPregunta = this.respuestasAnterior[i].dia;
      const anterior = this.respuestasAnterior[i].anterior;
      const diasDisponibles = this.dias.filter(
        e => e !== diaPregunta && e !== anterior
      );

      for (var j = 0; j < diasDisponibles.length; j++) {
        preguntas.push({
          adverbio: "anterior",
          diaPregunta: diaPregunta,
          correcta: anterior,
          imagen: `an${_.deburr(
            diaPregunta.replace(/\w/, c => c.toUpperCase())
          )}.svg`, //"desLunes.svg",
          dia1: anterior, // igual que despues
          dia2: diasDisponibles[j], // día random
          contraccion: "al",
          anterior: true, //para render la lógica del planteamiento
          id: uuidv4(),
          rating: 1200
        });
      }
    }

    return preguntas;
  },
  diaDespues1800() {
    const preguntas = [];

    for (var i = 0; i < this.respuestasDespues.length; i++) {
      const diaPregunta = this.respuestasDespues[i].dia;
      const despues = this.respuestasDespues[i].despues;
      const diasDisponibles = this.dias.filter(
        e => e !== diaPregunta && e !== despues
      );

      for (var j = 0; j < diasDisponibles.length; j++) {
        preguntas.push({
          adverbio: "después",
          diaPregunta: diaPregunta,
          correcta: despues,
          imagen: `des${_.deburr(
            diaPregunta.replace(/\w/, c => c.toUpperCase())
          )}.svg`, //"desLunes.svg",
          dia1: despues, // igual que despues
          dia2: diasDisponibles[j], // día random
          contraccion: "del",
          despues: true, //para render la lógica del planteamiento
          id: uuidv4(),
          rating: 1800
        });
      }
    }

    return preguntas;
  },
  diaAnterior1800() {
    const preguntas = [];

    for (var i = 0; i < this.respuestasAnterior.length; i++) {
      const diaPregunta = this.respuestasAnterior[i].dia;
      const anterior = this.respuestasAnterior[i].anterior;
      const diasDisponibles = this.dias.filter(
        e => e !== diaPregunta && e !== anterior
      );

      for (var j = 0; j < diasDisponibles.length; j++) {
        preguntas.push({
          adverbio: "anterior",
          diaPregunta: diaPregunta,
          correcta: anterior,
          imagen: `an${_.deburr(
            diaPregunta.replace(/\w/, c => c.toUpperCase())
          )}.svg`, //"desLunes.svg",
          dia1: anterior, // igual que despues
          dia2: diasDisponibles[j], // día random
          contraccion: "al",
          anterior: true, //para render la lógica del planteamiento
          id: uuidv4(),
          rating: 1800
        });
      }
    }

    return preguntas;
  },
  all() {
    return this.diaManana().concat(
      this.diaAyer(),
      this.diaDespues(),
      this.diaAnterior(),
      this.diaDespues1800(),
      this.diaAnterior1800()
    );
  }
};

// console.log(logic.all().length);

// let string = JSON.stringify(logic.all());

// fs.writeFile("OrdenDiaSemana.json", string, function(err) {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
// });