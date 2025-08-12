//! Date() object
let now=new Date()
console.log(now);
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getFullYear());
console.log(now.getDate());
let day=['sunday','monday','tuesday','wednesday','thursday','firday','saturday']
console.log(day[now.getDay()]);

let month=['jan','feb','mar','ap                                                                                                    r','may','jun','jul','aug','sep','oct','nov','dec']

console.log(month[now.getMonth()]);
console.log(now.toDateString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toString());

 let showtime=()=>{
     let time=document.querySelector(".date")
let t=now.toLocaleTimeString();
      time.innerHTML=`<h1> ${t}</h1>`;
 }
   showtime()


setInterval(showtime,1000)
//! math () object
console.log(Math.sqrt(16));
console.log(Math.min(2,3,4));
console.log(Math.random());
console.log(Math.ceil(4.8));
console.log(Math.floor(9.5));





