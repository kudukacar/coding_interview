const binarySearch = (array, search) => {
    if(array.length < 1) {
        return false;
    }
    const length = array.length;
    const midIdx = Math.floor(length/2);
    const mid = array[midIdx];
    const left = array.slice(0, midIdx);
    const right = array.slice(midIdx + 1);

    if(mid === search) {
        return midIdx;
    } else if(mid > search) {
        return binarySearch(left, search);
    } else {
        res = binarySearch(right, search);
        if(res !== false) {
            return res + midIdx + 1;
        } else {
            return res;
        }
    }
}