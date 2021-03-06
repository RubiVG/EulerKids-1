const loadJsonFile = require("load-json-file");
const path = require("path");
const jsonPath = path.join(__dirname, "../..", "exercisesLogic");

const firstGrade = require("./firstGrade");
const secondGrade = require("./secondGrade");
const thirdGrade = require("./thirdGrade");
const fourthGrade = require("./fourthGrade");
const fifthGrade = require("./fifthGrade");
const Sexto = require("./sexto");

const exercisesData = Object.assign(
  {},
  firstGrade(loadJsonFile, jsonPath),
  secondGrade(loadJsonFile, jsonPath),
  thirdGrade(loadJsonFile, jsonPath),
  fourthGrade(loadJsonFile, jsonPath),
  fifthGrade(loadJsonFile, jsonPath),
  Sexto(loadJsonFile, jsonPath)
);

module.exports = exercisesData;
