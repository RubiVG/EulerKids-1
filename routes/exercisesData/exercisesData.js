const loadJsonFile = require("load-json-file");
const path = require("path");
const jsonPath = path.join(__dirname, "../..", "exercisesLogic");

const firstGrade = require("./firstGrade");
const Segundo = require("./segundo");
const Tercero = require("./tercero");
const Cuarto = require("./cuarto");
const Quinto = require("./quinto");
const Sexto = require("./sexto");

const EjerciciosData = Object.assign(
  {},
  firstGrade(loadJsonFile, jsonPath),
  Segundo(loadJsonFile, jsonPath),
  Tercero(loadJsonFile, jsonPath),
  Cuarto(loadJsonFile, jsonPath),
  Quinto(loadJsonFile, jsonPath),
  Sexto(loadJsonFile, jsonPath)
);

module.exports = EjerciciosData;
