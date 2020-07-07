const pairs = (array, sum) => {
  let sortedArray = array.sort();
  let pairs = [];
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length - 2; j++) {
      if(sortedArray[i] + sortedArray[j] === sum) {
        pairs.push([sortedArray[i], sortedArray[j]]);
      } else if(sortedArray[i] + sortedArray[j] > sum) {
        break;
      }
    }
  }
  return pairs;
}