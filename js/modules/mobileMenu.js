export default function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  function activeMobileMenu() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  }

  hamburger.addEventListener("click", activeMobileMenu);
}
