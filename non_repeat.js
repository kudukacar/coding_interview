const nonRepeat = (str) => {
  let characters = {};

  for(let i = 0; i < str.length; i++) {
    if(characters[str[i]]) {
      characters[str[i]] + 1;
    } else {
      characters[str[i]] = 1;
    }
  }

  for(let i = 0; i < str.length; i++) {
    if(characters[str[i]] == 1) {
      return console.log(str[i]);
    }
  }

  return console.log("None found");

}