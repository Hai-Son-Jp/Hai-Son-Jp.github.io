const ex1 = (arr) => {
    return arr.map((e, i) => {
        if (i % 2 == 0) {
            return e.toLowerCase();
        }
        return e.toUpperCase();
    });
};
console.log(ex1(['apple', 'banana', 'orange']));

const ex1_1 = (arr) => {
    return arr.map((e, i) => (i % 2 == 0 ? e.toLowerCase() : e.toUpperCase()));
};

console.log(ex1_1(['apple', 'banana', 'orange']));

// Khai báo object user
let user = {
    name: 'Bùi Hiên',
    email: 'hien@techmaster.vn',
    age: 25,
};

// Ví dụ: In ra tất cả các giá trị (value) của lần lượt các thuộc tính (property) của Object user
// C1 : Sử dụng Object.keys
// Lấy ra mảng các keys của object user
let chiaKhoa = Object.keys(user); //Khai báo một biến = Object.keys(tên cua Object)
for (let i = 0; i < chiaKhoa.length; i++) {
    // Duyệt qua mảng các keys để in ra value tương ứng
    console.log(user[chiaKhoa[i]]);
}

// C2: Sử dụng for ... in
for (const key in user) {
    console.log(user[key]);
}
