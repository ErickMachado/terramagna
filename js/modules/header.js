export default function initHeaderWatcher() {
  const header = document.querySelector(".header");
  const logo = document.querySelector(".logo");

  function handleHeader() {
    if (window.scrollY > 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  }

  window.addEventListener("scroll", handleHeader);
}
