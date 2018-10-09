module.exports.valorPosicional = numero => {
  const unidades = numero % 10;
  const decenas = Math.floor((numero / 10) % 10);
  const centenas = Math.floor((numero / 100) % 10);
  const unidadesMillar = Math.floor((numero / 1000) % 10);
  const decenasMillar = Math.floor((numero / 10000) % 10);
  const centenasMillar = Math.floor((numero / 100000) % 10);
  const unidadesMillon = Math.floor((numero / 1000000) % 10);
  const decenasMillon = Math.floor((numero / 10000000) % 10);
  const centenasMillon = Math.floor((numero / 100000000) % 10);

  return {
    unidades,
    decenas,
    centenas,
    unidadesMillar,
    decenasMillar,
    centenasMillar,
    unidadesMillon,
    decenasMillon,
    centenasMillon
  };
};
