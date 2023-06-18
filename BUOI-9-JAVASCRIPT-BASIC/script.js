/* lab 1 */
find_largerNumber(2, 14);

function find_largerNumber(a, b) {
    if (a > b) {
        console.log('số có giá trị lớn hơn là: ' + a);
    }
    if (b > a) {
        console.log('số giá trị lớn hơn là: ' + b);
    } else {
        console.log('Hai số bằng nhau');
    }
}

/*  lab 2 */
check_EvenOrOdd(2);

function check_EvenOrOdd(num) {
    if (num % 2 == 0) {
        console.log(num + ' là số chẵn');
    } else {
        console.log(num + ' là số lẻ');
    }
}

/* lab 3 */
check_Divisible_By_3And5(13);

function check_Divisible_By_3And5(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log(num + ' chia hết cho 3 vả 5');
    } else {
        console.log(num + 'không chia hết cho 3 và 5');
    }
}

/* lab 4 */
check_CSumOfAB(4, 3, 15);

function check_CSumOfAB(a, b, c) {
    if (c == a + b) {
        console.log(c + 'bằng tổng' + a + 'và' + b);
    } else {
        console.log(c + 'không bằng tổng' + a + 'và' + b);
    }
}

/* lab 5 */
check_Grade(78);

function check_Grade(mark) {
    if (mark >= 85) {
        console.log('A');
    } else if (mark >= 70 && mark < 85) {
        console.log('B');
    } else if (mark <= 40 && mark < 70) {
        console.log('C');
    } else {
        console.log('D');
    }
}

/* lab 6 */
check_Divisible_By_3And5_lab6(21);

function check_Divisible_By_3And5_lab6(num) {
    if (num % 3 == 0) {
        if (num % 5 == 0) {
            console.log(num + ' chia hết cho cả 3 và 5');
        } else {
            console.log(num + ' không chia hết cho cả 3 và 5');
        }
    } else {
        console.log(num + ' không chia hết cho cả 3 và 5');
    }
}
