const Quinto = (loadJsonFile, jsonPath) => {
  return {
    "paralelas-secantes-o-perpendiculares-e": function() {
      return loadJsonFile(
        jsonPath + "/matematicas/quinto/ParaSecPer/ParaSecPer.json"
      );
    }
  };
};

module.exports = Quinto;