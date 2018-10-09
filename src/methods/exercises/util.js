export const boxedStringAnswer = correctaTexto => {
  // Katex
  return `\\boxed{\\textrm{${correctaTexto}}}`;
};

export const correctaTexto = correcta => {
  return correcta ? "Correcta" : "Incorrecta";
};

export const shuffleFisher = array => {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

export const darkText = btn => {
  return btn ? "white--text" : "grey--text text--darken-4";
};

export const simbolo = numero => {
  return `\\space \\space \\boxed{\\space \\space \\textrm{${numero}} \\space \\space} \\space \\space`;
};
