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

// let dataUser = [
//     {
//         name: "Duc Thanh",
//         address: "bg",
//         diem: 6,
//     },
//     {
//         name: "ts",
//         address: "pt",
//         diem: 5,
//     },
//     {
//         name: "van",
//         address: "hp",
//         diem: 3,
//     },
//     {
//         name: "van bip",
//         address: "hp",
//         diem: 1,
//     },
// ];

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

/* map */
/* this cái mảng ban đầu tenArr */
/* syntax : tenArr.map(item, index, this) */

/* Funtion */

/*
 syntax 
 c1:function TenHam() {} : decre... nó có hoisting
 c2: dùng từ khóa khai báo biến như var , let, const TenHam = function () {}

 cách thực thi:   TenHam()

*/

// const Sum = function () {
//     console.log("ham chay");
// };

// Sum();

/* định nghĩa hàm những bên trong nó gọi là đối số

return

*/
function Sum(a, b) {
    let c = {
        tong: a + b,
    };

    let d = a + b; // [tho]

    return c;
}

/* Gọi hàm những bên trong nó gọi là tham số  */
// console.log(Sum(1, 2));

let sum2 = Sum;

// for (let i = 0; i < 1000; i++) {
//     console.log(sum2(1, 2));
// }

// let tong = sum2(1, 2);
// tong.age = 10;
// tong.tong = 20;

// console.log(tong);
/* clousaure : là một biến được định nghĩa ở trong 1 hàm nhưng mình vẫn có thể sửa giá trị nó được gán ngay cả khi cái hàm chạy song và biến nó bị chết đi*/
// console.log(sum2(1, 2));

/* 

[định nghĩa] => vị trí vào sum2
mỗi lần chạy nó tạo ra 1 [hộp] không tham chiếu ra bên ngoài private trừ reference type

function là Object đặc biệt

*/

var arr = [1, 2, 4, 50];
var arrTwo = [1, 2, 4, 500];
/* viết 1 hàm tính tổng các phần từ của mảng */
/* let s = 0;  */ /* perfomance */

// sum = null;

if (typeof sum === "function") {
    // console.log(sum(arr));
}

