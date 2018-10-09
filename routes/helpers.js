module.exports = {
  inicioCicloEscolar: "2018-08-01",
  questionsRatingFilter(rating, questions) {
    if (rating < 800) {
      return questions.filter(a => a.rating === 800);
    }
    if (rating >= 800 && rating <= 1049) {
      return questions.filter(a => a.rating === 1200);
    }
    if (rating >= 1050) {
      return questions.filter(a => a.rating >= 1800);
    }
  },
  ratingMaster(rating, ratingDefault) {
    return !isNaN(parseFloat(rating)) && isFinite(rating)
      ? rating
      : ratingDefault;
  },
  becomeEuler(rating, max) {
    if (!rating) {
      return 0;
    }
    let b = Math.floor((rating * 100) / max);

    if (b < 50) {
      return "Principiante";
    }
    if (b >= 50 && b < 70) {
      return "Intermedio";
    }
    if (b >= 70 && b < 90) {
      return "Avanzado";
    }
    if (b >= 90) {
      return "Euler Kid";
    }
  },
  becomeEulerGrupo(rating) {
    // En el grupo ya tenemos el cálculo del rating
    if (!rating) {
      return 0;
    }
    if (rating < 50) {
      return "Principiante";
    }
    if (rating >= 50 && rating < 70) {
      return "Intermedio";
    }
    if (rating >= 70 && rating < 90) {
      return "Avanzado";
    }
    if (rating >= 90) {
      return "Euler Kid";
    }
  },
  colorNivel(elem) {
    if (elem === "Principiante") {
      return "#E91E63";
    }
    if (elem === "Intermedio") {
      return "#ffc107";
    }
    if (elem === "Avanzado") {
      return "#1E88E5";
    }
    if (elem === "Euler Kid") {
      return "#64dd17";
    }
  },
  nivelesObj(nivelesCounter, HELP) {
    const niveles = [];
    for (let elem in nivelesCounter) {
      niveles.push({
        nivel: elem,
        total: nivelesCounter[elem],
        color: HELP.colorNivel(elem)
      });
    }
    return niveles;
  },
  ratingColor(rating, max) {
    if (!rating) {
      return 0;
    }
    let b = Math.floor((rating * 100) / max);

    if (b < 50) {
      return "#E91E63";
    }
    if (b >= 50 && b < 70) {
      return "#ffc107";
    }
    if (b >= 70 && b < 90) {
      return "#1E88E5";
    }
    if (b >= 90) {
      return "#64dd17";
    }
  },
  returnsZero(value) {
    return value ? value : 0;
  },
  tiempoDiario(_, moment, iterator, fechaMaster, materia, grado) {
    if (!iterator) {
      return [];
    }
    return fechaMaster.map(e => {
      return {
        fecha: e.fecha,
        tiempo: _.get(e, `${grado}.${materia}.tiempo`, 0),
        render: moment
          .duration(_.get(e, `${grado}.${materia}.tiempo`, 0), "seconds")
          .format(),
        ejercicios: _.get(e, `${grado}.${materia}.total`, 0)
      };
    }, []);
  },
  tiempoDiarioAlumnoHome(alumnoUsoTotal, _, moment) {
    if (alumnoUsoTotal.length === 0) {
      return [];
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;
    for (var i = 0; i < alumnoUsoTotal.length; i++) {
      obj = alumnoUsoTotal[i];
      objV = {
        fecha: alumnoUsoTotal[i].fecha,
        tiempo: _.get(alumnoUsoTotal[i], `tiempo`, 0),
        total: _.get(alumnoUsoTotal[i], `total`, 0)
      };

      if (!temp[obj.fecha]) {
        temp[obj.fecha] = obj;
        tempV[objV.fecha] = objV;
      } else {
        tempV[objV.fecha].tiempo += objV.tiempo;
        tempV[objV.fecha].total += objV.total;
      }
    }
    var dataProviderEjer = [];

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      finalData.push({
        fecha: dataProviderEjer[i].fecha,
        ejercicios: dataProviderEjer[i].total,
        tiempo: dataProviderEjer[i].tiempo,
        render: moment.duration(dataProviderEjer[i].tiempo, "seconds").format()
      });
    }
    return finalData;
  },
  tiempoDiarioAlumnoTemas(tiempoDiario, grado, materia, _, moment) {
    if (tiempoDiario.length === 0) {
      return [];
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;
    for (var i = 0; i < tiempoDiario.length; i++) {
      obj = tiempoDiario[i];
      objV = {
        fecha: tiempoDiario[i].fecha,
        tiempo: _.get(tiempoDiario[i], `${grado}.${materia}.tiempo`, 0),
        total: _.get(tiempoDiario[i], `${grado}.${materia}.total`, 0)
      };

      if (!temp[obj.fecha]) {
        temp[obj.fecha] = obj;
        tempV[objV.fecha] = objV;
      } else {
        tempV[objV.fecha].tiempo += objV.tiempo;
        tempV[objV.fecha].total += objV.total;
      }
    }
    var dataProviderEjer = [];

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      if (dataProviderEjer[i].total > 0) {
        finalData.push({
          fecha: dataProviderEjer[i].fecha,
          ejercicios: dataProviderEjer[i].total,
          tiempo: dataProviderEjer[i].tiempo,
          render: moment
            .duration(dataProviderEjer[i].tiempo, "seconds")
            .format()
        });
      }
    }
    return finalData;
  },
  tiempoDiarioAlumnoTema(tiempoDiario, grado, materia, tema, _, moment) {
    if (tiempoDiario.length === 0) {
      return [];
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;
    for (var i = 0; i < tiempoDiario.length; i++) {
      obj = tiempoDiario[i];
      objV = {
        fecha: tiempoDiario[i].fecha,
        tiempo: _.get(tiempoDiario[i], `${grado}.${materia}.${tema}.tiempo`, 0),
        total: _.get(tiempoDiario[i], `${grado}.${materia}.${tema}.total`, 0)
      };

      if (!temp[obj.fecha]) {
        temp[obj.fecha] = obj;
        tempV[objV.fecha] = objV;
      } else {
        tempV[objV.fecha].tiempo += objV.tiempo;
        tempV[objV.fecha].total += objV.total;
      }
    }
    var dataProviderEjer = [];

    //console.log("Salida = ", tempV);

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      if (dataProviderEjer[i].total > 0) {
        finalData.push({
          fecha: dataProviderEjer[i].fecha,
          ejercicios: dataProviderEjer[i].total,
          tiempo: dataProviderEjer[i].tiempo,
          render: moment
            .duration(dataProviderEjer[i].tiempo, "seconds")
            .format()
        });
      }
    }
    return finalData;
  },
  temasPracticadosAlumno(
    temasPracticados,
    temasGrado,
    grado,
    materia,
    role,
    usuario,
    _,
    moment,
    max,
    HELP
  ) {
    if (temasPracticados.length === 0) {
      return [];
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;

    for (var i = 0; i < temasPracticados.length; i++) {
      obj = temasPracticados[i];
      objV = {
        tema: temasPracticados[i].tema,
        skillName: temasPracticados[i].skillName,
        rating: _.get(temasPracticados[i], `rating`, 0),
        iguales: 1,
        ejercicio: temasPracticados[i].ejercicio,
        ejercicios: [temasPracticados[i].ejercicio],
        total: _.get(temasPracticados[i], `total`, 0),
        correctas: _.get(temasPracticados[i], `correctas`, 0),
        incorrectas: _.get(temasPracticados[i], `incorrectas`, 0),
        tiempo: _.get(temasPracticados[i], `tiempo`, 0),
        usuario: temasPracticados[i].usuario
      };

      if (!temp[obj.tema]) {
        temp[obj.tema] = obj;
        tempV[objV.tema] = objV;
      } else {
        tempV[objV.tema].rating += objV.rating;
        tempV[objV.tema].iguales++;
        tempV[objV.tema].ejercicios.push(objV.ejercicio);
        tempV[objV.tema].total += objV.total;
        tempV[objV.tema].correctas += objV.correctas;
        tempV[objV.tema].incorrectas += objV.incorrectas;
        tempV[objV.tema].tiempo += objV.tiempo;
      }
    }
    var dataProviderEjer = [];

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      const totalEjercicios = _.chain(temasGrado)
        .find(["categoryField", dataProviderEjer[i].skillName])
        .get("totalEjercicios", 0)
        .value();

      const urlGenerator = role => {
        return role === "alumno"
          ? `#/estadisticas/alumno/${materia}/${grado}/${
              dataProviderEjer[i].tema
            }`
          : `#/estadisticas/listaAlumnos/${usuario}/${materia}/${grado}/${
              dataProviderEjer[i].tema
            }`;
      };

      finalData.push({
        ejercicios: dataProviderEjer[i].total,
        categoryField: _.truncate(dataProviderEjer[i].skillName, {
          length: 25,
          separator: /,? +/
        }),
        rating: Math.floor(
          ((dataProviderEjer[i].rating / totalEjercicios) * 100) / max
        ),
        color: HELP.ratingColor(
          dataProviderEjer[i].rating / totalEjercicios,
          max
        ),
        url: urlGenerator(role),
        ejerciciosPracticados: dataProviderEjer[i].total,
        correctas: HELP.returnsZero(dataProviderEjer[i].correctas),
        incorrectas: HELP.returnsZero(dataProviderEjer[i].incorrectas),
        tiempo: moment.duration(dataProviderEjer[i].tiempo, "seconds").format(),
        ejerciciosAll: [...new Set(dataProviderEjer[i].ejercicios)].length,
        practicado: dataProviderEjer[i].iguales
      });
    }
    return finalData;
  },
  leccionesPracticadasAlumno(
    ejerciciosPracticados,
    grado,
    materia,
    _,
    moment,
    max,
    HELP
  ) {
    if (ejerciciosPracticados.length === 0) {
      return [];
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;

    for (var i = 0; i < ejerciciosPracticados.length; i++) {
      obj = ejerciciosPracticados[i];
      objV = {
        tema: ejerciciosPracticados[i].tema,
        ejercicio: ejerciciosPracticados[i].ejercicio,
        ejercicioTexto: ejerciciosPracticados[i].ejercicioTexto,
        rating: _.get(ejerciciosPracticados[i], `rating`, 0),
        iguales: 1,
        total: _.get(ejerciciosPracticados[i], `total`, 0),
        correctas: _.get(ejerciciosPracticados[i], `correctas`, 0),
        incorrectas: _.get(ejerciciosPracticados[i], `incorrectas`, 0),
        tiempo: _.get(ejerciciosPracticados[i], `tiempo`, 0),
        usuario: ejerciciosPracticados[i].usuario
      };

      if (!temp[obj.ejercicio]) {
        temp[obj.ejercicio] = obj;
        tempV[objV.ejercicio] = objV;
      } else {
        tempV[objV.ejercicio].rating += objV.rating;
        tempV[objV.ejercicio].iguales++;
        tempV[objV.ejercicio].total += objV.total;
        tempV[objV.ejercicio].correctas += objV.correctas;
        tempV[objV.ejercicio].incorrectas += objV.incorrectas;
        tempV[objV.ejercicio].tiempo += objV.tiempo;
      }
    }
    var dataProviderEjer = [];

    //console.log("Salida = ", tempV);

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      finalData.push({
        ejercicios: dataProviderEjer[i].total,
        categoryField: _.truncate(dataProviderEjer[i].ejercicioTexto, {
          length: 25,
          separator: /,? +/
        }),
        rating: Math.floor(
          ((dataProviderEjer[i].rating / dataProviderEjer[i].iguales) * 100) /
            max
        ),
        color: HELP.ratingColor(
          dataProviderEjer[i].rating / dataProviderEjer[i].iguales,
          max
        ),
        url: `#/aprende/${materia}/${grado.toLowerCase()}/${
          dataProviderEjer[i].tema
        }/${dataProviderEjer[i].ejercicio.slice(0, -2)}/${
          dataProviderEjer[i].ejercicio
        }`,
        ejerciciosPracticados: dataProviderEjer[i].total,
        correctas: HELP.returnsZero(dataProviderEjer[i].correctas),
        incorrectas: HELP.returnsZero(dataProviderEjer[i].incorrectas),
        tiempo: moment.duration(dataProviderEjer[i].tiempo, "seconds").format()
      });
    }
    return finalData;
  },
  tiempoDiarioGrupo(tiempoDiario, grado, materia, _, moment) {
    if (tiempoDiario.length === 0) {
      return [];
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;
    for (var i = 0; i < tiempoDiario.length; i++) {
      obj = tiempoDiario[i];
      objV = {
        fecha: tiempoDiario[i].fecha,
        tiempo: _.get(
          tiempoDiario[i],
          `${grado.toLowerCase()}.${materia}.tiempo`,
          0
        ),
        total: _.get(
          tiempoDiario[i],
          `${grado.toLowerCase()}.${materia}.total`,
          0
        )
      };

      if (!temp[obj.fecha]) {
        temp[obj.fecha] = obj;
        tempV[objV.fecha] = objV;
      } else {
        tempV[objV.fecha].tiempo += objV.tiempo;
        tempV[objV.fecha].total += objV.total;
      }
    }
    var dataProviderEjer = [];

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      finalData.push({
        fecha: dataProviderEjer[i].fecha,
        ejercicios: dataProviderEjer[i].total,
        tiempo: dataProviderEjer[i].tiempo,
        render: moment.duration(dataProviderEjer[i].tiempo, "seconds").format()
      });
    }
    return finalData;
  },
  tiempoDiarioGrupoEjercicio(
    tiempoDiario,
    grado,
    materia,
    tema,
    ejercicio,
    _,
    moment
  ) {
    if (tiempoDiario.length === 0) {
      return [];
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;
    for (var i = 0; i < tiempoDiario.length; i++) {
      obj = tiempoDiario[i];
      objV = {
        fecha: tiempoDiario[i].fecha,
        tiempo: _.get(
          tiempoDiario[i],
          `${grado.toLowerCase()}.${materia}.${tema}.${ejercicio}.tiempo`,
          0
        ),
        total: _.get(
          tiempoDiario[i],
          `${grado.toLowerCase()}.${materia}.${tema}.${ejercicio}.total`,
          0
        )
      };

      if (!temp[obj.fecha]) {
        temp[obj.fecha] = obj;
        tempV[objV.fecha] = objV;
      } else {
        tempV[objV.fecha].tiempo += objV.tiempo;
        tempV[objV.fecha].total += objV.total;
      }
    }
    var dataProviderEjer = [];

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      finalData.push({
        fecha: dataProviderEjer[i].fecha,
        ejercicios: dataProviderEjer[i].total,
        tiempo: dataProviderEjer[i].tiempo,
        render: moment.duration(dataProviderEjer[i].tiempo, "seconds").format()
      });
    }
    return finalData;
  },
  tiempoDiarioGrupoTema(tiempoDiario, grado, materia, tema, _, moment) {
    if (tiempoDiario.length === 0) {
      return [];
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;
    for (var i = 0; i < tiempoDiario.length; i++) {
      obj = tiempoDiario[i];
      objV = {
        fecha: tiempoDiario[i].fecha,
        tiempo: _.get(
          tiempoDiario[i],
          `${grado.toLowerCase()}.${materia}.${tema}.tiempo`,
          0
        ),
        total: _.get(
          tiempoDiario[i],
          `${grado.toLowerCase()}.${materia}.${tema}.total`,
          0
        )
      };

      if (!temp[obj.fecha]) {
        temp[obj.fecha] = obj;
        tempV[objV.fecha] = objV;
      } else {
        tempV[objV.fecha].tiempo += objV.tiempo;
        tempV[objV.fecha].total += objV.total;
      }
    }
    var dataProviderEjer = [];

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      finalData.push({
        fecha: dataProviderEjer[i].fecha,
        ejercicios: dataProviderEjer[i].total,
        tiempo: dataProviderEjer[i].tiempo,
        render: moment.duration(dataProviderEjer[i].tiempo, "seconds").format()
      });
    }
    return finalData;
  },
  ejerciciosPracticadosGrupo(
    temasPracticados,
    grado,
    grupo,
    materia,
    alumnosDefault,
    _,
    moment,
    max,
    HELP
  ) {
    if (temasPracticados.length === 0) {
      return [];
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;

    for (var i = 0; i < temasPracticados.length; i++) {
      obj = temasPracticados[i];
      objV = {
        ejercicio: temasPracticados[i].ejercicio,
        ejercicioTexto: temasPracticados[i].ejercicioTexto,
        tema: temasPracticados[i].tema,
        iguales: 1,
        rating: _.get(temasPracticados[i], `rating`, 0),
        total: _.get(temasPracticados[i], `total`, 0),
        correctas: _.get(temasPracticados[i], `correctas`, 0),
        incorrectas: _.get(temasPracticados[i], `incorrectas`, 0),
        tiempo: _.get(temasPracticados[i], `tiempo`, 0),
        usuario: temasPracticados[i].usuario
      };

      if (!temp[obj.usuario]) {
        temp[obj.usuario] = obj;
        tempV[objV.usuario] = objV;
      } else {
        tempV[objV.usuario].iguales++;
        tempV[objV.usuario].rating += objV.rating;
        tempV[objV.usuario].total += objV.total;
        tempV[objV.usuario].correctas += objV.correctas;
        tempV[objV.usuario].incorrectas += objV.incorrectas;
        tempV[objV.usuario].tiempo += objV.tiempo;
      }
    }
    //console.log("Salida = ", tempV);
    var dataProviderEjer = [];

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      const nombreCompleto = _.chain(alumnosDefault)
        .find(["username", dataProviderEjer[i].usuario])
        .get("nombreCompleto", dataProviderEjer[i].usuario)
        .value();
      finalData.push({
        ejercicios: dataProviderEjer[i].total,
        nombreCompleto: nombreCompleto,
        categoryField: _.truncate(nombreCompleto, {
          length: 25,
          separator: /,? +/
        }),
        usuario: dataProviderEjer[i].usuario,
        rating: Math.floor(
          ((dataProviderEjer[i].rating / dataProviderEjer[i].iguales) * 100) /
            max
        ),
        color: HELP.ratingColor(
          dataProviderEjer[i].rating / dataProviderEjer[i].iguales,
          max
        ),
        url: `#/grupo/${grado.toLowerCase()}-${grupo.toLowerCase()}/${
          dataProviderEjer[i].tema
        }/${dataProviderEjer[i].ejercicio}`,
        ejerciciosPracticados: dataProviderEjer[i].total,
        correctas: HELP.returnsZero(dataProviderEjer[i].correctas),
        incorrectas: HELP.returnsZero(dataProviderEjer[i].incorrectas),
        tiempo: moment.duration(dataProviderEjer[i].tiempo, "seconds").format(),
        practicado: dataProviderEjer[i].iguales
      });
    }
    return finalData;
  },
  leccionesPracticadasGrupo(
    temasPracticados,
    grado,
    grupo,
    materia,
    _,
    moment,
    max,
    HELP
  ) {
    if (temasPracticados.length === 0) {
      return [];
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;

    for (var i = 0; i < temasPracticados.length; i++) {
      obj = temasPracticados[i];
      objV = {
        ejercicio: temasPracticados[i].ejercicio,
        ejercicioTexto: temasPracticados[i].ejercicioTexto,
        tema: temasPracticados[i].tema,
        iguales: 1,
        rating: _.get(temasPracticados[i], `rating`, 0),
        total: _.get(temasPracticados[i], `total`, 0),
        correctas: _.get(temasPracticados[i], `correctas`, 0),
        incorrectas: _.get(temasPracticados[i], `incorrectas`, 0),
        tiempo: _.get(temasPracticados[i], `tiempo`, 0),
        usuario: temasPracticados[i].usuario,
        alumnos: [temasPracticados[i].usuario]
      };

      if (!temp[obj.ejercicio]) {
        temp[obj.ejercicio] = obj;
        tempV[objV.ejercicio] = objV;
      } else {
        tempV[objV.ejercicio].iguales++;
        tempV[objV.ejercicio].rating += objV.rating;
        tempV[objV.ejercicio].total += objV.total;
        tempV[objV.ejercicio].correctas += objV.correctas;
        tempV[objV.ejercicio].incorrectas += objV.incorrectas;
        tempV[objV.ejercicio].tiempo += objV.tiempo;
        tempV[objV.ejercicio].alumnos.push(objV.usuario);
      }
    }
    var dataProviderEjer = [];

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      finalData.push({
        ejercicios: dataProviderEjer[i].total,
        categoryField: _.truncate(dataProviderEjer[i].ejercicioTexto, {
          length: 25,
          separator: /,? +/
        }),
        rating: Math.floor(
          ((dataProviderEjer[i].rating / dataProviderEjer[i].iguales) * 100) /
            max
        ),
        color: HELP.ratingColor(
          dataProviderEjer[i].rating / dataProviderEjer[i].iguales,
          max
        ),
        url: `#/grupo/${grado.toLowerCase()}-${grupo.toLowerCase()}/${
          dataProviderEjer[i].tema
        }/${dataProviderEjer[i].ejercicio}`,
        ejerciciosPracticados: dataProviderEjer[i].total,
        correctas: HELP.returnsZero(dataProviderEjer[i].correctas),
        incorrectas: HELP.returnsZero(dataProviderEjer[i].incorrectas),
        tiempo: moment.duration(dataProviderEjer[i].tiempo, "seconds").format(),
        practicado: dataProviderEjer[i].iguales,
        alumnos: dataProviderEjer[i].alumnos
      });
    }
    return finalData;
  },
  temasPracticadosGrupo(
    temasPracticados,
    grado,
    grupo,
    materia,
    _,
    moment,
    max,
    HELP
  ) {
    if (temasPracticados.length === 0) {
      return [];
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;

    for (var i = 0; i < temasPracticados.length; i++) {
      obj = temasPracticados[i];
      objV = {
        tema: temasPracticados[i].tema,
        skillName: temasPracticados[i].skillName,
        rating: _.get(temasPracticados[i], `rating`, 0),
        iguales: 1,
        ejercicio: temasPracticados[i].ejercicio,
        ejercicios: [temasPracticados[i].ejercicio],
        total: _.get(temasPracticados[i], `total`, 0),
        correctas: _.get(temasPracticados[i], `correctas`, 0),
        incorrectas: _.get(temasPracticados[i], `incorrectas`, 0),
        tiempo: _.get(temasPracticados[i], `tiempo`, 0),
        usuario: temasPracticados[i].usuario,
        alumnos: [temasPracticados[i].usuario]
      };

      if (!temp[obj.tema]) {
        temp[obj.tema] = obj;
        tempV[objV.tema] = objV;
      } else {
        tempV[objV.tema].rating += objV.rating;
        tempV[objV.tema].iguales++;
        tempV[objV.tema].ejercicios.push(objV.ejercicio);
        tempV[objV.tema].total += objV.total;
        tempV[objV.tema].correctas += objV.correctas;
        tempV[objV.tema].incorrectas += objV.incorrectas;
        tempV[objV.tema].tiempo += objV.tiempo;
        tempV[objV.tema].alumnos.push(objV.usuario);
      }
    }
    var dataProviderEjer = [];

    //console.log("Salida = ", tempV);

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      finalData.push({
        ejercicios: dataProviderEjer[i].total,
        categoryField: _.truncate(dataProviderEjer[i].skillName, {
          length: 25,
          separator: /,? +/
        }),
        rating: Math.floor(
          ((dataProviderEjer[i].rating / dataProviderEjer[i].iguales) * 100) /
            max
        ),
        color: HELP.ratingColor(
          dataProviderEjer[i].rating / dataProviderEjer[i].iguales,
          max
        ),
        url: `#/grupo/${grado.toLowerCase()}-${grupo.toLowerCase()}/${
          dataProviderEjer[i].tema
        }`,
        ejerciciosPracticados: dataProviderEjer[i].total,
        correctas: HELP.returnsZero(dataProviderEjer[i].correctas),
        incorrectas: HELP.returnsZero(dataProviderEjer[i].incorrectas),
        tiempo: moment.duration(dataProviderEjer[i].tiempo, "seconds").format(),
        alumnos: [...new Set(dataProviderEjer[i].alumnos)],
        practicado: dataProviderEjer[i].alumnos.length,
        ejerciciosAll: [...new Set(dataProviderEjer[i].ejercicios)].length
      });
    }
    return finalData;
  },
  diferenciaEjercicios(_, alumnosDefault, ejerciciosPracticadosGrupo) {
    // Utilizamos nombreCompleto como diferencia ya que
    // al truncar el categoryField pueden quedar dos nombres iguales
    const diff = _.differenceBy(
      alumnosDefault,
      ejerciciosPracticadosGrupo,
      "nombreCompleto"
    );
    if (diff.length) {
      return ejerciciosPracticadosGrupo
        .concat(diff)
        .sort((a, b) => a.categoryField.localeCompare(b.categoryField));
    }
    return ejerciciosPracticadosGrupo.sort((a, b) =>
      a.categoryField.localeCompare(b.categoryField)
    );
  },
  diferenciaTemas(_, objTemasDefault, temasPracticadosGrupo) {
    const diff = _.differenceBy(
      objTemasDefault,
      temasPracticadosGrupo,
      "categoryField"
    );
    if (diff.length) {
      return temasPracticadosGrupo
        .concat(diff)
        .sort((a, b) => a.categoryField.localeCompare(b.categoryField));
    }
    return temasPracticadosGrupo.sort((a, b) =>
      a.categoryField.localeCompare(b.categoryField)
    );
  },
  listaAlumnos(_, docs, counter, temasPracticadosGrupo, totalTemasPracticados) {
    return _.chain(docs)
      .head()
      .get("alumnos")
      .map(e => {
        return {
          nombre: e.nombre,
          apellidos: e.apellidos,
          nombreCompleto: e.nombreCompleto,
          username: e.username,
          leccionesPracticadas: counter(
            temasPracticadosGrupo,
            totalTemasPracticados,
            e.username
          )
        };
      })
      .value()
      .sort((a, b) => a.nombreCompleto.localeCompare(b.nombreCompleto));
  },
  colorGrupoTiempoDiario(grado, grupo) {
    if (grado === "Primero") {
      if (grupo === "A") {
        return "#EF5350";
      }
      if (grupo === "B") {
        return "#5C6BC0";
      }
      if (grupo === "C") {
        return "#26C6DA";
      }
      if (grupo === "D") {
        return "#66BB6A";
      }
      if (grupo === "E") {
        return "#FFA726";
      }
    }
    if (grado === "Segundo") {
      if (grupo === "A") {
        return "#AB47BC";
      }
      if (grupo === "B") {
        return "#1DE9B6";
      }
      if (grupo === "C") {
        return "#FB8C00";
      }
      if (grupo === "D") {
        return "#29B6F6";
      }
      if (grupo === "E") {
        return "#9CCC65";
      }
    }
    if (grado === "Tercero") {
      if (grupo === "A") {
        return "#FF5252";
      }
      if (grupo === "B") {
        return "#536DFE";
      }
      if (grupo === "C") {
        return "#00E5FF";
      }
      if (grupo === "D") {
        return "#43A047";
      }
      if (grupo === "E") {
        return "#FFAB40";
      }
    }
    if (grado === "Cuarto") {
      if (grupo === "A") {
        return "#AA00FF";
      }
      if (grupo === "B") {
        return "#00BFA5";
      }
      if (grupo === "C") {
        return "#FF9800";
      }
      if (grupo === "D") {
        return "#00B0FF";
      }
      if (grupo === "E") {
        return "#64DD17";
      }
    }
    if (grado === "Quinto") {
      if (grupo === "A") {
        return "#FF8A80";
      }
      if (grupo === "B") {
        return "#304FFE";
      }
      if (grupo === "C") {
        return "#4DD0E1";
      }
      if (grupo === "D") {
        return "#4CAF50";
      }
      if (grupo === "E") {
        return "#FF6F00";
      }
    }
    if (grado === "Sexto") {
      if (grupo === "A") {
        return "#e040fb";
      }
      if (grupo === "B") {
        return "#26A69A";
      }
      if (grupo === "C") {
        return "#EF6C00";
      }
      if (grupo === "D") {
        return "#0091EA";
      }
      if (grupo === "E") {
        return "#B2FF59";
      }
    }
  },
  chartEjer1(alumnosUsoTotal, gruposMiss, iterator, grado, _, moment) {
    if (alumnosUsoTotal.length === 0) {
      return 0;
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;
    for (var i = 0; i < alumnosUsoTotal.length; i++) {
      obj = alumnosUsoTotal[i];
      objV = {
        fecha: alumnosUsoTotal[i].fecha,
        total: _.get(alumnosUsoTotal[i], `${grado.toLowerCase()}.total`, 0),
        tiempo: _.get(alumnosUsoTotal[i], `${grado.toLowerCase()}.tiempo`, 0),
        correctas: _.get(
          alumnosUsoTotal[i],
          `${grado.toLowerCase()}.correctas`,
          0
        ),
        incorrectas: _.get(
          alumnosUsoTotal[i],
          `${grado.toLowerCase()}.incorrectas`,
          0
        )
      };
      //console.log("Nueva fecha objV = ", objV);

      if (!temp[obj.fecha]) {
        temp[obj.fecha] = obj;
        tempV[objV.fecha] = objV;
      } else {
        tempV[objV.fecha].total += objV.total;
        tempV[objV.fecha].tiempo += objV.tiempo;
        tempV[objV.fecha].correctas += objV.correctas;
        tempV[objV.fecha].incorrectas += objV.incorrectas;
      }
    }
    var dataProviderEjer = [];

    //console.log("temp V SALIDA = ", tempV);

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      if (dataProviderEjer[i].total > 0) {
        finalData.push({
          fecha: dataProviderEjer[i].fecha,
          [`${gruposMiss[iterator].grado}${
            gruposMiss[iterator].grupo
          }ejercicios`]: dataProviderEjer[i].total,
          [`${gruposMiss[iterator].grado}${
            gruposMiss[iterator].grupo
          }tiempo`]: dataProviderEjer[i].tiempo,
          [`${gruposMiss[iterator].grado}${
            gruposMiss[iterator].grupo
          }render`]: moment
            .duration(dataProviderEjer[i].tiempo, "seconds")
            .format(),
          tiempo: dataProviderEjer[i].tiempo,
          total: dataProviderEjer[i].total,
          correctas: dataProviderEjer[i].correctas,
          incorrectas: dataProviderEjer[i].incorrectas
        });
      }
    }

    return finalData;
  },
  dataPorMissYGrado(gruposMiss, alumnoUsoTotal, _, moment) {
    const data = [];
    for (var i = 0; i < gruposMiss.length; i++) {
      data.push({
        grado: gruposMiss[i].grado,
        grupo: gruposMiss[i].grupo,
        indice: gruposMiss[i].indice,
        docs: this.chartEjer1(
          alumnoUsoTotal.filter(e =>
            gruposMiss[i].alumnos
              .map(f => {
                return f.username; // Aquí es username porque así estan en la db
              }, [])
              .includes(e.usuario)
          ),
          gruposMiss,
          i,
          gruposMiss[i].grado,
          _,
          moment
        )
      });
    }
    return data;
  },
  tiempoDiarioMateriaEscuela(
    escuelaUsoTotalDiario,
    dataGraphMaker,
    iterator,
    materia,
    _,
    moment
  ) {
    if (escuelaUsoTotalDiario.length === 0) {
      return 0;
    }

    var temp = {};
    var tempV = {};
    var obj = null;
    var objV = null;

    for (var i = 0; i < escuelaUsoTotalDiario.length; i++) {
      obj = escuelaUsoTotalDiario[i];
      objV = {
        fecha: escuelaUsoTotalDiario[i].fecha,
        materia: escuelaUsoTotalDiario[i].materia,
        total: _.get(escuelaUsoTotalDiario[i], `${materia}.total`, 0),
        tiempo: _.get(escuelaUsoTotalDiario[i], `${materia}.tiempo`, 0)
      };

      if (!temp[obj.fecha]) {
        temp[obj.fecha] = obj;
        tempV[objV.fecha] = objV;
      } else {
        tempV[objV.fecha].total += objV.total;
        tempV[objV.fecha].tiempo += objV.tiempo;
      }
    }

    var dataProviderEjer = [];
    //console.log("temp V SALIDA = ", tempV);

    for (var prop in tempV) {
      dataProviderEjer.push(tempV[prop]);
    }

    dataProviderEjer.sort(function(a, b) {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });

    var finalData = [];

    for (i = 0; i < dataProviderEjer.length; i++) {
      finalData.push({
        fecha: dataProviderEjer[i].fecha,
        [`${dataGraphMaker[iterator].materia}Ejercicios`]: dataProviderEjer[i]
          .total,
        [`${dataGraphMaker[iterator].materia}Tiempo`]: dataProviderEjer[i]
          .tiempo,
        [`${dataGraphMaker[iterator].materia}Render`]: moment
          .duration(dataProviderEjer[i].tiempo, "seconds")
          .format()
      });
    }

    return finalData;
  },
  dataPorMateria(dataGraphMaker, usoTotalDiario, _, moment) {
    const data = [];
    for (var i = 0; i < dataGraphMaker.length; i++) {
      data.push({
        title: dataGraphMaker[i].title,
        materia: dataGraphMaker[i].materia,
        indice: dataGraphMaker[i].indice,
        docs: this.tiempoDiarioMateriaEscuela(
          usoTotalDiario.filter(obj =>
            _.keysIn(obj).includes(dataGraphMaker[i].materia)
          ),
          dataGraphMaker,
          i,
          dataGraphMaker[i].materia,
          _,
          moment
        )
      });
    }
    return data;
  },
  tiempoDiarioGroupBy(_, unionReduced) {
    return _.map(_.groupBy(unionReduced, "fecha"), (vals, id) => {
      return _.reduce(
        vals,
        function(m, o) {
          //                                          ponemos "" en lugar de 0
          //                                          para que no concateme en tiempoRender
          for (var p in o) if (p !== "fecha") m[p] = (m[p] || "") + o[p];
          return m;
        },
        { fecha: id }
      );
    }).sort((a, b) => {
      a = new Date(a.fecha).getTime();
      b = new Date(b.fecha).getTime();
      return a - b;
    });
  },
  shuffleFisher(array) {
    let counter = array.length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }
};
