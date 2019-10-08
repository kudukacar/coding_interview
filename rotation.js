const rotation = (str1, str2) => {
    const length1 = str1.length;
    const length2 = str2.length;

    if(length1 !== length2) {
        return false;
    }

    const concat = str1 + str1;
    return concat.indexOf(str2);
}