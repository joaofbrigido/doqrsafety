export default function changeBorderMenuWithScroll() {
  const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const sections = document.querySelectorAll("[data-section]");
  const itemMenu = document.querySelectorAll(".menu nav li");

  if (sections.length) {
    function changeBorderItemMenu() {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 5)
          current = section.getAttribute("id");
      });

      itemMenu.forEach((item) => {
        item.classList.remove("active");
        if (item.classList.contains(current)) item.classList.add("active");
      });
    }
    changeBorderItemMenu();

    window.addEventListener(
      "scroll",
      debounce(() => {
        changeBorderItemMenu();
      }, 50)
    );
  }
}
