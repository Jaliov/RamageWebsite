


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

var link = document.createElement('link');
let artCat = document.querySelector('.art_category')
let art_cat = document.querySelector('.art_cat')

    console.log(filterValue)
   if (filterValue === "all") {
    window.location.href = "index.html";
   }
   else if (filterValue === "hankie_art") {
    demonsText.innerHTML = "<div class = 'slide-element'><p>Begun during Covid, these are a small selection from a large series that incorporates family image transfer and collage. </br>The hankie became the base as it represents an object that shared laughter, tears and illness in a woman’s life.</p></div>"

    art_cat.innerHTML = "Hankie Art";
     const element = document.querySelector('.all_page');
      if (element) {
        element.remove();
          }
   }
   else if(filterValue === "rules_of_game") {
    demonsText.innerHTML = "<div class = 'slide-element'><p>A series examining the relationship of girls and women in society. Some of the work is celebratory, some cautionary.</p></div>"
   
    art_cat.innerHTML = "Rules of the Game";
    const element = document.querySelector('.all_page');
      if (element) {
        element.remove();
          }
   }
   else if(filterValue === "hive_mind") {
    demonsText.innerHTML = "<div class = 'slide-element'><p>This series was inspired by the exhibition <em>Animal Architects</em> curated by Donna Payton and a nineteenth century woodcut of a hornet hive. It began as an exploration of the cross section of a hive using a variety of materials unique to each piece. The work evolved into a tribute to the all girls high school the artist attended.</p>"
    
    art_cat.innerHTML = "Hive Mind";
    const element = document.querySelector('.all_page');
      if (element) {
        element.remove();
          }
   }
   else if(filterValue === "ghosts") {
    demonsText.innerHTML = "<div class = 'slide-element'><p>Using old family photographs the artist inherited, each piece tells a story of a memory of people and times long gone.</p>"
   
    art_cat.innerHTML = "Ghosts";
    const element = document.querySelector('.all_page');
      if (element) {
        element.remove();
          }
   }
   else if(filterValue === "domestic_and_aBroad") {
    demonsText.innerHTML = "<div class = 'slide-element'><p>This series exists because of the discovery of the artist’s step grandmother’s album of her trip to Europe in the fifties. Hilda was a formidable woman who ruled her husband and children. Theater fonts and images of the period serve as inspiration as well.</p></div>"
  
    art_cat.innerHTML = "Domestic and aBroad";
    const element = document.querySelector('.all_page');
      if (element) {
        element.remove();
          }
   }
    else if(filterValue === "demons") {
      demonsText.innerHTML = "<div class = 'slide-element'><p>Images of demons meant to protect. All artworks are gelli prints and collage.</p></div><br>"
  //  artCat.innerHTML = '<a href="#" class =" #" ></a>'; 
    art_cat.innerHTML = "Demons";
    const element = document.querySelector('.all_page');
      if (element) {
        element.remove();
          }
   }
   
   else {
    artCat.innerHTML = '';
    demonsText.innerHTML = '';
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

// document.querySelector(".navbar").innerHTML = 
//             `<a href="index.html" class="active">Home</a>
//              <a href='#' id ="open-modal-btn">Contact</a>
//             <a href="about.html">About</a>` 

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

