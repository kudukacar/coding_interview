const armstrongNumber = (num) => {
    const digitArray = [];
    let result = num;

    while (result > 0) {
        digitArray.push(result % 10);
        result = Math.floor(result/10);
    }

    const length = digitArray.length;
    result = 0;

    for(let i = 0; i < length; i++) {
        result += Math.pow(digitArray[i],length);
    }

    return result === num;
}