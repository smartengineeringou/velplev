(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");

  if (!header || !toggle) {
    return;
  }

  function syncScrolledState() {
    header.classList.toggle("is-scrolled", window.scrollY > 80);
  }

  toggle.addEventListener("click", function () {
    var isOpen = header.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", function (event) {
    if (!header.contains(event.target)) {
      header.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("scroll", syncScrolledState, { passive: true });
  syncScrolledState();
})();
