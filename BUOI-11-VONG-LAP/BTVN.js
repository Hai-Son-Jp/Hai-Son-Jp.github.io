//bài 1
function repeatString(string, numRepeat, join_character) {
    let ans = '';
    for (i = 1; i <= numRepeat; i++) {
        if (i === 1) {
            ans += string;
        } else {
            ans = ans + join_character;
            ans += string;
        }
    }
    return ans;
}
console.log(repeatString('Sơn', 2, '#'));

//bài 2
function calculateSum_For(startNum, endNum, divideNum) {
    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        if (i % divideNum === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(calculateSum_For(1, 100, 4));

function calculateSum_While(startNum, endNum, divideNum) {
    let sum = 0;
    let i = startNum;
    while (i <= endNum) {
        if (i % divideNum === 0) {
            sum += i;
        }
        i++;
    }
    return sum;
}
console.log(calculateSum_While(1, 100, 4));

//bài 3
function calculateSphericalVolume(r) {
    let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    return volume;
}
console.log(calculateSphericalVolume(5));

//bài 4
function calculateSum_For(Num1, Num2) {
    let sum = 0;
    if (Num1 <= Num2) {
        for (let i = Num1 + 1; i < Num2; i++) {
            sum += i;
        }
    } else {
        for (let i = Num2 + 1; i < Num1; i++) {
            sum += i;
        }
    }
    return sum;
}
console.log(calculateSum_For(3, 9));

function calculateSum_While(Num1, Num2) {
    let sum = 0;
    if (Num1 <= Num2) {
        let i = Num1 + 1;
        while (i < Num2) {
            sum += i;
            i++;
        }
    } else {
        let i = Num2 + 1;
        while (i < Num1) {
            sum += i;
            i++;
        }
    }
    return sum;
}

//bài 5
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        //Kiểm tra các số từ 2 đến căn bậc hai của num
        if (num % i === 0) {
            //nếu num chia hết cho i sẽ là sai
            return false;
        }
    }
    return true;
}
console.log(isPrime(3));

//bài 6
function calculateSumPrimeNumber_For(Num) {
    let sum = 0;
    for (let i = 0; i <= Num; i++) {
        sum += i;
    }
    return sum;
}
console.log(calculateSumPrimeNumber_For(4));

function calculateSumPrimeNumber_While(Num) {
    let sum = 0;
    let i = 0;
    while (i <= Num) {
        sum += i;
        i++;
    }
    return sum;
}
console.log(calculateSumPrimeNumber_While(5));

//bài 7
function sumDivide_For(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumDivide_For(10));

function sumDivide_While(num) {
    let sum = 0;
    let i = 1;
    while (i <= num) {
        if (num % i === 0) {
            sum += i;
        }
        i++;
    }

    return sum;
}
console.log(sumDivide_While(10));
