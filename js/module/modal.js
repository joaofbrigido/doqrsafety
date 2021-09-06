export default function Modal() {
  const modal = document.querySelector(".modalContainer");
  const btnModal = document.querySelectorAll("[data-btnModal]");
  const btnCloseModal = document.querySelector(".btnCloseModal");

  function toggleModal() {
    modal.classList.toggle("active");
  }

  function clickOffModal(event) {
    event.preventDefault();
    if (event.target === this) toggleModal();
  }

  btnModal.forEach((btn) => btn.addEventListener("click", toggleModal));
  btnCloseModal.addEventListener("click", toggleModal);
  modal.addEventListener("click", clickOffModal);
}
