
const navbar = document.getElementById("navbar");

window.addEventListener('scroll', (event) => {
  if (window.scrollY >= window.innerHeight) {
    navbar.classList.add("navbar-fixed");
  }
  else {
    navbar.classList.remove("navbar-fixed");
  }
});
