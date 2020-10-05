//For the hamburger menu, adds responsive to the class 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');
    
    burger.addEventListener('click', () => {
        //toggles nav
        nav.classList.toggle('nav-active');
        //Animates links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation ='';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// slideshow carousel script 
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var modal = document.getElementById("planpacific-container");
var modal2 = document.getElementsByClassName("match-container");
var modal3 = document.getElementsByClassName("website-container");


// When the user clicks the button, open the modal 
function ppcFunc() {
  modal.style.display = "flex";
}
function daMatchFunc() {
  modal2.style.display = "block";
}
function webFunc() {
  modal3.style.display = "block";
}

/* When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if(event.target == modal2){
    modal2.style.display = "none";
  }
  else if(event.target == modal3){
    modal3.style.display = "none";
  }
}