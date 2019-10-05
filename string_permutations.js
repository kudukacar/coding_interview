const permutation = (string) => {
    const length = string.length;

    if (length < 2) {
        return [string];
    }
    const result = [];
    const prevPerm = permutation(string.slice(0, length - 1));
    const lastLetter = string[length - 1];
    for (let i = 0; i < prevPerm.length; i++) {
        const onePerm = prevPerm[i];
        result.push(onePerm + lastLetter);
        for (let j = 0; j < onePerm.length; j++) {
            result.push(onePerm.slice(0, j) + lastLetter + onePerm.slice(j));
        }
    }

    return result;
}