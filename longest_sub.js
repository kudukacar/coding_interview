const longestSub = (string) => {
    const letters = {};
    letters[string[0]] = 0;
    const length = string.length;
    let currLen = 1;
    let maxLen = 1;

    for(let i = 1; i < length; i++) {
        if(letters[string[i]] === undefined || letters[string[i]] < i - currLen) {
            currLen++;
        } else {
            if(maxLen < currLen) {
                maxLen = currLen;
            }
            currLen = i - letters[string[i]];
        }
        letters[string[i]]= i;
    }
    return Math.max(currLen, maxLen);
}