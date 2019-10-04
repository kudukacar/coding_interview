const removeDuplicates = (array) => {
    array.sort();
    const length = array.length;
    let j = 0;
    for (let i = 0; i < length; i++) {
        if (array[i] != array[i + 1]) {
            array[j] = array[i];
            j++;
        }
    }
    array.splice(j, length - j);
    return array;
}