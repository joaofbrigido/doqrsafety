export default function ScrollAnimation() {
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

  const sections = document.querySelectorAll("[data-anime]");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.9;
    const animaClass = "activeAnimation";

    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add(animaClass);
        // else section.classList.remove(animaClass);
      });
    }
    scrollAnimation();

    window.addEventListener(
      "scroll",
      debounce(() => {
        scrollAnimation();
      }, 50)
    );
  }
}
