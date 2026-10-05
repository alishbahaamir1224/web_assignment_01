"use strict";

document.querySelectorAll("[data-menu-toggle]").forEach((button) => {
  const menu = document.getElementById(button.getAttribute("aria-controls"));

  if (!menu) return;

  const setMenuState = (isOpen) => {
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menu.classList.toggle("hidden", !isOpen);
  };

  button.addEventListener("click", () => {
    setMenuState(button.getAttribute("aria-expanded") !== "true");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
});

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const notice = document.getElementById(form.getAttribute("data-demo-form"));

    if (notice) {
      notice.classList.remove("hidden");
      notice.setAttribute("role", "status");
    }
  });
});
