// syntax TenArr.map(nhan mot funtion(item, index, this)) this là mảng ban đầu
/* 
    map nó duyệt qua từng phần tử của mảng đặc biệt ở chỗ là nó trả về 1 mảng mới và nó không sửa đổi mảng cũ
    và mảng mới có độ dài bằng mảng cũ nhưng return cái gì thì phần tử mảng mới là cái đó
    trong SPA render dữ liệu sử dụng 100% map
*/

/* cộng thêm 2 điểm cho tất cả user và lưu vào mảng mới  */

const newArr = dataUser.map(function (item, index) {
    return `
    <table>
        <div>điểm của học sinh: ${item.diem}</div>
    </table>
    `;
});

console.log(newArr);

var number = [50, 10, 5];
const newArr2 = number.map(function (item, index) {
    return item;
});

newArr2[0] = 100;
console.log(newArr2);
console.log(number);
