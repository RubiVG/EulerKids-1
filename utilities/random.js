module.exports.shuffleFisher = array => {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};
module.exports.randomFromArray = (population, k) => {
  if (!Array.isArray(population)) throw new TypeError("Must be an array");
  var n = population.length;
  if (k < 0 || k > n)
    throw new RangeError("Sample larger than array or is negative");

  var result = new Array(k);
  var setsize = 21;

  if (k > 5) setsize += Math.pow(4, Math.ceil(Math.log(k * 3, 4)));

  if (n <= setsize) {
    var pool = population.slice();
    for (var i = 0; i < k; i++) {
      var j = (Math.random() * (n - i)) | 0;
      result[i] = pool[j];
      pool[j] = pool[n - i - 1];
    }
  } else {
    var selected = new Set();
    for (var i = 0; i < k; i++) {
      var j = (Math.random() * (n - i)) | 0;
      while (selected.has(j)) {
        j = (Math.random() * (n - i)) | 0;
      }
      selected.add(j);
      result[i] = population[j];
    }
  }

  return result;
};
module.exports.randomNumberGen = (how_many_numbers, min, max) => {
  var numbers = [];
  while (numbers.length < how_many_numbers) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    var found = false;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] === randomNumber) {
        found = true;
        break;
      }
    }
    if (!found) numbers[numbers.length] = randomNumber;
  }

  return numbers;
};
module.exports.uniq_array_numbers = array => {
  var seen = {};
  return array.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
};
const numerosDisponibles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
module.exports.digits = (numerosDisponibles, cantidadCifrasFinal) => {
  var string = "";

  for (var i = 0; i < cantidadCifrasFinal; i++) {
    var item =
      numerosDisponibles[Math.floor(Math.random() * numerosDisponibles.length)];
    string += item.toString();
  }
  return string;
};
module.exports.randomString = stringLength => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var ASCII =
    '!"#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz{|}~[]';

  for (var i = 0; i < stringLength; i++)
    text += ASCII.charAt(Math.floor(Math.random() * ASCII.length));

  return text;
};
