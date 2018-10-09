const Cuarto = (loadJsonFile, jsonPath) => {
  return {
    "notacion-desarrollada-a-estandar-4-e": function() {
      return loadJsonFile(
        jsonPath +
          "/matematicas/cuarto/NotaDesaEstan/NotacionDesarrolladaEstandar.json"
      );
    }
  };
};

module.exports = Cuarto;
