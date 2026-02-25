// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  const switcherItems = document.querySelectorAll(
    "#countrySwitcher .dropdown-item",
  );

  switcherItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the data-link attribute
      const link = this.getAttribute("data-link");

      // Redirect if a link exists
      if (link) {
        window.location.href = link;
      }
    });
  });
});
