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
   if (filterValue === "hankie_art") {
    demonsText.innerHTML = "<p>This is a description of hankie art</p>"
    artCat.innerHTML = '<a href="hankiart.html"  class="button" >More hankie art &rarr;</a>';
    art_cat.innerHTML = "Hankie Art";
     const element = document.querySelector('.all_page');
      if (element) {
        element.remove();
          }
   }
   else if(filterValue === "rules_of_game") {
    demonsText.innerHTML = "<p>This is a description of rules of the game</p><br>"
    artCat.innerHTML = '<a href="rules.html" class="button">More rules of the game&rarr;</a>'; 

    art_cat.innerHTML = "Rules of the Game";
    const element = document.querySelector('.all_page');
      if (element) {
        element.remove();
          }
   }
   else if(filterValue === "hive_mind") {
    demonsText.innerHTML = "<p>This is a description of hive mind</p><br>"
    artCat.innerHTML = '<a href="hive_mind.html" class="button">More hive mind &rarr;</a>'; 
    
    art_cat.innerHTML = "Hive Mind";
    const element = document.querySelector('.all_page');
      if (element) {
        element.remove();
          }
   }
   else if(filterValue === "ghosts") {
    demonsText.innerHTML = "<p>This is a description of ghosts</p><br>"
    artCat.innerHTML = '<a href="ghosts.html" class ="button " >More ghosts &rarr;</a>'; 

    art_cat.innerHTML = "Ghosts";
    const element = document.querySelector('.all_page');
      if (element) {
        element.remove();
          }
   }
    else if(filterValue === "demons") {
  
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

