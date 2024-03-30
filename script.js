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

// if (window.innerWidth >= 600) {
//   window.onscroll = scrollFunction;
// } else {
//   window.onscroll = stickyNavbar;
// }

// window.onresize = function () {
//   if (window.innerWidth >= 600) {
//     window.onscroll = scrollFunction;
//   } else {
//     window.onscroll = stickyNavbar;
//   }


// window.onscroll = function () { stickyNavbar() };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function stickyNavbar() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var h1 = navbar.querySelector(".center-section h1");
  if (window.innerWidth >= 600) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add("sticky");
      h1.style.display = "none";
    } else {
      navbar.classList.remove("sticky");
      h1.style.display = "block";
    }
  }
}