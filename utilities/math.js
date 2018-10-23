module.exports.placeValue = number => {
  const ones = number % 10;
  const tens = Math.floor((number / 10) % 10);
  const hundreds = Math.floor((number / 100) % 10);
  const thousands = Math.floor((number / 1000) % 10);
  const tenThousands = Math.floor((number / 10000) % 10);
  const hundredThousands = Math.floor((number / 100000) % 10);
  const millions = Math.floor((number / 1000000) % 10);
  const tenMillions = Math.floor((number / 10000000) % 10);
  const hundredMillions = Math.floor((number / 100000000) % 10);

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
