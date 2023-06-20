/* bài 1 */
function checkDivisible(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log('FizzBuzz');
    } else if (n % 3 === 0) {
        console.log('Fizz');
    } else if (n % 5 === 0) {
        console.log('Buzz');
    }
}
checkDivisible(15);

/* bài 2 */
function solveMath(a, b) {
    if (a === 0) {
        if (b === 0) {
            console.log('phương trình vô số nghiệm');
        } else {
            console.log('phương trình vô nghiệm');
        }
    } else {
        console.log('phương trình có nghiệm x = ' + -b / a);
    }
}
solveMath(12, 1);

/*  bài 3 */
function solveMath2(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                console.log('Phương trình vô số nghiệm');
            } else {
                console.log('Phương trình vô nghiệm');
            }
        } else {
            console.log('Phương trình có nghiệm x = ' + -c / b);
        }
    } else {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            console.log('Phương trình vô nghiệm');
        } else if (delta === 0) {
            console.log('Phương trình có nghiệm kép x1 = x2 = ' + -b / (2 * a));
        } else {
            var x1 = (-b - Math.sqrt(delta)) / (2 * a);
            var x2 = (-b + Math.sqrt(delta)) / (2 * a);
            console.log('Phương trình có hai nghiệm phân biệt x1 = ' + x1 + ', x2 = ' + x2);
        }
    }
}
solveMath2(13, 12, 23);
/* bải 4 */
function calculateBMI(weight, height) {
    let BMI = weight / (height * height);
    console.log(BMI);
    return BMI;
}
calculateBMI(86, 168);

/*  bài 5 */
function convertCToF(c) {
    let f = (c * 9) / 5 + 32;
    console.log(f);
    return f;
}
convertCToF(23);
