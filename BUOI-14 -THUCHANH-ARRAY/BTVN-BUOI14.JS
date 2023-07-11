// BÀI 1
// Viết function là mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chử cái.
let nameStudents = ['a Nam', 'b Hoa', 'c Tuấn', 'd Ngọc', 'e Hồng', 'f Sơn'];
function reverseSort(nameStudents) {
    let sortArr = nameStudents.sort().reverse();
    return sortArr;
}
console.log(reverseSort(nameStudents));

// BÀI 2
// viết function đổi số ngẫu nhiên vị trí của các phần tử trong mảng
let shuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
console.log(shuffleArray(shuffle));

// BÀI 3
// Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
let array1 = [1, 7, 3];
let array2 = [1, 2, 4];

function symmetricDifference(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            result.push(array1[i]);
        }
    }
    for (let j = 0; j < array2.length; j++) {
        if (!array1.includes(array2[j])) {
            result.push(array2[j]);
        }
    }
    return result;
}
console.log(symmetricDifference(array1, array2));

// BÀI 4
// Viết function lấy tất cả các phần tử xuất hiện ở cả 2 mảng
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

function getCommonElements(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}

console.log(getCommonElements(arr1, arr2));
