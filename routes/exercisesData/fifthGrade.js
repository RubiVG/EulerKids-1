const fifthGrade = (loadJsonFile, jsonPath) => {
  return {
    "parallels-secants-and-perpendicular-lines-e": function() {
      return loadJsonFile(
        jsonPath + "/math/fifth-grade/ParaSecPer/ParaSecPer.json"
      );
    }
  };
};

module.exports = fifthGrade;