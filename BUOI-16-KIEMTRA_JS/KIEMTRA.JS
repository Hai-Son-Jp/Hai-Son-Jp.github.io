// BÀi 1: Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
function tim_so_lon_thu_2(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] < max && arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}
let arr = [10, 5, 8, 20, 15, 30];
let soLon_thu2 = tim_so_lon_thu_2(arr);
console.log('Số lớn thứ 2 trong mảng là:', soLon_thu2);
/* Giải thích
-Hàm nhận một tham số arr, đại diện cho mảng các số từ đó muốn tìm số lớn thứ hai.
-Khởi tạo biến max với giá trị ban đầu là -Infinity, đại diện cho số lớn nhất đã tìm thấy.
-Khởi tạo biến secondMax với giá trị ban đầu là -Infinity, đại diện cho số lớn thứ hai đã tìm thấy.
-Sử dụng vòng lặp for để duyệt qua từng số trong mảng arr.
-Kiểm tra nếu số hiện tại arr[i] lớn hơn max, thì cập nhật giá trị của secondMax thành max, và cập nhật giá trị của max thành arr[i].
-Trường hợp không thỏa điều kiện trên, kiểm tra nếu số hiện tại arr[i] nhỏ hơn max và lớn hơn secondMax, thì cập nhật giá trị của secondMax thành arr[i].
-Sau khi duyệt qua toàn bộ mảng, secondMax sẽ chứa số lớn thứ hai trong mảng.
-Trả về giá trị của secondMax.
-Cuối cùng, một mảng arr được khởi tạo và truyền vào hàm tim_so_lon_thu_2 để tìm số lớn thứ hai. Kết quả được gán vào biến soLon_thu2 và hiển thị trên console.
*/

//Bài 2: Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất.
function tim_str_dai_nhat(arr1) {
    let maxLength = 0;
    let longestStr = [];
    for (let i = 0; i < arr1.length; i++) {
        let currentLength = arr1[i].length;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].length === maxLength) {
            longestStr.push(arr1[i]);
        }
    }
    return longestStr;
}
let arr1 = ['son', 'hoang', 'hong', 'nguyen', 'ly'];
let longestStrings = tim_str_dai_nhat(arr1);
console.log('Các chuỗi có độ dài lớn nhất là:', longestStrings);
/* Gài thích
-Hàm nhận một tham số arr1, đại diện cho mảng các chuỗi từ đó muốn tìm các chuỗi có độ dài lớn nhất.
-Khởi tạo biến maxLength với giá trị ban đầu là 0, đại diện cho độ dài lớn nhất đã tìm thấy.
-Khởi tạo một mảng rỗng longestStr để lưu trữ các chuỗi có độ dài lớn nhất.
-Sử dụng vòng lặp for để duyệt qua từng chuỗi trong mảng arr1.
-Lấy độ dài của chuỗi hiện tại arr1[i] bằng cách sử dụng thuộc tính length và gán vào biến currentLength.
-Kiểm tra nếu currentLength lớn hơn maxLength, thì cập nhật giá trị của maxLength thành currentLength.
-Sau khi duyệt qua toàn bộ mảng, giá trị maxLength sẽ là độ dài lớn nhất trong mảng arr1.
-Sử dụng vòng lặp for để duyệt qua từng chuỗi trong mảng arr1 lần nữa.
-Kiểm tra nếu độ dài của chuỗi hiện tại arr1[i] bằng maxLength, thì thêm chuỗi đó vào mảng longestStr bằng cách sử dụng longestStr.push(arr1[i]).
-Trả về mảng longestStr chứa các chuỗi có độ dài lớn nhất.
*/

