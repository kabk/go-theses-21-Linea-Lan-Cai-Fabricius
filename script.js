
$(document).ready(function(){
  $("#zero-dropdown").click(function(){
    $("#zero-content").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#one-dropdown").click(function(){
    $("#one-content").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#two-dropdown").click(function(){
    $("#two-content").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#three-dropdown").click(function(){
    $("#three-content").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#four-dropdown").click(function(){
    $("#four-content").slideToggle("slow");
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
  startOffset+= .02
  startOffsetB+= .02
}

pageMarquee()
