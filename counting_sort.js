const countingSort = (array) => {
    const max = Math.max(...array);
    const count = [];
    const length = array.length;

    for(let i = 0; i <= max; i++) {
        count.push(0);
    }

    for(let i = 0; i < length; i++) {
        count[array[i]] += 1;
    }

    for(let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    const res = array.map(ele => 0);

    for(let i = 0; i < length; i++) {
       res[count[array[i]] - 1] = array[i];
       count[array[i]] -= 1;
    }

    return res;
}