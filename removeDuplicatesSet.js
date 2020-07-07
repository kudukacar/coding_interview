const removeDuplicates = (array) => {
  let uniqueValues = new Set();
  array.forEach(element => {
    uniqueValues.add(element);
  });
  return [...uniqueValues];
}