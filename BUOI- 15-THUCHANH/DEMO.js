const grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' },
];
//Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
function Tim_Nu(grades) {
    let girls = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex === 'F') {
            girls.push(grades[i]);
        }
    }
    return girls;
}

console.log(Tim_Nu(grades));
