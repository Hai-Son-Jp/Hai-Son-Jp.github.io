function subString(string, m) {
    for (let i = 0; i <= string.length - m; i++) {
        console.log(i);
        let sub_Str = '';
        for (let j = i; j <= i + m - 1; j++) {
            sub_Str = sub_Str + string[j];
        }
    }
    return sub_Str;
}
function checkstringExist(string, subString) {
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
}
console.log(subString('i love you', 'you'));
