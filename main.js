// ElementCus.classList.add("active");
// ElementCus.classList.remove("active"); /* Có thì bỏ đi không thì thôi */
// ElementCus.classList.replace(
//     "active-11"
// ); /* ghi de <div class="active-11"></div>; */
// ElementCus.classList.toggle(
//     "active"
// ); /* Nếu không có thì nó thêm, nếu có thì bỏ đi */

// const Elements = document.querySelectorAll(".box");

// if (Elements && Elements.length > 0) {
//     Elements.forEach(function (item) {
//         item.addEventListener("click", function (e) {
//             Elements.forEach(function (itemChild) {
//                 if (item !== itemChild) {
//                     handleResetElement(itemChild);
//                 }
//             });
//             e.target.classList.toggle("active");
//         });
//     });
// }

// function handleResetElement(item) {
//     item.classList.remove("active");
// }

// click, dbclick

const Btn = document.querySelector(".btn");
const RenderHtml = document.querySelector(".render-html");

// let BtnSubmit = null;
// let InputElement = null;

// Btn.addEventListener("click", function (e) {
//     if (RenderHtml) {
//         RenderHtml.innerHTML = `
//             <input type="text" class="form-control my-3 input-age" />
//             <button class="btn btn-primary submit">Xác Nhận</button>
//         `;
//         BtnSubmit = document.querySelector(".submit");
//         InputElement = document.querySelector(".input-age");
//     }

//     BtnSubmit.addEventListener("click", function (e) {
//         if (isNaN(InputElement.value)) {
//             alert("Vui lòng nhập đúng!!!");
//             InputElement.value = "";
//             return;
//         }

//         if (InputElement.value >= 18) {
//             alert("đủ tuổi!");
//         } else {
//             alert("Không đủ tuổi!!!");
//         }
//     });
// });

// tương tác với phím : chức năng, dự liệu nhập

/* 
input, textarea
*/

/* 
    change, input, blur

    auto focus
*/

// const InputElement = document.querySelector("#my-input");

// InputElement.addEventListener("change", function (e) {
//     console.log(e.target.value);
// });

// InputElement.addEventListener("input", function (e) {
//     console.log(e.target.value);
// });

// InputElement.addEventListener("blur", function (e) {
//     console.log("blur input");
// });

const InputElements = document.querySelectorAll("input");
const BtnSubmitForm = document.querySelector("#submit");

BtnSubmitForm.addEventListener("click", function (e) {
    let isValid = true;
    for (let i = 0; i < InputElements.length; i++) {
        if (!InputElements[i].value) {
            isValid = false;
            alert(
                "Bạn hãy nhập trường này " +
                    InputElements[i].getAttribute("data-label")
            );
            InputElements[i].focus();
            break;
        }
    }

    if (!isValid) {
        return;
    }

    /* 
    goi du lieu o day
     */

    window.location.href = "/";
});

// let dataMinLength = [5, 8];
// InputElements.forEach(function (element, index) {
//     element.setAttribute("min-length", dataMinLength[index]);
//     element.addEventListener("blur", function (e) {
//         console.log(e.target.value);
//         handleValidate(e.target.value.length, dataMinLength[index]);
//     });
// });

function handleValidate(value, length) {
    if (value < length) {
        alert("Bạn hãy nhập trường này với số kỹ tự lớn hơn " + length);
    }
}

window.addEventListener("keydown", function (e) {
    if (e.ctrlKey === true && e.keyCode === 82) {
        e.preventDefault();
    }

    if (e.ctrlKey === true && e.keyCode === 88) {
        window.location.reload();
    }
});

/* 
    Sự kiện mặc định
    e.preventDefault(); Nó sẽ loại bỏ hành vi mặc định của các thẻ
*/

const AElement = document.querySelector("a");
AElement.addEventListener("click", function (e) {
    e.preventDefault();
});

/* 

    LocalStorage
    JSON (JavaScript Object Notation )
    Promise (Bat dong bo)
    Fetch ( lay du lieu tu ben ngoai)


    Thoi Tiet
    
    Đầy đủ 
    App thương mại điện tử có sử dụng 1 chút ajax


    
*/
