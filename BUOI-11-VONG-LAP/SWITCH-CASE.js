/* switch lab 1 */
/* Tạo biến day có giá trị từ 0 -> 6, là các ngày trong tuần Trong đó: (0 - chủ nhật, 1 - thứ 2, …, 6 -
Thứ 7) Sử dụng switch-case để in ra ngày tương ứng với giá trị của biến day
Ví dụ: day = 6 --> “Hôm nay là thứ 7” */
function day(num) {
    let day = '';
    switch (num) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        default:
            day = 'incorrect';
            break;
    }
    return day;
}
console.log(day(3));

/* lab 2 */
/* Tạo biến month có giá trị từ 1 -> 12, là các tháng trong năm
Sử dụng switch-case để in ra mùa tương ứng với giá trị của biến month
● 1, 2, 3 : Mùa xuân
● 4, 5, 6 : Mùa hạ
● 7, 8, 9 : Mùa thu
● 10, 11, 12 : Mùa đông */
function month(num2) {
    let month = '';
    switch (num2) {
        case 1:
        case 2:
        case 3:
            month = 'spring';
            break;
        case 4:
        case 5:
        case 6:
            month = 'summer';
            break;
        case 7:
        case 8:
        case 9:
            month = 'autumn';
            break;
        case 10:
        case 11:
        case 12:
            month = 'Winter';
            break;
        default:
            month = 'incorrect';
            break;
    }
    return month;
}
console.log(month(2));
