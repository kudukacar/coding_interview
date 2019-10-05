const recReverse = (string) => {
    const length = string.length;

    if(length < 2) {
        return string;
    }

    return string[length - 1] + recReverse(string.slice(0, length - 1));
}