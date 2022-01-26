w3.slideshow(".slide_show", 3000);
var audio = document.getElementById("audio");
var variable = document.getElementById("sound_icon");

pauseAudio();
function indicator() {
  setTimeout(() => {
    let indicator = document.getElementById("indicator");
    indicator.style.display = "none";
    // playAudio();
  }, 2300);
}
function indicator1() {
  // setTimeout(()=>{
  let indicator = document.getElementById("indicator");
  indicator.style.display = "none";
  playAudio();
  // },2300)
}

const pageFlip = new St.PageFlip(document.getElementById("example"), {
  // options here
  width: screen.width,
  height: screen.height,
  //   size:stretch,
  //   showCover:true,
  //   mobileScrollSupport:false
  flippingTime: 400,
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));
// console.log(pageFlip.getPageCount());
let flag=0;
let a = 1;

pageFlip.on("flip", (e) => {
  console.log(pageFlip.getCurrentPageIndex());
  if(pageFlip.getCurrentPageIndex()==1 && flag==0 && a!=0){
  playAudio();
  flag=1;
  }
  
});
function playAudio() {
  audio.play();
  variable.classList.remove("fa-volume-mute");
  variable.classList.add("fa-volume-up");
}
function pauseAudio() {
  variable.classList.remove("fa-volume-up");
  variable.classList.add("fa-volume-mute");
  audio.pause();
}

variable.addEventListener("click", function () {
  if (a == 1) {
    pauseAudio();
    a = 0;
    // variable.classList.remove("fa-volume-up");
    // variable.classList.add("fa-volume-mute");
  } else {
    playAudio();
    a = 1;
    
  }
});

var countDownDate = new Date("December 25, 2021 15:37:25").getTime();

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

  document.getElementById("day").innerHTML = getlength(d) + d;
  document.getElementById("hours").innerHTML = getlength(h) + h + " :";
  document.getElementById("minutes").innerHTML = getlength(m) + m + " :";
  document.getElementById("seconds").innerHTML = getlength(s) + s;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "EXPIRED";
    document.getElementById("minutes").innerHTML = "EXPIRED";
    document.getElementById("seconds").innerHTML = "EXPIRED";
  }
}, 100);
