/* bài 1 */
function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(calculateFactorial(5));

/* bài 2 */
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]; //lấy từng ký tự trong chuỗi str ở vị trí i
    }
    for (let i = 0; i < str.length; i++) {
        reverseStr = str[i] + reversedStr; //for xuôi
    }
    return reversedStr;
}
console.log(reverseString('hello'));

/* bài 3 */
function translate(countryCode) {
    let translate = '';
    switch (countryCode) {
        case 'VN':
            translate = 'Xin Chào';
            break;
        case 'EN':
            translate = 'Hello';
            break;
        default:
            translate = '404!';
            break;
    }
    return translate;
}
console.log(translate('VN'));

/* bài 4 */
function cutString(text) {
    if (text.length > 10) {
        text = text.slice(0, 10) + '...'; //Ta sử dụng phương thức slice để cắt chuỗi
    }
    return text;
}
console.log(cutString('đây là lớp PHP'));

/* bài 5 */
function writeNumber(startNum, endNum) {
    for (let i = startNum; i <= endNum; i++) {
        if (i % 2 === 0) {
            document.write("<div style='color: red;'>" + String(i) + '</div>');
        } else {
            document.write("<div style='color: green;'>" + String(i) + '</div>');
        }
    }
}

writeNumber(1, 10);

// bài mau
function subString(string, n) {
    for (let i = 0; i <= string.length - n + 1; i++) {
        let subStr = '';
        for (let j = i; j <= i + n - 1; j++) {
            subStr = subStr = string[j];
        }
    }
}
subString('qwerty', 2);
