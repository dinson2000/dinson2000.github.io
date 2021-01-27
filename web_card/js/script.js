function play() {
    var audio = document.getElementById("audio");
    audio.play();
    window.onscroll = function() {}; 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; 
    window.scrollTo(scrollLeft, scrollTop); 


  }
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
