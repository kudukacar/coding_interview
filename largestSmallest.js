const largestSmallest = (array) => {
  let largest = array[0];
  let smallest = array[0];

  array.forEach(element => {
    if(element > largest) {
      largest = element;
    } else if(element < smallest) {
      smallest = element;
    }
  });
  return [largest, smallest];

}