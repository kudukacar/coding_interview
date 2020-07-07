const missingNumber = (array, totalCount) => {
  let expectedSum = totalCount * (totalCount + 1)/2;
  let actualSum = array.reduce((a, b) => a + b);
  return expectedSum - actualSum;
}