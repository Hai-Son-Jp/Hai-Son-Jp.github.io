//FOR
for (let i = 0; i < 5; i++) {
    console.log(i); // do something
}
/* Sử dụng vòng lặp for khi biết được số lần lặp cụ thể
 hoặc cần duyệt qua các phần tử trong một mảng hay chuỗi. */
function reverseString(s) {
    let result = '';
    for (let i = s.length - 1; i >= 0; i--) {
        //vòng lặp đếm ngược, dùng để điếm string
        result = result + s[i];
    }
    return result;
}
console.log(reverseString('dang hai son'));

//WHILE

let i = 0;
while (i < 5) {
    console.log(i); // do something
    i++;
}
/* Sử dụng vòng lặp while khi không biết được số lần lặp cụ thể
 và muốn lặp cho đến khi một điều kiện nào đó không còn đúng. */

//DO...WHILE

let i = 0;
do {
    console.log(i); // do something
    i++;
} while (i < 5);
/* Sử dụng vòng lặp do while khi muốn đảm bảo rằng một đoạn code được thực thi ít nhất một lần
 trước khi kiểm tra điều kiện. */
