export default function Menu() {
  const btnMenuMobile = document.querySelector(".btnMenuMobile");
  const itemMenu = document.querySelectorAll(".menuMobile ul li");
  const menuMobile = document.querySelector(".menuMobile");

  function toggleMenuMobile() {
    menuMobile.classList.toggle("active");
  }

  function removeClassMenuMobile() {
    if (menuMobile.classList.contains("active"))
      menuMobile.classList.remove("active");
  }

  btnMenuMobile.addEventListener("click", toggleMenuMobile);
  itemMenu.forEach((item) =>
    item.addEventListener("click", removeClassMenuMobile)
  );
}
