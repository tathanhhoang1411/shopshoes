
var body = document.querySelector("body");
// var prev_arrow = document.querySelector(".prev-arrow");
// var next_arrow = document.querySelector(".next-arrow");
var img_banner = document.querySelector(".img-banner");
var img_slide = document.querySelector(".img-slide");

var btn_SU = document.querySelector(".btn-SU");
var btn_SU_icon = document.querySelector(".btn-SU>i");
var btn_SI = document.querySelector(".btn-SI");
var btn_SI_icon = document.querySelector(".btn-SI>i");
var form_SU = document.querySelector(".formSU");
var form_SI = document.querySelector(".formSI");
var subcontent_halfrow = document.querySelector(".half-row>ul>li");
// //tab
// var tabs_img = document.querySelectorAll(".img-tab");
// //bar-status
// var bar_status = document.querySelector(".bar-status");


var Sum_imgs_banner = 1;//tổng số lượng ảnh đặt làm slider= Sum_imgs_slider+1
var Sum_imgs_slide = 2;
// //tạo mảng ảnh để khi người dùng bỏ ảnh có format tên file 
// //thì sẽ lấy ảnh đó làm slider


var imgs_banner = [];
var index_banner = 0;
var imgs_slide = [];
var index_slide = 0;
// //tạo biến time
var time = 3000;
// //mở web là chạy ảnh trên slider
body.onload = loadImgs_banner();
body.onload = loadImgs_slide();




function loadImgs_banner() {
    for (let i = 0; i <= Sum_imgs_banner; i++) {
        imgs_banner[i] = new Image();
        imgs_banner[i].src = "asset/imgs/banner" + i + ".jpg";


    }
}
function loadImgs_slide() {
    for (let i = 0; i <= Sum_imgs_slide; i++) {
        imgs_slide[i] = new Image();
        imgs_slide[i].src = "asset/imgs/shoe" + i + ".jpg";


    }
}

// function checkEndStatus() {

//     bar_status.classList.add("end");
//     setInterval(function () {
//         bar_status.classList.toggle("end");
//     }, time)


// }


// prev_arrow.onclick = prev;
// function prev() {

//     if (index >= 1) {


//         index--;
//         img_slider.src = imgs[index].src;

//         var a = index;
//         var b = index;
//         if (a >= 0) {

//             tabs_img[1].src = imgs[++b].src;
//             if (a > 0) {
//                 tabs_img[0].src = imgs[--a].src;
//             }
//         }
//     }
// }
// next_arrow.onclick = next;
// function next() {

//     if (index < imgs.length - 1) {
//         index++;

//         img_slider.src = imgs[index].src;
//     }
//     var a = index;
//     var b = index;
//     if (b < imgs.length) {

//         tabs_img[0].src = imgs[--a].src;
//         if (b < imgs.length - 1) {
//             tabs_img[1].src = imgs[++b].src;
//         }
//     }
// }

// //slider  chạy theo thời gian là biến time
function time_next_banner() {

    setInterval(function () {

        if (index_banner < imgs_banner.length - 1) {
            {

                index_banner++;
                img_banner.src = imgs_banner[index_banner].src;



            }

        } else {

            index_banner = 0;

            img_banner.src = imgs_banner[index_banner].src;

        }

    }, time)


}
time_next_banner();

/**/
function time_next_slide() {

    setInterval(function () {

        if (index_slide < imgs_slide.length - 1) {
            {

                index_slide++;
                img_slide.src = imgs_slide[index_slide].src;




            }

        } else {

            index_slide = 0;

            img_slide.src = imgs_slide[index_slide].src;



        }

    }, time)


}
time_next_slide();


function drop_down() {
    var drop_downs = document.querySelectorAll(".navbar li")

    drop_downs.forEach(function (drop_down) {
        //nếu thẻ nav li có ít nhất 1 element con thì hãy tạo nút down
        if (drop_down.childElementCount > 1) {

            drop_down.children[0].classList.add("has-child");
        }
    }

    )
}
drop_down();

/* */
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

show_text_slide();


