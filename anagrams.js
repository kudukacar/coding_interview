const anagrams = (str1, str2) => {
    length1 = str1.length;
    length2 = str2.length;

    if(length1 !== length2) {
        return false;
    }

    const letters = {};

    for(let i = 0; i < length1; i++) {
        if(letters[str1[i]]) {
            letters[str1[i]] += 1;
        } else {
            letters[str1[i]] = 1;
        }
    }

    for(let i = 0; i < length2; i++) {
        if(letters[str2[i]]) {
            letters[str2[i]] -= 1;
        } else {
            return false;
        }
    }

    for(let letter in letters) {
        if(letters[letter] !== 0) {
            return false;
        }
    }

    return true;

}