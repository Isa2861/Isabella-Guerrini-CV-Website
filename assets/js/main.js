// Setup Lucide icons
lucide.createIcons();

// Initial theme setting is chosen on device's settings
let useLightTheme = matchMedia("(prefers-color-scheme: light)").matches;

const themeBtn = document.querySelector(".theme-btn");
const sunBtn = themeBtn.querySelector(".sun-btn");
const moonBtn = themeBtn.querySelector(".moon-btn");

themeBtn.addEventListener("click", function () {
  useLightTheme = !useLightTheme;

  sunBtn.classList.toggle("d-none", useLightTheme);
  moonBtn.classList.toggle("d-none", !useLightTheme);
  document.body.classList.toggle("light", useLightTheme);
});
