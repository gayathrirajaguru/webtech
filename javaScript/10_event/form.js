let user=document.querySelector("#stuform")
console.log(user);

user.addEventListener("submit",(e)=>{
    e.preventDefault()
    let userName=document.querySelector(".u")
    let password =document.querySelector(".p")
    console.log(userName.value,password.value);
    console.log("submitted");
    

    
    
    
})