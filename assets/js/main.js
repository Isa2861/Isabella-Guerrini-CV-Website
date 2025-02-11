// Setup Lucide icons
lucide.createIcons();

function setTheme() {
  sunBtn.classList.toggle("d-none", useLightTheme);
  moonBtn.classList.toggle("d-none", !useLightTheme);
  document.body.classList.toggle("light", useLightTheme);
}

const themeStorageKey = "ib-light_theme";

// Initial theme setting is chosen on device's settings
let storageUseLightTheme = localStorage.getItem(themeStorageKey);
let useLightTheme = matchMedia("(prefers-color-scheme: light)").matches;
if (storageUseLightTheme) {
  useLightTheme = storageUseLightTheme === "true" ? true : false;
}

const themeBtn = document.querySelector(".theme-btn");
const sunBtn = themeBtn.querySelector(".sun-btn");
const moonBtn = themeBtn.querySelector(".moon-btn");

setTheme();

themeBtn.addEventListener("click", function () {
  useLightTheme = !useLightTheme;
  localStorage.setItem(themeStorageKey, useLightTheme);

  setTheme();
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
