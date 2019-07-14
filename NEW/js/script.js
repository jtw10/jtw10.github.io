// declaring variables
var hamburger = document.querySelector(".hamburger");

// open navbar
function nav_open() {
    document.getElementById("nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("hamburger-shell").style.transition = ".5s";
    document.getElementById("hamburger-shell").style.left = "275px";
}

// close navbar
function nav_close() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("hamburger-shell").style.transition = "1.5s";
    document.getElementById("hamburger-shell").style.left = "";
    document.getElementById("hamburger-shell").style.right = "calc(100% - 100px)";
}

// responsive navbar based on window width
window.onresize = resize;

function resize() {
    // resets hamburger to inactive every time browser is resized
    hamburger.className = "hamburger hamburger--elastic";
    // console.log("resize event detected!");
    if (window.innerWidth > 975) {
        nav_open();
        document.getElementById("hamburger-shell").style.left = "3423500px";
        // console.log(hamburger.className);
    }
    if (window.innerWidth < 975) {
        nav_close();
    }
}

// hamburger open/close on click
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    console.log(hamburger.className)
    nav_open();
    if (hamburger.className == "hamburger hamburger--elastic") {
        nav_close();
    }
});

// scroll animation 
$(document).ready(function () {
    $('.arrow').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#p2').offset().top
        }, 500);
    });

});