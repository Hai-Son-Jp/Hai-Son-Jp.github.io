// bài 1
console.log(' ------------------------- bài 1 ');

function checkElementExist(arr, value) {
    return arr.includes(value);
}

console.log(checkElementExist([1, 2, 3, 4, 5], 5));
console.log(checkElementExist([1, 2, 3, 4, 5], 6));

// bài 2
console.log(' ------------------------- bài 2');

function getElementGreater(arr, value) {
    return arr.filter((num) => num > value);
}

console.log(getElementGreater([1, 2, 3, 4, 5], 3));
console.log(getElementGreater([1, 2, 3, 4, 5], 5));

// bài 3
console.log(' ------------------------- bài 3');

function randomHexCode() {
    let letters = '0123456789ABCDEF';
    let hexCode = '#';

    for (let i = 0; i < 6; i++) {
        hexCode += letters[Math.floor(Math.random() * 16)];
    }

    return hexCode;
}

console.log(randomHexCode());
console.log(randomHexCode());

// bài 4
console.log(' ------------------------- bài 4');

function randomRgbCode() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

console.log(randomRgbCode());

// forEach
console.log(' ------------------------- forEach');

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.forEach((ele) => {
    if (ele % 3 === 0) {
        console.log(ele);
    }
});
