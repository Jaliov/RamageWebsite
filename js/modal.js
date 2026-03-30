
document.getElementById("my-modal").innerHTML = `
      <h2>Contact</h2><br>
      <p><i class="ri-instagram-line"></i>libbyramage</p>
      <p><i class="ri-mail-line"></i>ramcar1980@gmail.com</p>
      <p><a href="https://www.ugallery.com/pages/libby-ramage"><i class="ri-link"></i>UGallery.com</a></p><br>
      <a href="#" id="close-modal-btn"><i class="ri-close-line"></i></button>`
  
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

  /*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
      //When the scroll is higher than 350 viewport height, add the show-scroll class to 
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')   
}
window.addEventListener('scroll', scrollUp)

