export default function Cookies() {
  const cookieContainer = document.querySelector(".cookies");
  const btnCookie = document.querySelector(".cookies button");

  btnCookie.addEventListener("click", () => {
    localStorage.setItem("cookiesConfirm", true);

    cookieContainer.style.display = "none";
    cookieContainer.style.opacity = "0";
  });

  const hasClicked = localStorage.getItem("cookiesConfirm");

  if (hasClicked) {
    cookieContainer.style.display = "none";
    cookieContainer.style.opacity = "0";
  }
}
