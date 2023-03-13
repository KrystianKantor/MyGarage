(function controlMobileMenu() {
  document
    .querySelector(".mobile-menu-button")
    .addEventListener("click", (event) => {
      const button = event.target;
      const menu = document.querySelector(".nav-bar");
      const icons = document.querySelector(".header__icons-wrapper");

      if (!button.classList.contains("mobile-menu-button--active")) {
        button.classList.add("mobile-menu-button--active");
        menu.classList.add("nav-bar--active");
        icons.classList.add("header__icons-wrapper--visible");
      } else {
        button.classList.remove("mobile-menu-button--active");
        menu.classList.remove("nav-bar--active");
        icons.classList.remove("header__icons-wrapper--visible");
      }
    });
})();
