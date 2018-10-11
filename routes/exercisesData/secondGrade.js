const secondGrade = (loadJsonFile, jsonPath) => {
  return {
    "days-of-the-week-e": function() {
      return loadJsonFile(
        jsonPath + "/math/second-grade/DaysOfTheWeek/DaysOfTheWeek.json"
      );
    }
  };
};

module.exports = secondGrade;
