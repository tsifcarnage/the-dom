// SELECTEURS
// document.querySelector("h4").style.background = "yellow";
// mettre le doc querry dans une variable
// const baliseHTML = document.querySelector("h4");selectionne css

// **CLICK EVENT**
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2"); //pas besoin de mettre # psk getelemid cherche de suite un id
const response = document.querySelector("p");

const fondChanger = document.querySelector(".wallpaper");
//console.log(btn1, btn2);toujours mettre log pour debugger avant de coder la suite
questionContainer.style.borderRadius = "20px"; // mettre du border-radius sur le container
questionContainer.addEventListener("click", () => {
  //questionContainer.style.background = "red";
  //questionContainer.classList.add("question-clicked"); //ajouter une classe cree en css
  questionContainer.classList.toggle("question-clicked"); //toggle=si la classe est lier tu lenleve si elle ny est pas tu le rajoute
}); //declenche un event (action, function)
btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
  response.style.borderRadius = "10px";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
  response.style.borderRadius = "10px";
});

let isOriginalBackground = true;

function changeBackground() {
  //qui permet de changer de bck en reclick
  let monCorps = document.querySelector("body");
  if (isOriginalBackground) {
    monCorps.style.background = "url('../img/fond2.jpg') center / cover ";
    monCorps.style.transition = "0.5s";
  } else {
    monCorps.style.background = "url('../img/fond.jpg') center / cover ";
    monCorps.style.transition = "0.5s";
  }
  isOriginalBackground = !isOriginalBackground;
}

fondChanger.addEventListener("click", changeBackground);

/* <div> >  #div > .class > balise HTML */

//------------------------------------------
// Mouse Event
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px"; //injecter le e(event qui enregistre mouv)position sourissur la souris
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)";
}); //si on clique enfoncer ca se grossi
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
}); //si on lache ca se retreci

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(46, 68, 141, 0.445)"; //quand on survole dessus avec la souris
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "#000000a1";
}); //quand on sort du survolage

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(5deg)";
});
response.addEventListener("mouseout", () => {
  response.style.transform = "rotate(0deg)";
});

//--------------------------------------------------
//KEY PRESS event
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const audio = new Audio("../music/dark_december.mp3"); //cree un objet audio
document.addEventListener("keypress", (e) => {
  key.textContent = e.key; //injecter du texte
  if (e.key === "p") {
    ring();
  }
});
const ring = () => {
  audio.currentTime = 0; //reinitialiser laudio a zero
  audio.play();
};
document.addEventListener("keyup", (e) => {
  if (e.key === "s") {
    audio.pause();
  }
});
//--------------------------------------------------
//Scroll event
const noobs = document.querySelector("nav");
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (window.scrollY > 120) {
    noobs.style.top = 0;
  } else {
    noobs.style.top = "-50px";
  }
});
