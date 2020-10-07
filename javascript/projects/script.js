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
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.6}s`;
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
const logos = document.querySelectorAll('.logo-icon')

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
    logos.forEach((logo, index)=>{
      logo.style.animation = `logoFade 1s ease forwards ${index / 3 + 0.7}s, logoJump 4s ${index * 1.1 + 3}s infinite`;
    });

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
var modal2 = document.getElementById("match-container");
var modal3 = document.getElementById("website-container");
var closeModal = document.getElementById("close");


// When the user clicks the button, open the modal 
function ppcFunc() {
  modal.style.animation = `openModal 0.2s forwards`;
  closeModal.style.animation = `xAppear 0.2s forwards`;
}
function daMatchFunc() {
  modal2.style.animation = `openModal 0.2s forwards`;
  closeModal.style.animation = `xAppear 0.2s forwards`;
}
function webFunc() {
  modal3.style.animation = `openModal 0.2s forwards`;
  closeModal.style.animation = `xAppear 0.2s forwards`;
}

closeModal.onclick = function closeAll(){
  modal.style.animation = `closeModal 0.2s forwards`;
  modal2.style.animation = `closeModal 0.2s forwards`;
  modal3.style.animation = `closeModal 0.2s forwards`;
  closeModal.style.animation = `xDisappear 0.2s forwards`;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.animation = `closeModal 0.2s forwards`;
    closeModal.style.animation = `xDisappear 0.2s forwards`;
  }
  else if(event.target == modal2){
    modal2.style.animation = `closeModal 0.2s forwards`;
    closeModal.style.animation = `xDisappear 0.2s forwards`;
  }
  else if(event.target == modal3){
    modal3.style.animation = `closeModal 0.2s forwards`;
    closeModal.style.animation = `xDisappear 0.2s forwards`;
  }
}