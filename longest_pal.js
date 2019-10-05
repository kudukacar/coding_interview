const longestPal = (string) => {
    const length = string.length;
    let longest = "";
    let count = 0;


    for (let i = 0; i < length; i++) {
        if (string[i] === string[i + 1]) {
            count += 2;
            const right = i + 1
            let increment = 1;
            while (i - increment > 0 || right + increment < length) {
                if (string[i - increment] === string[right + increment]) {
                    count += 2;
                    increment++;
                } else {
                    if (count > longest.length) {
                        longest = string.slice(i - increment + 1, right + increment);
                    }
                    count = 0;
                    break;
                }
            }
        } if (string[i - 1] === string[i + 1]) {
            count += 3;
            const left = i - 1;
            const right = i + 1;
            let increment = 1;
            while (left - increment >= 0 || right + increment < length) {
                if (string[left - increment] === string[right + increment]) {
                    count += 2;
                    increment++;
                } else {
                    if (count > longest.length) {
                        longest = string.slice(left - increment + 1, right + increment);
                    }
                    count = 0;
                    break;
                }
            }
        }
    }
    return longest;
} 