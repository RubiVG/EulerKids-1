const Tercero = (loadJsonFile, jsonPath) => {
  return {
    "two-digit-additions-without-carrying-e": function() {
      return loadJsonFile(
        jsonPath +
          "/math/third-grade/TwoDigitAdd/TwoDigitAdd.json"
      );
    },
    "tablas-de-multiplicar-2-3-4-5-y-10-e": function() {
      return loadJsonFile(
        jsonPath + "/matematicas/tercero/MultiDosDiez/MultiDosDiez.json"
      );
    }
  };
};

module.exports = Tercero;
