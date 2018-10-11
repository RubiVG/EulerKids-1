const loadJsonFile = require("load-json-file");
const path = require("path");
const jsonPath = path.join(__dirname, "../..", "exercisesLogic");

const firstGrade = require("./firstGrade");
const secondGrade = require("./secondGrade");
const Tercero = require("./tercero");
const Cuarto = require("./cuarto");
const Quinto = require("./quinto");
const Sexto = require("./sexto");

const exercisesData = Object.assign(
  {},
  firstGrade(loadJsonFile, jsonPath),
  secondGrade(loadJsonFile, jsonPath),
  Tercero(loadJsonFile, jsonPath),
  Cuarto(loadJsonFile, jsonPath),
  Quinto(loadJsonFile, jsonPath),
  Sexto(loadJsonFile, jsonPath)
);

module.exports = exercisesData;
