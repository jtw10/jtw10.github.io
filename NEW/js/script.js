// declaring variables
var hamburger = document.querySelector(".hamburger");
var left_title = document.getElementById("titleleft");
var right_title = document.getElementById("titleright");
var navlinks = document.getElementsByClassName("nav-links");
var navcount = navlinks.count;
var quotes = [
  "It does not matter how slowly you go so long as you do not stop.",
  "If you don't stop going, you'll get there eventually.",
  "You miss all the shots you don't take, so take as many shots as you can!",
  "If you keep walking forward, you'll surprise yourself with how far you can get.",
  "The best feeling is when can you tell yourself 'I learned a lot today'.",
  "The man who moves a mountain begins by carrying away small stones.",
  "Push yourself, because no one else is going to do it for you.",
  "It’s going to be hard, but hard means that it is not impossible.",
  "If you shoot first and determine the target later, you'll never miss your shot.",
  "Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.",
  "Education is learning what you didn’t even know you didn’t know."
];

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
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  console.log(hamburger.className);
  nav_open();
  if (hamburger.className == "hamburger hamburger--elastic") {
    nav_close();
  }
});

// close navbar on mobile after clicking link
/*
function mobilenav() {
  var nav1 = document.getElementById("nav1");
  var nav2 = document.getElementById("nav2");
  var nav3 = document.getElementById("nav3");
  var nav4 = document.getElementById("nav4");

  function navmobile() {
    nav_close();
    hamburger.className = "hamburger hamburger--elastic";
  }

  if (window.innerWidth < 550) {
    console.log("mobile window");
    nav1.addEventListener("click", navmobile);
    nav2.addEventListener("click", navmobile);
    nav3.addEventListener("click", navmobile);
    nav4.addEventListener("click", navmobile);
  }
}
*/

// scroll animation for arrow
$(document).ready(function() {
  $(document).on("scroll", onScroll);
  $(".arrow").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $("#p2").offset().top
      },
      500
    );
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".navcenter a").each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top - 5 <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".navcenter ul li a").removeClass("active");
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

    if (elementBottom <= winBottom && elementTop >= winTop) {
      return true;
    }
    return false;
  }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        $("li a").removeClass("active");
        $(this).addClass("active");
        return false;
      }
    }
  });
});

// changing hero image every 8 seconds
function run(interval, frames) {
  var bgcounter = 2;

  function func() {
    document.getElementById("p1").style.backgroundImage =
      "url(/images/bg" + bgcounter + ".jpg)";
    bgcounter++;
    if (bgcounter === frames) {
      bgcounter = 1;
    }
  }

  var swap = window.setInterval(func, interval);
}

// scroll back to top
$(window).scroll(function() {
  if ($(this).scrollTop() >= 75) {
    $("#return-to-top").fadeIn(300);
  } else {
    $("#return-to-top").fadeOut(300);
  }
});
$("#return-to-top").click(function() {
  $("body,html").animate(
    {
      scrollTop: 0
    },
    500
  );
});

// parallax scroll effect
// removed

// share quote of the day
document.addEventListener("DOMContentLoaded", function(event) {
  // Uses sharer.js by https://ellisonleao.github.io/sharer.js/#twitter
  var url = window.location.href;
  var title = document.title;
  var subject = "An inspirational quote for you!";
  var via = "yourTwitterUsername";

  // whatsapp
  $("#share-wa")
    .attr("data-url", url)
    .attr("data-title", title)
    .attr("data-sharer", "whatsapp");
  // facebook
  $("#share-fb")
    .attr("data-url", url)
    .attr("data-sharer", "facebook");
  // twitter
  $("#share-tw")
    .attr("data-url", url)
    .attr("data-title", title)
    .attr("data-via", via)
    .attr("data-sharer", "twitter");
  // linkedin
  $("#share-li")
    .attr("data-url", url)
    .attr("data-sharer", "linkedin");
  // google plus
  $("#share-gp")
    .attr("data-url", url)
    .attr("data-title", title)
    .attr("data-sharer", "googleplus");
  // email
  $("#share-em")
    .attr("data-url", url)
    .attr("data-title", title)
    .attr("data-subject", subject)
    .attr("data-sharer", "email");

  // prevent basic click behavior
  $(".sharer button").click(function() {
    event.preventDefault();
  });

  // only show whatsapp on mobile devices
  var isMobile = false; //initiate as false
  // device detection
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    isMobile = true;
  }
  // hiding whatsapp icon based on device
  /*
  if (isMobile == false) {
    $("#share-wa").hide();
  }
  */
});

// quote randomizer
function quoterandomizer() {
  var randomquote = Math.floor(Math.random() * quotes.length);
  document.getElementById("textquote").innerHTML = quotes[randomquote];
}

// slider for about section
$(".slider__item").on("mouseover", function() {
  $(".slider__item").removeClass("active");
  $(this).addClass("active");
});
$(".slider__item").on("mouseout", function() {
  $(".slider__item").removeClass("active");
  $(this).addClass("");
});

// using mouseenter/leave to avoid conflict mouseover/out with child elements
$(".slider__item").on("mouseenter", function() {
  $("#titleleft").fadeOut(750);
  $("#titleright").fadeOut(750);
});

$(".slider__item").on("mouseleave", function() {
  $("#titleleft").fadeIn();
  $("#titleright").fadeIn();
});

// project section
