// BÀI 1
function checkStringExist(string, sub_string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === sub_string[i]) {
            return true;
        }
    }
    return false;
}
console.log(checkStringExist('hello world', 'world')); // true
console.log(checkStringExist('good morning', 'evening')); // false

// BÀI 2
function shortenString(string, num_character, appendStr) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (i <= num_character) {
            result += string[i];
        } else {
            break;
        }
    }
    return result + appendStr;
}
console.log(shortenString('xin chào các bạn', 8, '.....'));

// BÀI 3
function isSymmetricString(string) {
    string = string.toLowerCase().replace(/\s/g, '');
    // Loại bỏ khoảng trắng và đổi tất cả các ký tự thành chữ thường
    let symmetricString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        symmetricString = symmetricString + string[i];
    }
    if (symmetricString === string) {
        return true;
    } else {
        return false;
    }
}
console.log(isSymmetricString('race car'));

// cách 2: tham khảo trên mạng
function isSymmetricString1(string) {
    string = string.toLowerCase().replace(/\s/g, '');

    // So sánh ký tự ở vị trí đầu tiên với ký tự cuối cùng của chuỗi
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            //so sánh giữ các vị trí index 0 và 8-0 ; 1 và 8-1; 2 và 8-2; .......
            return false;
        }
    }
    return true;
}
console.log(isSymmetricString1('race car'));

// BÀI 4
function sapXepSoNguyen(n) {
    let arr = Array.from(String(n), Number);
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            let temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
            break;
        }
    }

    let result = parseInt(arr.join(''));
    return result;
}
console.log(sapXepSoNguyen(53751));
console.log(sapXepSoNguyen(14350));
console.log(sapXepSoNguyen(203950));

// BẢI 5
function convertToSnakeCase(str) {
    str = str.toLowerCase();
    str = str.trim().replace(/\s+/g, '_');
    return str;
}
console.log(convertToSnakeCase('HELLO world'));
