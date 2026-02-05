//selecting ul
const gallery = document.querySelector(".gallery")

//select imagebox
const itemboxes = document.querySelectorAll(".itembox")
console.log(itemboxes)

gallery.addEventListener("click", (e) => {
    console.log(e)
const filterValue = e.target.getAttribute("data-filter");

   if(e.target.classList.contains("filter")) {
            gallery.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");

            
            console.log(filterValue)
            
            itemboxes.forEach(item =>{
                if(item.classList.contains(filterValue) || filterValue === "all") {
                    item.classList.add("show")
                    item.classList.remove("hide")
                    
                }
                else {
                    item.classList.add("hide")
                } 
            }
            
)}

const artCat = document.querySelector('.art_category')
// artCat.addEventListener('click', (e) =>  {
  
    console.log(filterValue)
   if (filterValue === "hankie_art") {
    artCat.innerHTML = '<a href="hankiart.html" style="text-decoration: none;color:black;" class="filter" >More hankie art</a>';
   }
   else if(filterValue === "rules_of_game") {
    artCat.innerHTML = '<a href="rules.html" style="text-decoration: none;color:black;" class="filter">More rules of the game</a>';
   }
   else {
    artCat.innerHTML = '';
   }
    
   artCat.addEventListener('mouseover', () => {
  // Use camelCase for hyphenated CSS properties (e.g., 'backgroundColor')
   artCat.style.backgroundColor = '#e84545';
   artCat.style.color = 'yellow';
});
  artCat.addEventListener('mouseout', () => {
  // Revert styles on mouse out
  artCat.style.backgroundColor = 'initial';
  artCat.style.color = 'initial';
});
   

})
// Get the modal, image, and caption elements


// When the user clicks the small image, open the modal and display the clicked image
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Optional: Close the modal if the user clicks anywhere outside of the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

