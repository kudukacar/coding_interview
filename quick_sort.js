const quickSort = (array) => {
    if(array.length < 2) {
        return array;
    }
    const pivot = array[0];
    const left = array.slice(1).filter(ele => ele <= pivot);
    const right = array.slice(1).filter(ele => ele > pivot);
    return quickSort(left).concat([pivot], quickSort(right)); 
} 