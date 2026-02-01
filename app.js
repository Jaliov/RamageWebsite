
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
    artCat.innerHTML = '<a href="hankiart.html">More hankie art</a>';
   }
   else if(filterValue === "rules_of_game") {
    artCat.innerHTML = '<a href="rules.html">More rules of the game</a>';
   }
    
    
   

})

