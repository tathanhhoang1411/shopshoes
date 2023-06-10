

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