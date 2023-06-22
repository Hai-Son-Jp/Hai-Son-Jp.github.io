/* Loop lab 1 */
/* Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm
có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau
bởi dấu gạch ngang */
// Hàm repeatString nhận vào 3 tham số: chuỗi str cần lặp lại, số lần lặp lại repeatNum và ký tự nối joinChar
function repeatString(str, repeatNum, Num, joinChar) {
    let result = '';
    for (let i = 1; i <= repeatNum; i++) {
        if (i >= 1) Num = Num += 1; // num + 1 sau một vòng
        result = result + Num + joinChar; //Nếu i >= 1 sẽ gán joinChar vào đầu result
        result += str; //result sau khi đã gán joinChar sẽ + thêm 1 result bắt chạy lại vòng lặp nếu có.
    }
    return result; // trả về result đã tính toán
}
console.log(repeatString('ハイソン', 4, 0, ':')); // In kết quả: qwerty-qwerty-qwerty-qwerty

/* while loop lab 1 */
function repeatString2(str2, repeatNum2, joinChar2) {
    let result2 = '';
    let i = 1;

    while (i <= repeatNum2) {
        if (i > 1) result2 = result2 + joinChar2;
        result2 += str2;
        i++;
    }
    return result2;
}
console.log(repeatString2('abc', 3, '+'));
