var btn_close_popup = document.querySelector(".btn-close-box")
btn_close_popup.onclick = function () {
    var popup = document.querySelector(".popup")
    popup.classList.add("close-popup");
}
function show_text_slide() {

    var text_slide = document.querySelector(".text-slide");
    text_slide.classList.add("show-text-slide");
    setInterval(function () {
        text_slide.classList.toggle("show-text-slide");
    }, time)
}

show_text_slide()




btn_SU.onclick = function () {
    btn_SU_icon.classList.toggle("color");
    btn_SI_icon.classList.remove("color");

    subcontent_halfrow.classList.add("hidden");
    form_SU.classList.toggle("hidden");
    form_SI.classList.add("hidden");

}
btn_SI.onclick = function () {
    btn_SI_icon.classList.toggle("color");
    btn_SU_icon.classList.remove("color");

    subcontent_halfrow.classList.add("hidden");
    form_SI.classList.toggle("hidden");
    form_SU.classList.add("hidden");

}