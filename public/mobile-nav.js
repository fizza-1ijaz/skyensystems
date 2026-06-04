(function () {
  function initMobileNav() {
    document.querySelectorAll(".nav-hamburger").forEach(function (button) {
      var nav = button.closest("nav, .nav");
      if (!nav || button.dataset.navBound === "1") return;
      button.dataset.navBound = "1";

      button.addEventListener("click", function () {
        var open = nav.classList.toggle("nav-menu-open");
        button.setAttribute("aria-expanded", open ? "true" : "false");
        button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileNav);
  } else {
    initMobileNav();
  }
})();
