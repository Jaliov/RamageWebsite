
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
document.querySelector('.art_category').addEventListener('click', (e) =>  {
  
    console.log(filterValue)
    itemboxes.forEach(item =>{
                if(item.classList.contains(filterValue) ) {
                    item.classList.add("show")
                
                    
                }
                else {
                    item.classList.add("hide")
                } 
            }
    
    
    )

})
// 1. Select all elements with the class 'myClass'

})
// 2. Define the function to run when the event occurs

    

     


  // 'event.target' refers to the specific button that was clicked
//   document.getElementById('output').textContent = `"${event.target.textContent}" was clicked!`;


// 3. Iterate over the NodeList and add the event listener to each button


