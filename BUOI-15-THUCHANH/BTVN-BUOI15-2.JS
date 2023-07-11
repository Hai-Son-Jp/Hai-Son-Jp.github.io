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

//Viết function tính thứ hạng trung bình của cả lớp
function trungBinh_Lop(grades) {
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i].grade;
    }
    return total / grades.length;
}
//Viết function tính thứ hạng trung bình của nam trong lớp
function trungBinh_Nam(grades) {
    let total = 0;
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex === 'M') {
            total += grades[i].grade;
            count++;
        }
    }
    return total / count;
}

//Viết function tính thứ hạng trung bình của Nữ trong lớp
function trungBinh_Nu(grades) {
    let total = 0;
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex === 'F') {
            total += grades[i].grade;
            count++;
        }
    }
    return total / count;
}

//Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
function timSo1_Nam(grades) {
    let Grade_caoNhat = 0;
    let Grade_caoNhat_Nam = '';
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex === 'M' && grades[i].grade > Grade_caoNhat) {
            Grade_caoNhat = grades[i].grade;
            Grade_caoNhat_Nam = grades[i];
        }
    }
    return Grade_caoNhat_Nam;
}

//Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
function timSo1_Nu(grades) {
    let Grade_caoNhat2 = 0;
    let Grade_caoNhat_Nu = '';
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex === 'F' && grades[i].grade > Grade_caoNhat2) {
            Grade_caoNhat2 = grades[i].grade;
            Grade_caoNhat_Nu = grades[i];
        }
    }
    return Grade_caoNhat_Nu;
}

//Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
function timThapNhat_Nam(grades) {
    let Grade_thapNhat = Infinity;
    let Grade_thapNhat_Nam = '';
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex === 'M' && grades[i].grade < Grade_thapNhat) {
            Grade_thapNhat = grades[i].grade;
            Grade_thapNhat_Nam = grades[i];
        }
    }
    return Grade_thapNhat_Nam;
}

//Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
function timThapNhat_Nu(grades) {
    let Grade_thapNhat2 = Infinity;
    let Grade_thapNhat_Nu = '';
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex === 'F' && grades[i].grade < Grade_thapNhat2) {
            Grade_thapNhat2 = grades[i].grade;
            Grade_thapNhat_Nu = grades[i];
        }
    }
    return Grade_thapNhat_Nu;
}

//Viết function thứ hạng cao nhất của cả lớp
function So1_Lop(grades) {
    let Grade_Caonhat_all = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].grade > Grade_Caonhat_all) {
            Grade_Caonhat_all = grades[i].grade;
        }
    }
    return Grade_Caonhat_all;
}

//Viết function thứ hạng thấp nhất của cả lớp
function thapNhat_Lop(grades) {
    let Grade_thapNhat_all = Infinity;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].grade < Grade_thapNhat_all) {
            Grade_thapNhat_all = grades[i].grade;
        }
    }
    return Grade_thapNhat_all;
}

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

//Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sortName_tangDan(grades) {
    return grades.sort((a, b) => a.name.localeCompare(b.name));
}

//Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
function sortGrades_giamDan(grades) {
    return grades.sort((a, b) => b.grade - a.grade);
}

//Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
function tim_Nu_J(grades) {
    let Nu_with_J = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex === 'F' && grades[i].name.startsWith('J')) {
            Nu_with_J.push(grades[i]);
        }
    }
    return Nu_with_J;
}

//Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
function layTop5SinhVienCaoNhat(grades) {
    const sortedGrades = grades.sort((a, b) => b.grade - a.grade);
    return sortedGrades.slice(0, 5);
}
