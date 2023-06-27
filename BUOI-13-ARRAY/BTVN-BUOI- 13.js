// Bài 1: Tìm số lớn nhất trong mảng
let number = [1, 5, 6, 8, 3, 23, 65, 87];

function findMaxNumber(arr) {
    return Math.max(...arr);
}

let maxNumber = findMaxNumber(number);
console.log(maxNumber);

// Bài 2: Tìm số nhỏ nhất trong mảng
function findMinNumber(arr) {
    return Math.min(...arr);
}
let minNumber = findMinNumber(number);
console.log(minNumber);

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
let number1 = [4, 2, 5, 6, 2, 7];
function getRemainderArray(arr) {
    return arr.map((num) => num % 2);
}
console.log(getRemainderArray(number1));

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function repeatString(str) {
    return str.repeat(10);
}
console.log(repeatString('Hello World!'));

// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatStringWithDash(str) {
    return new Array(10).fill(str).join(' - ');
}
console.log(repeatStringWithDash('Hello World!'));
