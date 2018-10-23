const fourthGrade = (loadJsonFile, jsonPath) => {
  return {
    "from-expanded-to-standard-form-e": function() {
      return loadJsonFile(
        jsonPath +
          "/math/fourth-grade/FromExToStd/FromExToStd.json"
      );
    }
  };
};

module.exports = fourthGrade;
