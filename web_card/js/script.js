function play() {
    let audio = document.getElementById("audio");
    var visible = document.getElementById("sound_icon");
    visible.classList.remove("sound_button_none");
    visible.classList.add("sound_button_visible");
    audio.play();
    window.onscroll = function() {}; 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; 
    window.scrollTo(scrollLeft, scrollTop); 
    
    
  }
  var variable=document.getElementById("sound_icon");
  variable.addEventListener('click',function(){
   
    audio.pause();
    variable.classList.remove("fa-volume-up");
    variable.classList.add("fa-volume-mute");
  })  

  scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 

 
      window.onscroll = function() { 
          window.scrollTo(0, 0); 
      }; 


  let box = document.getElementById('box');

  let main_div=document.getElementById('main_div'),
  btn=document.getElementById('btn');

  btn.addEventListener('click', function () {
  
    if (main_div.classList.contains('hidden')) {
      main_div.classList.remove('hidden');
      setTimeout(function () {
        main_div.classList.remove('visuallyhidden');
      }, 20);
    } else {
      main_div.classList.add('visuallyhidden');    
      main_div.addEventListener('transitionend', function(e) {
        main_div.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }

   
box.classList.toggle('visible');
  }, false);
