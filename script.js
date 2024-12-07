let btn =document.querySelector(".card button");
let hea =document.querySelector(".headen");
let bt =document.querySelector(".bt");
let hed =document.querySelector(".bt span");

btn.addEventListener("click",()=>{
hea.classList.toggle("active");


})

bt.addEventListener("click",()=>{
   document.body.classList.toggle("dark")

   if(document.body.classList.toggle("dark"))
    {hed.style.visibility="visible";

    } 
    else{
        hed.style.visibility="visible";
    }
    
    console.log(444);
    
})

