function disableScroll() {
  document.body.classList.add("stop-scrolling");
}
function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}
setTimeout(() => {
  window.scrollTo(0, 0);

}, 300);
disableScroll();

function play() {
  var audio = document.getElementById("audio");
  var best_g = document.getElementById("back_g");
  best_g.style.display = "block";

  var visible = document.getElementById("sound_icon");
  visible.classList.remove("sound_button_none");
  visible.classList.add("sound_button_visible");
  audio.play();
  var scroll = document.getElementById("body");
  scroll.classList.remove("touch");
  enableScroll();
}


var scroll = document.getElementById("body");
scroll.classList.add("touch")
let audio1 = document.getElementById("audio");

var variable = document.getElementById("sound_icon");
let a = 1;
variable.addEventListener('click', function () {
  if (a == 1) {
    audio1.pause();
    a = 0;
    variable.classList.remove("fa-volume-up");
    variable.classList.add("fa-volume-mute");
  }
  else {
    audio1.play();
    a = 1;
    variable.classList.remove("fa-volume-mute");
    variable.classList.add("fa-volume-up");
  }

})


let box = document.getElementById('box');

let main_div = document.getElementById('main_div'),
  btn = document.getElementById('btn');

btn.addEventListener('click', function () {

  if (main_div.classList.contains('hidden')) {
    main_div.classList.remove('hidden');
    setTimeout(function () {
      main_div.classList.remove('visuallyhidden');
    }, 6000);
  } else {
    main_div.classList.add('visuallyhidden');
    main_div.addEventListener('transitionend', function (e) {
      main_div.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }


  box.classList.toggle('visible');
}, false);

var countDownDate = new Date("Mar 25, 2021 15:37:25").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);

  function getlength(number) {
    number = number.toString().length;
    if (number == 1) {
      return "0";
    } else {
      return "";

    }
  }

  document.getElementById('day').innerHTML = getlength(d) + d;
  document.getElementById('hours').innerHTML = getlength(h) + h + " :";
  document.getElementById('minutes').innerHTML = getlength(m) + m + " :";
  document.getElementById('seconds').innerHTML = getlength(s) + s;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "EXPIRED";
    document.getElementById("minutes").innerHTML = "EXPIRED";
    document.getElementById("seconds").innerHTML = "EXPIRED";
  }
}, 100);
