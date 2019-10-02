const mergeSort = (array) => {
    if(array.length < 2) {
        return array;
    }
    const length = array.length;
    const left = array.slice(0, Math.floor(length/2));
    const right = array.slice(Math.floor(length/2));
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const sorted = [];
    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return sorted.concat(left, right);
}