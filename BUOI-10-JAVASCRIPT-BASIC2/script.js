/* câu 1 */
function findMaxNumber(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    console.log(max + ' là số lớn nhất');
}
findMaxNumber(2, 4, 39);

//CÁCH KHÁC
function findMaxNumber(a, b, c) {
    if (a > b && a > c) {
        console.log(a + ' là số lớn nhất ');
    } else if (b > a && b > c) {
        console.log(b + ' là số lớn nhất ');
    } else if (c > a && c > b) {
        console.log(c + ' là số lớn nhất');
    }
}
findMaxNumber(2, 4, 29);

/* câu 2 */
function checkChar(char) {
    if (/[A-Z]/.test(char)) {
        console.log(char + ' là chữ cái in hoa');
    } else if (/[a-z]/.test(char)) {
        console.log(char + ' là chữ cái in thường');
    } else {
        console.log(char + ' là một ký tự đặc biệt');
    }
}
checkChar('p'); // A là chữ cái in hoa

/* includes */
function checkCharacterType(character) {
    if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(character)) {
        console.log(character + ' là chữ cái in hoa.');
    } else if ('abcdefghijklmnopqrstuvwxyz'.includes(character)) {
        console.log(character + ' là chữ cái in thường.');
    } else {
        console.log(character + ' là một ký tự đặc biệt.');
    }
}
// Sử dụng chương tình để kiểm tra ký tự
let inputCharacter = 'A';
checkCharacterType(inputCharacter);

/* index OF */
function checkCharacterType(character) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

    if (uppercaseLetters.indexOf(character) !== -1) {
        console.log(character + ' là chữ cái in hoa.');
    } else if (lowercaseLetters.indexOf(character) !== -1) {
        console.log(character + ' là chữ cái in thường.');
    } else {
        console.log(character + ' là một ký tự đặc biệt.');
    }
}
// Sử dụng chương trình để kiểm tra ký tự
let inputCharacter = 'A';
checkCharacterType(inputCharacter);

/* câu 3 */
function checkSameSign(num1, num2) {
    if ((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0)) {
        console.log(num1 + ' và ' + num2 + ' cùng dấu');
    } else {
        console.log(num1 + ' và ' + num2 + ' khác dấu');
    }
}
checkSameSign(21, 12);

/*câu 4 */
//cách 1
function checkYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + ' là năm nhuận');
    } else {
        console.log(year + ' không phải là năm nhuận');
    }
}

checkYear(2035);
// cách 2
function checkYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

let inputYear = 2054;
if (checkYear(inputYear)) {
    console.log(inputYear + ' là năm nhuận.');
} else {
    console.log(inputYear + ' không phải là năm nhuận.');
}

/* câu 5 */
function checkTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        console.log('Đây là một tam giác đều.');
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log('Đây là một tam giác cân.');
    } else if (
        side1 * side1 + side2 * side2 === side3 * side3 ||
        side1 * side1 + side3 * side3 === side2 * side2 ||
        side2 * side2 + side3 * side3 === side1 * side1
    ) {
        console.log('Đây là một tam giác vuông.');
    } else {
        console.log('Đây là một tam giác thường.');
    }
}

let sideA = 3;
let sideB = 4;
let sideC = 5;
checkTriangleType(sideA, sideB, sideC);

/* câu 6 */
function checkDrivingAge(age) {
    const drivingAge = 18; // Tuổi tối thiểu để được lái xe

    if (age >= drivingAge) {
        console.log('Người này đủ tuổi để lái xe.');
    } else {
        console.log('Người này chưa đủ tuổi để lái xe.');
    }
}

let inputAge = 20;
checkDrivingAge(inputAge);
