const primeFactors = (n) => {
    const result = [];

    while (n % 2 === 0) {
        result.push(2);
        n = n / 2;
    }


    for (let i = 3; i < Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            result.push(i);
            n = n / i;
        }
    }

    if (n > 2) {
        result.push(n);
    }

    return result;
}