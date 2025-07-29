//! addEventListener
// ! Syntax
// ?addEventListener("event",function)
// addEventListener is used to add multiple functions it will accept two parameters
//we disadvantage in inline and dom properties because it will take one function if we provide more than one it will override the previous one
//so we use addEventListener
/*let btn=addEventListener("click",()=>{
    console.log("clicked");
    
})
btn.addEventListener("click",()=>{
    console.log("hii hoe are you");
    
})
btn.addEventListener("click",()=>{
    console.log("byee");
    
})*/
let count=0;

let fun1=()=>{
    count++;
    console.log("hiii");
    if(count>=5){
    btn=removeEventListener("click",fun1)
    }
    
}
btn=addEventListener("click",fun1)
btn=addEventListener("click",()=>{
    console.log(count);
    
    console.log("hii hoe are you");
    
})
btn=addEventListener("click",()=>{
    console.log("byee");


})
    
//! removeEventListener
// for remove the event
//removeEventListener('event',function)

