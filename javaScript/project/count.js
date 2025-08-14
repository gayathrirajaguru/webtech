let b1=document.querySelector(".b1")
 let count =0;
 let inner=document.querySelector(".inner")
let h1=document.createElement("h1")
inner.append(h1)
h1.innerText=count
let click=b1.addEventListener("click",()=>{
    
   h1.innerText=count++
    

    
})
let b3=document.querySelector(".b3")
let click3=b3.addEventListener("click",()=>{
    h1.innerText=count--
})
let b2=document.querySelector(".b2")
let click1=b2.addEventListener("click",()=>{
    h1.innerText=0
    count=0


})