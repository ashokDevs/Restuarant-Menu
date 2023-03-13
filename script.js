const breakfastBtn= document.querySelector("#breakfast");
const allBtn=document.querySelector("#all");
const lunchBtn=document.querySelector("#lunch");
const shakeBtn=document.querySelector("#shakes");

const itemContainers=document.querySelectorAll(".itemContainer")

allBtn.addEventListener("click", ()=>{
    itemContainers.forEach(element=>{
        element.classList.remove("hidden")
    })
})
breakfastBtn.addEventListener("click", ()=>{
    itemContainers.forEach(element => {
        element.classList.remove("hidden")
        if(!element.classList.contains("breakfast")){
            element.classList.add("hidden");
        }
    }); 
})
lunchBtn.addEventListener("click", ()=>{
    
    itemContainers.forEach(element => {
        element.classList.remove("hidden")
        if(!element.classList.contains("lunch")){
            element.classList.add("hidden");
        }
    }) ;
})

shakeBtn.addEventListener("click", ()=>{
    
    itemContainers.forEach(element => {
        element.classList.remove("hidden")
        if(!element.classList.contains("shake")){
            element.classList.add("hidden");
        }
    }) ;
})