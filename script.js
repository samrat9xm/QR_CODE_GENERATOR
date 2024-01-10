const imgBox = document.querySelector(".imgBox");
const qrImg = document.querySelector(".qrImg");
const data = document.querySelector(".data");
const btn = document.querySelector("button");


btn.addEventListener("click", function () {
    if (data.value != 0 || data.value != '') {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data.value;
        imgBox.classList.add(".showImg");
    }
});
