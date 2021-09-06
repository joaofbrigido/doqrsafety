export default function availableChecklists() {
  const checklistListContent = document.querySelectorAll(
    ".checklistsListaContent"
  );
  const checkListTitleList = document.querySelectorAll(
    ".checklistListaTitle li"
  );
  const activeClass = "active";

  // Começar com o primeiro item da lista selecionado.
  checklistListContent[0].classList.add(activeClass);
  checkListTitleList[0].classList.add(activeClass);

  function activeChecklistTitle(index) {
    checkListTitleList.forEach((item) => {
      item.classList.remove(activeClass);
    });
    checkListTitleList[index].classList.add(activeClass);
  }

  function changeContent(index) {
    checklistListContent.forEach((item) => {
      item.classList.remove(activeClass);
    });
    checklistListContent[index].classList.add(activeClass);
    activeChecklistTitle(index);
    clearInterval(automaticContentInterval);
  }

  checkListTitleList.forEach((item, index) => {
    item.addEventListener("click", () => changeContent(index));
  });

  //Mudar os Checklists de forma automática
  let count = 0;
  function automaticallyChangeContent() {
    checklistListContent[count].classList.remove(activeClass);
    checkListTitleList[count].classList.remove(activeClass);
    count++;

    if (count > checkListTitleList.length - 1) {
      count = 0;
    }

    checklistListContent[count].classList.add(activeClass);
    checkListTitleList[count].classList.add(activeClass);
  }

  const automaticContentInterval = setInterval(
    automaticallyChangeContent,
    3500
  );
}
