res = [0, 1];

const fib = (n) => {
    if (res[n] != undefined) {
        return res[n];
    }

    const prevFib = fib(n - 1);
    const prevPrevFib = fib(n - 2);
    res.push(prevFib + prevPrevFib);
    return res[n];
}