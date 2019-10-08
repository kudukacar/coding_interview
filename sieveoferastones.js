const sieveOfErastones = (n) => {
    const sieve = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
        sieve[i] = true;
    }
    let p = 2;
    while (p * p <= n) {
        for (let i = p * p; i <= n; i += p) {
            sieve[i] = false;
        }
        p += 1;
    }
    const result = [];

    sieve.forEach((ele, index) => {
        if (ele === true && index >= 2) {
            result.push(index);
        }
    })

    return result;
}