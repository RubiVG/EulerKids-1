const Tercero = (loadJsonFile, jsonPath) => {
  return {
    "sumas-de-dos-digitos-sin-llevar-e": function() {
      return loadJsonFile(
        jsonPath +
          "/matematicas/tercero/SumDosDigi/SumaDosDigitosSinLLevar.json"
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
