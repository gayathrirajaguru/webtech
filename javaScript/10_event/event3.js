 //!event handler
 let display=()=>{
    alert("clicked")
}
//!event listener
let btn=document.querySelector(".btn1")
btn.addEventListener("click",()=>{
    alert("button clicked")
})
//e.target is used to know which element we target
let card1=document.getElementsByClassName("card")


card1[1].addEventListener("click",(e)=>{
    
    console.log(e);
    card1[1].innerHTML=card1[0].innerHTML
    card1[0].innerHTML=""
    
    

})
card1[0].addEventListener("click",(e)=>{
    
    console.log(e);
    card1[0].innerHTML=card1[1].innerHTML
    card1[1].innerHTML=""
    
    

})
let input1=document.querySelector("#input1")
let out=document.querySelector("#out")



input1.addEventListener('keyup',(e)=>{
   
   
  console.log(e.target);
   

    out.innerText=e.target.value
    console.log(e.target.value);
  

    
})


