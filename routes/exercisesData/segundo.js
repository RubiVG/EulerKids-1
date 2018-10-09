const Segundo = (loadJsonFile, jsonPath) => {
  return {
    "orden-de-dias-de-la-semana-e": function() {
      return loadJsonFile(
        jsonPath + "/matematicas/segundo/OrdenDiaSemana/OrdenDiaSemana.json"
      );
    }
  };
};

module.exports = Segundo;
