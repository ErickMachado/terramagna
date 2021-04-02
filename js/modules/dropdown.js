export default function initDropdown() {}

function handleClick(event) {
  this.classList.toggle("active");
}

const dropdownMenus = document.querySelectorAll("[data-dropdown]");

dropdownMenus.forEach((dropdown) => {
  ["touchstart", "click"].forEach((event) => {
    dropdown.addEventListener(event, handleClick);
  });
});
