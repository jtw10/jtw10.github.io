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

// scroll animation for arrow
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('.arrow').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#p2').offset().top
        }, 500);
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.navcenter a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top - 5 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navcenter ul li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }

    function ScrollView(element) {
        var win = $(window);
        var winTop = win.scrollTop();
        var winBottom = winTop + win.height();
        var elementTop = element.offset().top;
        var elementBottom = elementTop + element.height();

        if ((elementBottom <= winBottom) && (elementTop >= winTop)) {
            return true;
        }
        return false;
    }
});


$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                $('li a').removeClass('active');
                $(this).addClass('active')
                return false;
            }
        }
    });
});