// Bài 3: Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
function getRandomElement(arr2) {
    let randomIndex = Math.floor(Math.random() * arr2.length);
    return arr2[randomIndex];
}
let arr2 = ['son', 'hoang', 'hong', 'nguyen', 'ly'];
let radom_elem = getRandomElement(arr2);
console.log('Phần tử ngẫu nhiên là:', radom_elem);
/* Giải thích
-Hàm nhận một tham số arr2, đại diện cho mảng từ đó muốn lấy phần tử ngẫu nhiên.
-Sử dụng hàm Math.random() để tạo một số ngẫu nhiên từ 0 đến 1 (không bao gồm 1).
-Nhân số ngẫu nhiên trên với độ dài của mảng arr2 bằng cách sử dụng arr2.length. Kết quả là một số ngẫu nhiên nằm trong khoảng từ 0 đến (độ dài mảng - 1).
-Sử dụng hàm Math.floor() để làm tròn số ngẫu nhiên xuống thành một số nguyên.
-Gán số nguyên được làm tròn vào biến randomIndex, đại diện cho chỉ số ngẫu nhiên trong mảng arr2.
-Trả về phần tử tại chỉ số ngẫu nhiên randomIndex trong mảng arr2 bằng cách sử dụng arr2[randomIndex].
*/

//Bài 4: Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó.
function findCommonElements(arr3, arr4) {
    let commonElements = [];
    for (let i = 0; i < arr3.length; i++) {
        if (arr4.includes(arr3[i])) {
            commonElements.push(arr3[i]);
        }
    }
    return commonElements;
}
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [4, 5, 6, 7, 8, 1];
let commonElements = findCommonElements(arr3, arr4);
console.log('Các phần tử chung là:', commonElements);
/* Giải thích
-Hàm nhận hai tham số arr3 và arr4, đại diện cho hai mảng cần tìm các phần tử chung.
-Tạo một mảng rỗng commonElements để lưu trữ các phần tử chung.
-Sử dụng vòng lặp for để duyệt qua từng phần tử trong mảng arr3.
-Kiểm tra xem phần tử hiện tại của arr3 có tồn tại trong arr4 bằng cách sử dụng phương thức includes(). 
Nếu có, tức là phần tử đó là phần tử chung, ta thêm nó vào mảng commonElements bằng cách sử dụng commonElements.push(arr3[i]).
-Sau khi duyệt qua toàn bộ mảng arr3, mảng commonElements sẽ chứa các phần tử chung giữa arr3 và arr4.
-Trả về mảng commonElements chứa các phần tử chung.
*/
//Bài 5: Viết function truyền vào 2 tham số (tham khảo trên mạng)
function getTime(time, x) {
    let time_Spit = time.split(':');
    let hours = parseInt(time_Spit[0]);
    let minutes = parseInt(time_Spit[1]);
    let seconds = parseInt(time_Spit[2]);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds + x;
    hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor((totalSeconds % 3600) / 60);
    seconds = totalSeconds % 60;
    let result =
        hours.toString().padStart(2, '0') +
        ':' +
        minutes.toString().padStart(2, '0') +
        ':' +
        seconds.toString().padStart(2, '0');
    return result;
}
let time = '12:34:56';
let x = 120;
let newTime = getTime(time, x);

console.log(newTime);

/* Giải thích
-Hàm nhận hai tham số: time là thời gian đầu vào dưới dạng chuỗi, và x là một giá trị số nguyên đại diện cho số giây được thêm vào thời gian ban đầu.
-Sử dụng phương thức split(':') để tách chuỗi time thành một mảng con chứa giờ, phút và giây.
-Chuyển đổi giờ, phút và giây từ chuỗi sang số nguyên bằng cách sử dụng parseInt().
-Tính tổng số giây của thời gian ban đầu và x bằng cách thực hiện phép tính: hours * 3600 + minutes * 60 + seconds + x.
-Tính toán lại giờ, phút và giây cho thời gian mới dựa trên tổng số giây tính được:
    -hours = Math.floor(totalSeconds / 3600) tính số giờ mới.
    -minutes = Math.floor((totalSeconds % 3600) / 60) tính số phút mới.
    -seconds = totalSeconds % 60 tính số giây mới.
    -Sử dụng phương thức padStart() để đảm bảo rằng các giờ, phút và giây đều có đúng hai chữ số bằng cách thêm các ký tự '0' vào phía trước nếu cần.
-Tạo một chuỗi result bằng cách nối các giờ, phút và giây lại với nhau, cách nhau bởi dấu ':'.
-Trả về chuỗi result là thời gian mới được tính toán.
*/

