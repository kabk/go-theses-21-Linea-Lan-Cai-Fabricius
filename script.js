
$(document).ready(function(){
  $("#Abstract-dropdown").click(function(){
    $("#Abstract-content").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#Introduction-dropdown").click(function(){
    $("#Introduction-content").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#Overview-dropdown").click(function(){
    $("#Overview-content").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#Governmental-dropdown").click(function(){
    $("#Governmental-content").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#Sociocultural-dropdown").click(function(){
    $("#Sociocultural-content").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#Conclusion-dropdown").click(function(){
    $("#Conclusion-content").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#Biography-dropdown").click(function(){
    $("#Biography-content").slideToggle("slow");
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
