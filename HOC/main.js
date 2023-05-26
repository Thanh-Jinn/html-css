// querySelector => lấy ra một cái rì đấy từ file html ( document )
// alert thong bao

const btn = document.querySelector(".nut-an");
const app = document.querySelector(".app");

btn.onclick = () => {
    app.innerHTML = `<div class="item-notify">
    <div class="notify-left">
        <i class="fa-solid fa-circle-check"></i>
    </div>
    <div class="notify-center">
        <h3>Thông báo của bạn</h3>
        <p>
            Chúc mừng bạn đã tải ảnh lên thành công vào chúc bạn một
            ngày tốt lành
        </p>
    </div>
    <div class="notify-right">
        <i class="fa-solid fa-xmark"></i>
    </div>
</div>`;
};
