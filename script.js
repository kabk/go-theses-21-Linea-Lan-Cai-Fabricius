$(document).ready(function(){
  $("#Mother_click").click(function(){
    $("#Mother_text").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#Abstract_click").click(function(){
    $("#Abstract_text").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#Introduction_click").click(function(){
    $("#Introduction_text").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#Overview_click").click(function(){
    $("#Overview_text").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#Governmental_click").click(function(){
    $("#Governmental_text").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#Sociocultural_click").click(function(){
    $("#Sociocultural_text").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#Conclusion_click").click(function(){
    $("#Conclusion_text").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#Biography_click").click(function(){
    $("#Biography_click").slideToggle("slow");
  });
});

let startOffset = 0;
let startOffsetB = 55;

const pageMarquee = () => {
  requestAnimationFrame(pageMarquee)
  textPath.setAttributeNS(null,"startOffset",startOffset+"%");
  textPathB.setAttributeNS(null,"startOffset",startOffsetB+"%");
  if (startOffset >= 50) startOffset = 0;
  if (startOffsetB >= 50) startOffsetB = 0;
  startOffset+= .07
  startOffsetB+= .07
}

pageMarquee()

var button = document.querySelector('.button'),
    icon   = document.querySelector('.button__inner'),
    audio  = document.querySelector('audio'),
    play   = false;

button.addEventListener('click', function() {
  if (!play) {
    audio.play();
    icon.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    audio.pause();
    icon.innerHTML = '<i class="fa fa-play"></i>';
  }

  audio.addEventListener("timeupdate", function() {
      var currentTime = audio.currentTime;
      var duration = audio.duration;
      var progress = document.querySelector('.progress__inner');

      progress.style.width = (currentTime +.25)/duration*100+'%';
  });

  play = !play;
}, false);
