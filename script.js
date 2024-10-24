// portfolio slider 
var swiper = new Swiper(".mySlide", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
breakpoints: {

200: {
slidesPerView: 1,
},

567: {
slidesPerView: 2,
},
992: {
slidesPerView: 3,
},
1000: {
slidesPerView: 4,
},
},
});


// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const background = document.querySelector('.hero');
    const offset = window.pageYOffset;
    background.style.backgroundPositionY = offset * 0.5 + 'px';
});

// declare header, navbar, menu, navLink, and scrollToBtn 
let header = document.querySelector(".header");
let navbar = document.querySelector(".navbar");
let menu = document.querySelector(".menu-box .fa-solid ");
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// show header background when a user scroll up 
// remove a navbar if active 
// and remove a menu if active 
window.onscroll = () =>{
  if (window.scrollY > 2){
    header.classList.add("active");
    navbar.classList.remove("active");
    menu.classList.remove("fa-xmark");
    scrollToTopBtn.classList.add("active");
  }else{
    header.classList.remove("active");
    scrollToTopBtn.classList.remove("active");
  }
}

// set menu and navbar to toggle when a menu button is clicked 
menu.onclick =() =>{
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
}

// set a nav link to active state when a user clicks and remove the current active nav link 
// remove navbar 
// remove close or mark x or times when a nav link is clicked 
Array.from(navLink).forEach((item, index) =>{
  item.onclick = (e) =>{
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
    menu.classList.remove("fa-xmark");
  }
})

