

let count=0;
let value=document.querySelector("b")
    value.innerText=count

let fun1=()=>{
    count++;
    value.innerText=count;
    console.log(value);
    
    
    
    
    
    if(count>=10){
     alert("limit reached")
     btn3=removeEventListener("click",fun1)
    }
    
}
let btn3=addEventListener("click",fun1)
