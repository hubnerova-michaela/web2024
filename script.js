function toggleMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("show-mobile-menu");
  var body = document.body;
  if (mobileMenu.classList.contains("show-mobile-menu")) {
    body.classList.add("non-scrollable");
  }
  else {
    body.classList.remove("non-scrollable");
  }

}


window.onscroll = function () { stickyNavbar() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}