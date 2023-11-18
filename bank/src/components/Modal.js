export default function Modal() {
  const modalContainer = document.querySelector(".modal-container");
  const modalTriggers = document.querySelectorAll(".modal-trigger");
  console.log(modalTriggers);

  modalTriggers.forEach((trigger) =>
    trigger.addEventListener("click", toggleModal)
  );

  function toggleModal() {
    modalContainer.classList.toggle("active");
  }
}
