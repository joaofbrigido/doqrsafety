export default function Accordion() {
  const questions = document.querySelectorAll("#faq dl dt");

  // Iniciar com o primeiro aberto
  questions[0].classList.add("active");
  questions[0].nextElementSibling.classList.toggle("active");

  function handleAccordion(question) {
    question.classList.toggle("active");
    question.nextElementSibling.classList.toggle("active");
  }

  questions.forEach((question) => {
    question.addEventListener("click", () => handleAccordion(question));
  });
}
