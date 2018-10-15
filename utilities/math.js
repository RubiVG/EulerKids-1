module.exports.placeValue = numero => {
  const ones = numero % 10;
  const tens = Math.floor((numero / 10) % 10);
  const hundreds = Math.floor((numero / 100) % 10);
  const thousands = Math.floor((numero / 1000) % 10);
  const tenThousands = Math.floor((numero / 10000) % 10);
  const hundredThousands = Math.floor((numero / 100000) % 10);
  const millions = Math.floor((numero / 1000000) % 10);
  const tenMillions = Math.floor((numero / 10000000) % 10);
  const hundredMillions = Math.floor((numero / 100000000) % 10);

  return {
    ones,
    tens,
    hundreds,
    thousands,
    tenThousands,
    hundredThousands,
    millions,
    tenMillions,
    hundredMillions
  };
};
