// Sources:
//   - https://www.lenastanley.com/2020/09/animate-text-on-scroll-svg-tutorial.html
//   - https://stackoverflow.com/questions/36017742/javascript-using-requestanimationframe-on-scroll-event

const textPath = document.querySelector("#textPath");

const a = document.documentElement,
  b = document.body,
  st = "scrollTop",
  sh = "scrollHeight",
  startOffset = 0;

const offsetOnScroll = (percent, startOffset) =>
  textPath.setAttribute("startOffset", percent * 10 + startOffset);

textPath.setAttribute("startOffset", startOffset);

document.addEventListener("scroll", (event) => {
  let percent = ((a[st] || b[st]) / ((a[sh] || b[sh]) - a.clientHeight)) * 100;
  window.requestAnimationFrame(() => offsetOnScroll(percent * +1, startOffset));
});


/* number two; */
const textPathB = document.querySelector("#textPathB");
const aB = document.documentElement,
    bB = document.body,
    stB = "scrollTop",
    shB = "scrollHeight",
    startOffsetB = 0;
const offsetOnScrollB = (percent, startOffsetB) =>
    textPathB.setAttribute("startOffset", percent * 10 + startOffset);
    textPathB.setAttribute("startOffset", startOffset);
document.addEventListener("scroll", (event) => {
    let percent = ((aB[stB] || bB[stB]) / ((aB[shB] || bB[shB]) - aB.clientHeight)) * 100;
window.requestAnimationFrame(() => offsetOnScrollB(percent * -1, startOffset));
});



// SlideToggle
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

// let startOffset = 0;
// let startOffsetB = 55;
//
// const pageMarquee = () => {
//   requestAnimationFrame(pageMarquee)
//   textPath.setAttributeNS(null,"startOffset",startOffset+"%");
//   textPathB.setAttributeNS(null,"startOffset",startOffsetB+"%");
//   if (startOffset >= 50) startOffset = 0;
//   if (startOffsetB >= 50) startOffsetB = 0;
//   startOffset+= .07
//   startOffsetB+= .07
// }

// pageMarquee()const boxes = document.querySelectorAll('.box');
// const boxes = document.querySelectorAll('.box');
//
// window.addEventListener('scroll', checkBoxes);
//
// checkBoxes(); // shows initial box(es)
//
// function checkBoxes() {
// const triggerBottom = (window.innerHeight / 5 * 4);
//
// boxes.forEach(box => {
//   const boxTop = box.getBoundingClientRect().top;
//
//   if(boxTop < triggerBottom) {
//     box.classList.add('show');
//   } else {
//     box.classList.remove('show');
//   }
// })
// }

const sounds = ["Solen er så rød mor"];
const buttons = document.getElementById("buttons");

const stopSounds = () => {
  sounds.forEach((sound) => {
    const currentSound = document.getElementById(sound);
    currentSound.pause();
    currentSound.currentTime = 0;
  });
};

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });
  buttons.appendChild(btn);
});
