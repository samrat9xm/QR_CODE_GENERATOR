const imgBox = document.querySelector(".imgBox");
const qrImg = document.querySelector(".qrImg");
const data = document.querySelector(".data");
const btn = document.querySelector("button");

function qr() {
    if (data.value.trim() != '') {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data.value;

        imgBox.classList.add("showImg");
    } else {
        data.classList.add("error");
        setTimeout(function () {
            data.classList.remove("error");
        }, 1000);
    }
}

btn.addEventListener("click", qr);


data.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        qr();

    }
});
