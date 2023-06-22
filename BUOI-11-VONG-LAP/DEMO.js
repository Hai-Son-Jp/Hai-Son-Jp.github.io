function isPrime_1(num) {
    let ok = true;
    for (let i = 2; i <= num - 1; i++)
        if (num % i == 0) {
            ok = false;
            break;
        }

    return ok;
}

function isPrime_2(num) {
    for (let i = 2; i <= num - 1; i++) if (num % i == 0) return false;
    return true;
}

function isPrime_3(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i == 0) return false;
    return true;
}

function calculateSumPrimeNumber(startNum, endNum) {
    let sum = 0;
    for (let num = startNum; num <= endNum; num++) {
        if (isPrime_3(num) == true) {
            sum += num;
        }
    }

    return sum;
}

console.log(isPrime_1(13));
console.log(isPrime_2(17));
console.log(isPrime_3(122));
console.log(calculateSumPrimeNumber(2, 6)); // 2 3 5
