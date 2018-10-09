const FirstGrade = (loadJsonFile, jsonPath) => {
  return {
    "comparing-numbers-e": function() {
      return loadJsonFile(
        jsonPath + "/math/first-grade/ComparingNumbers/ComparaCant.json"
      );
    },
    "more-or-less-e": function() {
      return loadJsonFile(
        jsonPath + "/math/first-grade/MoreOrLess/MoreOrLess.json"
      );
    },
    "los-simbolos-mas-y-menos-e": function() {
      return loadJsonFile(
        jsonPath + "/math/first-grade/SimbMasMenos/SimbMasMenos.json"
      );
    }
  };
};

module.exports = FirstGrade;
