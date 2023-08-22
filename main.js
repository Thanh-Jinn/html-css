/* 

  Cách khai báo biến: 

  var: nguyên thủy 
  let => ES6 ( 2015 )
  const

  => let & const => giam thieu scope (pham vi) cua var
  
  => khi code minh khong nen dung var (scope)


  var: no cho phep minh gan lai;
  - no cho phep minh dinh nghia lai
  no duoc hoiting (dua len dau)

  let & const no khong co hoiting 
  - no khong cho phep minh dinh nghia lai
  let no phep minh gan lai
  const thi khong nhung no cho minh update

*/

// const a = 10;

// a = 1000;

// console.log(a);

/* 
  let & const say no var
*/

// const d = {
//     name: "truong son",
// };

// d.name = " duc thanh";
// d.age = 20;

// console.log(d);

/* 

  Kieu du lieu
    null: biểu thị không tồn tại giá trị (các biến được định nghĩa và được gán giá trị sau đó ta muốn remove giá trị hoặc biến đó thì gán = null )
    undefined:  biểu thị chưa có giá trị (các biến được định nghĩa nhưng chưa được gán giá trị thì undefined)
    number: số (1, 1.2,2434,232.2323)
    string: 'sdfsdfsdf' & "sdfsfsdfsdf"
    array: []
    object: {}
    NaN: nó không phải là số ( 'n' / 10 or 10 / 'm')
*/

// var a = []; /* đây là kiểu số 1 */
// var b = new Array(); /* cách số 2 định nghĩa arr */

/* 
không khuyến cáo  new Array(); : bởi vì nó tạo ra 1 intance và nó chậm hơn cách 1
*/

// var a = [[], []];
/* => [2,4,6] */
/* tinh tong cac phan tu cua 1 array */

// for (let i = 0; i < a.length; i++) {
//     a[i] = a[i] * 2;
// }

// for (let item of a) {
//     item = item.push(2);
// }

// console.log(a);

// console.log(hieu);

// console.log(a[a.length - 1]);
// a = "Array";

// mỗi item nó đều có index nó đếm từ 0 => cứ tăng lên
// độ dài của mảng thì nó đếm từ 1 và tăng lên

// => thằng item cuối cùng của array nó chính bằng độ dài - 1

// reference type tham chieu

/* 
var a= []

[] => lưu trong Ram => có địa chỉ 01123232


*/

// Object {}

let a = {
    name: "sdfsdf",
    age: 18,
    address: "Ha Nam",
};
let b = {};

// a.nameKey;
// for (let key in a) {
//     console.log(a[key]);
// } hiếm như sâm ngọc linh

// {
//     name: "sdfsdf";
//     age: 18;
// }

/* làm sao để kiểm tra kiểu dữ liệu của biên (dataType) */
/* typeof tenbien: kiểm tra kiểu dữ liệu */
/* Để phân biệt 1 array dùng Array.isArray(tenbien arr) */
let d = [1, 2, 4];
// func hay arrr  => gốc bắt nguồn object
// function
/* check d nếu d là array thì in ra số 1 */

let dataUser = [
    {
        name: "Duc Thanh",
        address: "bg",
        diem: 6,
    },
    {
        name: "ts",
        address: "pt",
        diem: 5,
    },
    {
        name: "van",
        address: "hp",
        diem: 3,
    },
    {
        name: "van bip",
        address: "hp",
        diem: 1,
    },
];

/* tim het nhung user co dia chi o hp */

// for (let i = 0; i < dataUser.length; i++) {
//     if (dataUser[i].diem < 7) {
//         console.log(dataUser[i]);
//     }
// }

/* 
    JS đua ngựa 
    bất đồng bộ
*/

/* 
0 cùng thời điểm | bất đồng bộ
1 cùng thời điểm | bất đồng bộ
2 cùng thời điểm | bất đồng bộ
*/

/* thời gian thực thi lâu */
/* bất đồng bộ nó 7 method làm việc với mảng 90% */
