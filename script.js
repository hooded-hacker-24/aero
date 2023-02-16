let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar')
let videoBtn = document.querySelectorAll('.vid-btn')
const navLinks = document.querySelectorAll(".navbar a");

const menuBar = document.getElementById("menu-bar");

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    // $('.controls.active').classList. remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src=src;
    });
});

  window.onscroll = function() {
    if(window.innerWidth>767){
    const header = document.querySelector("header");
    if (window.pageYOffset > 60) {
      header.style.backgroundColor = "black";
    } else {
      header.style.backgroundColor = "transparent";
    }}
  };


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("menu-bar").addEventListener("click", function() {
    let navbar = document.querySelector(".navbar");
    if (navbar.style.display === "none" || navbar.style.display === "" || window.innerWidth) {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
          if (window.innerWidth <= 767) {
            if (navbar.style.display === "block") {
              navbar.style.display = "none";
            }
          }
          
        });
      });
    
      menuBar.addEventListener("click", function() {
        navbar.style.display = navbar.style.display === "block" ? "none" : "block";
      });
  });
});

const mq = window.matchMedia("(min-width: 767px)");

if (mq.matches) {
  // The viewport is wider than 767px
  document.querySelector('.navbar').style.display = 'block';
} else {
  // The viewport is less than or equal to 767px
  document.querySelector('.navbar').style.display = 'none';
}



mq.addListener(function(changed) {
  if (changed.matches) {
    // The viewport has become wider than 767px
    document.querySelector('.navbar').style.display = 'block';
    document.querySelector('header').style.backgroundColor='';
  } else {
    // The viewport has become less than or equal to 767px
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('header').style.backgroundColor='#505050';
  }
});


window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  loader.classList.add("hidden");
});
var footer = document.getElementById('footer');

window.addEventListener('scroll', function() {
  var scrollHeight = document.documentElement.scrollHeight;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    footer.classList.add('show');
  } else {
    footer.classList.remove('show');
  }
});
