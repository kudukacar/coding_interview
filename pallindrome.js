const pallindrome = (num) => {
    let divisor = 1;
    let temp = num;

    while(temp > 9) {
        temp = Math.floor(temp/10);
        divisor = divisor * 10;
    }

    while(num > 9) {
        if(Math.floor(num/divisor) !== num % 10) {
            return false;
        }
        num = Math.floor((num % divisor)/10);
        divisor = divisor/100;
    }

    return true;
}