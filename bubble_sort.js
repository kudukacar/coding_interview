const bubbleSort = (array) => {
    let sorted = false;
    const length = array.length;

    while(sorted === false) {
        sorted = true;
        for(let i = 0; i < length - 1; i++) {
            if(array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                sorted = false;
            }
        }
    }
    return array;
}