//event---->  any action on web page
// event is alreay present we just need to handle those event
// 2ways used to handle the event
//1 inline event handling
//2.dom properties
console.log("hii");
let login=()=>{
    console.log("login done ");
    
}
let changeColor=()=>{
    let main=document.querySelector("main")
    main.style.backgroundColor="orange"
    console.log("changed");
    
}
let changeColor2=()=>{
    let main=document.querySelector("main")
    main.style.backgroundColor="white"
    console.log("changed");
    
}
 
let btn2=document.querySelector(".b")
console.dir(btn2)

let clicked=()=>{
    console.log("clicked");
    
}
btn2.onclick=clicked
let h=document.querySelector("div")
h.onmouseenter=()=>{
    console.log("entered");
    
}
h.onmouseleave=()=>{
    console.log("leaved");
    
}