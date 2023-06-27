function testLoop(str, n) {
    for (let i = 0; i <= 10; i += 2) {
        console.log(i);
        // xử lý chuỗi
        if (str[i] === 'a') {
            console.log("Đã tìm thấy ký tự 'a' ở vị trí " + i);
        }
        // xử lý số
        if (i === n) {
            console.log('Đã đạt đến số ' + n);
        }
    }
}
testLoop('qwerrtt', 2);
