//hình 1
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        document.write('* ');
    }
    document.write('<br>');
}

//hình 2
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let y = 1; y <= 5; y++) {
        if (i === 1 || i === 5 || y === 1 || y === 5) {
            row += '*';
        } else {
            row += '&nbsp;&nbsp;';
        }
    }
    document.write(row + '<br>');
}
//hình 3
for (let i = 1; i <= 7; i++) {
    let row = '';
    for (let y = 1; y <= 7; y++) {
        if (y === i || y === 8 - i) {
            row += '*';
        } else {
            row += '&nbsp;&nbsp;';
        }
    }
    document.write(row + '<br>');
}

//hình 4
for (let i = 1; i <= 5; i++) {
    for (let y = 1; y <= i; y++) {
        document.write('* ');
    }
    document.write('<br>');
}

/* 
function reverseString(s) {
    let result = '';
    for (let i = s.length - 1; i >= 0; i--) {
        console.log(i);
        result = result + s[i];
    }
    return result;
}
console.log(reverseString('ABCDEF'));

function reverseString1(str) {
    let result1 = '';
    for (let i = 0; i <= str.length - 1; i++) {
        console.log(i);
        result1 = str[i] + result1;
    }
    return result1;
}
console.log(reverseString1('hello')); */
