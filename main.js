import JSONARR from "./data.json" assert { type: "json" };

/* 
    Learn
        - LocalStorage
        - JSON (JavaScript Object Notation )
        - Promise (Bat dong bo)
        - Fetch ( lay du lieu tu ben ngoai) 
         * // json()  Convert từ Json  => JavaScript

    Project
        - Thoi Tiet
        - App thương mại điện tử có sử dụng 1 chút ajax
    
*/

// localStorage : Lưu dữ liệu giống như object nó có key & value

// làm sao để tạo nó?

// localStorage

// localStorage.getItem("tên-key") lấy thông tin key
// localStorage.setItem('IsLogin', 'true')
// localStorage.setItem()
// console.log(localStorage.getItem('IsLogin') === 'true')

/* 
    .Net (C#), Java sping , Lavrel ....
*/

// JSON là một chuỗi khá đặc biệt ở chỗ nó có thể biến đổi từ kiểu dữ liệu String (Json) thành JS và từ JS qua JSon
//  Từ Js qua Json nó là trình tự mã hóa (Encode)  [1,2,3]  => '[1,2,3] ' syntax:  JSON.stringify(arr)
// Từ Json thành Js nó là giải mã (decode) '[1,2,3]' => [1,2,3] : syntax: JSON.parse()

/* 
    Quy tắc đặt tên:
        - Phải để trong dấu nháy đôi
        - Thằng phần tử cuối cùng không được có dấu phẩy (,)
        - số vẫn là số
        - null vẫn là null
*/

// let arr = '[1,2,3]'

// console.log(typeof JSON.stringify(arr))

// console.log(JSON.parse(arr))

// user: null

// let userFake ={
//     id: 1,
//     name: 'ts'
// }
// localStorage.setItem('user' , JSON.stringify(userFake))
// let userCheck = localStorage.getItem('user')
// let userParer = JSON.parse(userCheck)

// console.log( userParer.name )

// let DataFake = JSON.stringify(JSONARR)

// localStorage.setItem('blogs', JSON.stringify(JSON.parse(DataFake).data))

// const blogsCache  = JSON.parse(localStorage.getItem('blogs'))

// let Element = document.querySelector('.render-blogs')

// if(Element && blogsCache) {
//     let name = ''
//     blogsCache.forEach(function(item) {
//        name +=  `<h3>Tên Bài viết: ${item.title}</h3>`
//     })
//     Element.innerHTML  = name
// }

if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
) {
    localStorage.setItem("count", JSON.stringify(0));
}

let isLogin = JSON.parse(localStorage.getItem("isLogin"));
let count = JSON.parse(localStorage.getItem("count")) || 0;

if (!isLogin && typeof isLogin !== "boolean") {
    localStorage.setItem("isLogin", JSON.stringify(false));
    window.location.href = "/login.html";
}

if (!JSON.parse(isLogin)) {
    count += 1;
    localStorage.setItem("count", JSON.stringify(count));
    if (count === 1) {
        window.location.href = "/login.html";
    }
}

const SubmitBtn = document.querySelector("#submit");

SubmitBtn.addEventListener("click", function (e) {
    /* Validate roi...... */
    localStorage.setItem("isLogin", JSON.stringify(true));
    window.location.href = "/";
});