//Bài 6:  Cho mảng users như sau:
users = [
    {
        name: 'Bùi Công Sơn',
        age: 30,
        isStatus: true,
    },
    {
        name: 'Nguyễn Thu Hằng',
        age: 27,
        isStatus: false,
    },
    {
        name: 'Phạm Văn Dũng',
        age: 20,
        isStatus: false,
    },
];
//Function 1 : Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function filterUser(users) {
    let result = [];
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.age > 25 && user.isStatus === true) {
            result.push(user);
        }
    }
    return result;
}
console.log(filterUser(users));
/* Giải thích
-Đầu tiên, tạo một mảng rỗng result để lưu trữ các đối tượng user thỏa mãn điều kiện.
-Sử dụng vòng lặp for để duyệt qua từng đối tượng user trong mảng users.
-Kiểm tra các điều kiện: user.age > 25 và user.isStatus === true.
-Nếu user thỏa mãn cả hai điều kiện trên, thêm user đó vào mảng result bằng cách sử dụng result.push(user).
-Sau khi duyệt qua toàn bộ mảng, trả về mảng result chứa các user thỏa mãn điều kiện. 
*/

//Function 2: Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function sortUsersByAge(users) {
    users.sort(function (a, b) {
        return a.age - b.age;
    });
    return users;
}
console.log(sortUsersByAge(users));
/* Giải thích
-Sử dụng phương thức sort() trên mảng users để sắp xếp các đối tượng user theo thuộc tính age tăng dần.
-Trong phương thức sort(), sử dụng một hàm so sánh để xác định cách sắp xếp. Trong trường hợp này, hàm so sánh nhận vào hai đối tượng a và b, và trả về một số âm, số dương hoặc 0 dựa trên quy tắc:
-Nếu a.age nhỏ hơn b.age, trả về số âm.
-Nếu a.age lớn hơn b.age, trả về số dương.
-Nếu a.age bằng b.age, trả về 0.
-Kết quả là mảng users đã được sắp xếp theo age tăng dần.
-Trả về mảng users đã được sắp xếp.
*/

//Bài 7: Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
function count(Str) {
    let result = {}; // object rỗng để lưu trữ số lần xuất hiện của mỗi phần tử
    for (let i = 0; i < Str.length; i++) {
        let element = Str[i];
        if (result[element]) {
            console.log(result[element]);
            result[element]++;
        } else {
            result[element] = 1;
        }
    }
    return result;
}
let Str = ['one', 'two', 'three', 'one', 'one', 'three'];
let result = count(Str);
console.log(result);
/* Giải thích:
-Đầu tiên, tạo một đối tượng rỗng result để lưu trữ số lần xuất hiện của mỗi phần tử trong mảng.
-Sử dụng vòng lặp for để duyệt qua từng phần tử trong mảng arr.
-Đối với mỗi phần tử element trong mảng:
-Kiểm tra xem element đã là một thuộc tính trong đối tượng result hay chưa bằng cách sử dụng if (result[element]).
-Nếu element đã tồn tại trong result, tăng giá trị của thuộc tính element lên 1 bằng cách sử dụng result[element]++.
-Nếu element chưa tồn tại trong result, tạo mới thuộc tính element với giá trị ban đầu là 1 bằng cách sử dụng result[element] = 1.
-Sau khi duyệt qua toàn bộ mảng, đối tượng result sẽ chứa thông tin về số lần xuất hiện của mỗi phần tử trong mảng.
 */
