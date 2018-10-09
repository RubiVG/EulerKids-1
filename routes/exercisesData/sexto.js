const Sexto = (loadJsonFile, jsonPath) => {
  return {
    "compara-los-numeros-de-mas-de-6-digitos-e": function() {
      return loadJsonFile(
        jsonPath + "/matematicas/sexto/CompNumMasSeis/CompNumMasSeis.json"
      );
    },
    "sumas-y-restas-de-decimales-e": function() {
      return loadJsonFile(
        jsonPath + "/matematicas/sexto/SumRestDecimal/SumRestDecimal.json"
      );
    }
  };
};

module.exports = Sexto;
