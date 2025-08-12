//eventObject ------>to prevent the default nature we use eventObject
let btn=document.querySelector("button")
let form=document.querySelector("form")
/*btn.addEventListener("click",e=>{
    console.log(e);
    console.log("clicked");
    
    
})*/
   form.addEventListener("submit",e=>{
    e.preventDefault()
    console.log(e);
    console.log("form Submitted");
    let input=document.getElementsByTagName("input")
    let lable=document.getElementsByTagName("lable").value
    for(let i=0;i<input.length;i++){
        
        
        console.log(input[i].value);
        
        
    }
    
    
})