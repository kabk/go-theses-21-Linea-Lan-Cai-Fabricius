
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
  startOffset+= .02
  startOffsetB+= .02
}

pageMarquee()
