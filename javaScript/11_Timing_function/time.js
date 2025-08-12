console.log("timing function");
//! setTimeout 
// it is used for execution function after some specific time
setTimeout(()=>{
    console.log("happy brithday");
    
},4000)

//! setInterval
// it will execute again and again
 let t=setInterval(() => {
    console.log("hii");
    
}, 1000);
//! clearInterval and clearTimeout


setInterval(()=>{
    console.log("good");
    
},2000)
clearInterval(t)