const insertionSort = (array) => {
    const length = array.length;

    for(let i = 1; i < length; i++) {
        let key = array[i];
        let j = i - 1;
        while(j >= 0 && key < array[j]) {
            [array[j + 1], array[j]] = [array[j], array[j + 1]]; 
            j -= 1;
        }
    }
    return array;
}

const bucketSort = array => {
    const buckets = [];
    let n = 10;
    let length = array.length;
    let result = [];

    for (let i = 0; i < n; i++) {
        buckets.push([]);
    }

    for(let i = 0; i < length; i++) {
        const value = array[i];
        const idx = Math.floor(value * n);
        buckets[idx].push(value);
    }

    for(let i = 0; i < n; i++) {
        buckets[i] = insertionSort(buckets[i]);
        result = result.concat(buckets[i]);
    }

    return result;
}