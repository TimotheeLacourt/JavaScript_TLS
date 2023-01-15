
"use strict";

let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


function modeSombre() {
    var element = document.body;
    var content = document.getElementById("modeAffichage");
    element.className = "sombre";
}

function modeLumineux() {
    var element = document.body;
    var content = document.getElementById("modeAffichage");
    element.className = "lumineux";
}


let form=document.querySelector('form');


form.addEventListener('submit',function(event){
    event.preventDefault();
    let nom =document.querySelector("#nom").value;
    console.log(nom);
    console.log(nom.length);
    let messageErreur = document.querySelector("#messageErreur");
    if(nom.length < 6) {
        console.log("le nom fais moins de 6 charactère");
        messageErreur.innerHTML = "Format incorrect";
        console.log(messageErreur);
    }
    else{
        console.log('Formulaire envoye');
    }
});


let li=document.querySelectorAll("li");

li.forEach(function(){
    $('tab-active').removeClass('tab-active');
});

let div=document.querySelector("content");

div.forEach(function(){
    $('active').removeClass('active');
});

function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction passe de 0 à 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // calculer l'état courant de l'animation
      let progress = timing(timeFraction);
  
      draw(progress); // dessinez-le
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

//if(test){
//    this.classList.contains('tab-DéveloppementWeb')
//}
//else if(test){
//    instruction
//}
//else{
//    instruction
//}