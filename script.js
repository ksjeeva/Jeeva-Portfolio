let menuBar = document.getElementById("menu-bar");
let menuOpenIcon = document.getElementById("menu-open-icon");

menuOpenIcon.addEventListener("click", () => {
  menuBar.classList.toggle("menu-open");
});

let social = document.getElementById("social");
social.addEventListener("click", () => {
  document.getElementById("icons").classList.toggle("open");
});

var typed = new Typed(".typing", {
  strings: ["Developer", "Database Administrator", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed(".typing-2", {
  strings: ["Developer", "Database Administrator", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('top-bar');
  var topname = document.getElementById('white');
  var menuBar = this.document.getElementById('menu-bar')
  var distance = window.scrollY;
  if (distance > 100) { // Adjust this value as needed
    navbar.classList.add('crimson');
    topname.classList.add('white');
    menuBar.classList.add('crimson');
  } else {
    navbar.classList.remove('crimson');
    topname.classList.remove('white');
    menuBar.classList.remove('crimson')
  }
});


 