function sum(array) {
    let s = 0;
    array.push(100);
    for (var i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
}

// console.log(sum(arrTwo));
/* build banr thiet tang tinh tai su dung OOP */

let dataUser = [
    {
        name: "ts",
        address: "bg",
        diem: 6,
        uuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    },
    {
        name: "ts",
        address: "pt",
        diem: 5,
        uuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb5d",
    },
    {
        name: "van",
        address: "hp",
        diem: 3,
        uuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb4d",
    },
    {
        name: "van bip",
        address: "hp",
        diem: 1,
        uuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb3d",
    },
];

// let UserDetail = dataUser.find(function (item, index) {
//     if (item.uuid === "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb5dd") {
//         return item;
//     }
// });

let UserDetail = dataUser.filter(function (item, index) {
    if (item.name === "ts") {
        return item;
    }
});

// console.log(UserDetail);

/* 
 2. Find => Duyệt qua tất cả các phần tử của mảng và khi nó tìm được 1 thằng thỏa mãn điều kiện thì dừng không lặp nữa
  nó trả 1 item của mảng nếu điều kiện đúng sai thì trả về undefined

  3.Filter => Duyệt qua tất cả các phần tử của mảng nhưng nó về tất cả những thằng thỏa mãn điều kiện và nó lưu vào 1 mảng mới
  nếu không thằng nào thỏa mã thì là []
*/

/* 
   1. Map
   2. Find => nó trả 1 item của mảng nếu điều kiện đúng sai thì trả về null
   3. Filter
   7. forEach (no async)
   4. Reduce:
   6. findIndex
   5. Some

   => nó đều duyệt qua các phần tử của mảng

*/
/* syntax TenArr.map(nhan mot funtion(item, index, this)) this là mảng ban đầu */
/* 
    map nó duyệt qua từng phần tử của mảng đặc biệt ở chỗ là nó trả về 1 mảng mới và nó không sửa đổi mảng cũ
    và mảng mới có độ dài bằng mảng cũ nhưng return cái gì thì phần tử mảng mới là cái đó
    trong SPA render dữ liệu sử dụng 100% map
*/

/* cộng thêm 2 điểm cho tất cả user và lưu vào mảng mới  */

// const newArr = dataUser.map(function (item, index) {
//     return `
//     <table>
//         <div>điểm của học sinh: ${item.diem}</div>
//     </table>
//     `;
// });

// console.log(newArr);

// var number = [50, 10, 5];
// const newArr2 = number.map(function (item, index) {
//     return item;
// });

// newArr2[0] = 100;
// console.log(newArr2);
// console.log(number);

const Blogs = [
    {
        id: 1,
        img: "dsfdsf",
        title: "HTML & CSS",
        contentHTML: "<h1>sdfsdf</h1>",
        contentMarkdown: "# sdfsdf",
    },
    {
        id: 2,
        title: "HTML & CSS 1",
        img: "dsfdsf",
        contentHTML: "<h1>sdfsdf</h1>",
        contentMarkdown: "# sdfsdf",
    },
    {
        id: 3,
        title: "HTML & CSS 2",
        img: "dsfdsf",
        contentHTML: "<h1>sdfsdf</h1>",
        contentMarkdown: "# sdfsdf",
    },
];

// const ID = window.location.href.split(0, 1);

let ID = 3;
const BlogDetail = Blogs.find(function (item) {
    if (item?.id === ID) {
        return item;
    }
});

// console.log(BlogDetail);

let numberArr = [1, 2, 3, 5, 6, 7, 4, 5, 6, 4]; /* [2,4,6,10...] */

/*  

    THỏa mãn điều kiện thì dừng luôn
    Nó để tìm index của item trong 1 arr và nếu 
    tìm thấy nó sẽ trả về chỉ mục của cái item đó
    không tìm thấy trả về  -1

*/

let HungGiaTri = numberArr.findIndex(function (item, index) {
    if (item === 5) {
        return true;
    } else {
        return false;
    }
});

// console.log(HungGiaTri);

/* 

forEach: Nó Duyệt qua tất cả các phần tử của mảng nhưng nó không trả về cái gì cả: thay cho for thường bất đồng bộ

*/

numberArr.forEach(function (item, index) {
    // console.log(item);
});

let tong = numberArr.reduce(function (initialValue, item) {
    return initialValue + item;
}, 0);
/* 
    initialValue.push(item * 2);
    return initialValue; /* return cái gì thì  initialValue từ lần 2 nó là cái đó */

// console.log(tong);

/* 

làm sao để từ lần 2 nó vẫn là [item]

*/

/*  
    FinIndex:

    THỏa mãn điều kiện thì dừng luôn
    Nó để tìm index của item trong 1 arr và nếu 
    tìm thấy nó sẽ trả về chỉ mục của cái item đó
    không tìm thấy trả về  -1

    let HungGiaTri = numberArr.findIndex(function (item, index) {
        if (item === 5) {
            return true;
        } else {
            return false;
        }
    });

*/

let arrCore = [1, 2, 3, 1, 23, 5, 6, 7, 4, 5, 6]; /* [1,2,3,23,5,6,7,4] */
let ArrNew = [];

arrCore.forEach(function (item, index) {
    let indexSearh = ArrNew.findIndex(function (itemChild) {
        if (itemChild === item) {
            return true;
        } else {
            return false;
        }
    });

    if (indexSearh === -1) {
        ArrNew.push(item);
    }
});

let ArrayNewReduce = arrCore.reduce(function (initialValue, item) {
    let indexSearch = initialValue.findIndex(function (child) {
        if (child === item) {
            return true;
        } else {
            return false;
        }
    });

    if (indexSearch === -1) {
        initialValue.push(item);
    }

    return initialValue;
}, []);

// console.log("ArrayNewReduce :", ArrayNewReduce);
// console.log("ArrNew :", ArrNew);

/* 

    Some Duyệt qua từng phần tử của mảng và trả về 1 giá trị boolearn
    THỏa mãn điều kiện thì dừng luôn
    Mục đích là tìm 1 phần tử xem là có tồn trị TRONG 1 MẢNG HAY KHÔNG

*/

let arrCoreTwo = [1, 2, 3, 1, 23, 5, 6, 7, 4, 5, 6];

let GiaTRiSOme = arrCoreTwo.some(function (item) {
    return item === 100;
});

if (GiaTRiSOme === true) {
    console.log("Tồn tại");
} else {
    console.log("Khong ton tai");
}

/* 


like || or || option => ORM

giday : Server : ORM like 

*/

/* toán tử , %,+-* , == & === */
/* DOM document object model */
/* Jquery  */
/* Code Con Du An Kia  */
