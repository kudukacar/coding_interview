const reverse = (array) => {
  for(let i = 0; i < Math.floor(array.length/2); i++) {
    [array[i], array[array.length - i - 1]] = [array[array.length - i - 1], array[i]];
  }
  return array;
}