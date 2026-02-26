const modal = document.getElementById("my-modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
// When the user clicks the open button, open the modal as a modal dialog
openModalBtn.addEventListener("click", () => {
  modal.showModal();
});
// When the user clicks the close button, close the modal
closeModalBtn.addEventListener("click", () => {
  modal.close();
});
