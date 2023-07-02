function subString(string, n) {
    for (let i = 0; i <= string.length - n; i++) {
        sub_Str = '';
        for (let j = i; j < i + n; j++) {
            sub_Str = sub_Str + string[j];
        }
    }
    return sub_Str;
}
console.log(subString('i love', 3)); // in ra các chuỗi con có độ dài 3
/* function checkstringExist(string, subString) {
    let ans = false;
    for (let i = 0; i <= string.length - subString.length; i++) {
        let sub_Str = '';
        for (let j = i; j <= i + subString.length - 1; j++) {
            sub_Str = sub_Str + string[j];
        }
        console.log(sub_Str);
        if (sub_Str === subString) {
            ans = true;
            break;
        }
    }
    return ans;
} */
