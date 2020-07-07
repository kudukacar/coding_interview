const longestSub = (string) => {
  let subStrings = [];
  for(let i = 0; i < string.length; i++) {
    for(let j = i + 1; j <= string.length; j++) {
      subStrings.push(string.slice(i, j));
    }
  }
  subStrings.sort((a, b) => b.length - a.length);
  let subStringWithNoDups = subStrings.filter(subString => noDuplicates(subString));
  return subStringWithNoDups[0];
}

const noDuplicates = (string) => {
  let chars = {};

  for(let i = 0; i < string.length; i++) {
    if(chars[string[i]]) {
      return false;
    } else {
      chars[string[i]] = 1;
    }
  }
  return true;
}