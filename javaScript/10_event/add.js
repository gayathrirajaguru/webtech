let form=document.querySelector("#add")
console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let num1=document.querySelector(".u")
    let num2=document.querySelector(".p")
    console.log(num1.value,num2.value);
    let sum1=parseInt(num1.value)+parseInt(num2.value)
    console.log(sum1);
    let div=document.querySelector("#sum")
    div.innerText=sum1
    
    
})
let select=document.querySelector("select")
select.addEventListener("change",(e)=>{
    let color=e.target.value
    let outer=document.querySelector(".outer")
    console.log(outer);
    
    outer.style.backgroundColor=color
})
