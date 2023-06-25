// bài mau
function subString(string, n) {
    for (let i = 0; i <= string.length - n; i++) {
        console.log('-------------------------------------');
        console.log(i);
        let sub_Str = '';
        for (let j = i; j <= i + n - 1; j++) {
            console.log('-----------', j, sub_Str);
            sub_Str = sub_Str + string[j];
            console.log('++++++++++', j, sub_Str);
        }
        console.log(sub_Str);
    }
}
subString('qwerty', 3);
