let arr=['html','css','javascript','express','mongodb','react','node']
//! for in loop
//it will take  index
for(let i in arr){
    console.log(i,arr[i]);
    
}
//! for of loop
//it will take element
for(let ele of arr){
    console.log(ele);
    
}
let ob={
    pen:'cello',
    price:10,
    color:'blue'
}
for(let i in ob){
    console.log(i,ob[i]);
    
}
//! for of loop is not possible in object
//for(let i of ob) {console.log(i)}

const indiaOdiSquad2025 = [
  { name: "Rohit Sharma", role: "Batsman", captain: true, viceCaptain: false },
  { name: "Shubman Gill", role: "Batsman", captain: false, viceCaptain: true },
  { name: "Virat Kohli", role: "Batsman", captain: false, viceCaptain: false },
  { name: "Shreyas Iyer", role: "Batsman", captain: false, viceCaptain: false },
  { name: "KL Rahul", role: "Wicket‑keeper Batsman", captain: false, viceCaptain: false },
  { name: "Rishabh Pant", role: "Wicket‑keeper Batsman", captain: false, viceCaptain: false },
  { name: "Hardik Pandya", role: "All‑rounder", captain: false, viceCaptain: false },
  { name: "Axar Patel", role: "All‑rounder", captain: false, viceCaptain: false },
  { name: "Washington Sundar", role: "All‑rounder", captain: false, viceCaptain: false },
  { name: "Ravindra Jadeja", role: "All‑rounder", captain: false, viceCaptain: false },
  { name: "Kuldeep Yadav", role: "Bowler", captain: false, viceCaptain: false },
  { name: "Harshit Rana", role: "Bowler", captain: false, viceCaptain: false },
  { name: "Mohammed Shami", role: "Bowler", captain: false, viceCaptain: false },
  { name: "Arshdeep Singh", role: "Bowler", captain: false, viceCaptain: false },
  { name: "Varun Chakaravarthy", role: "Bowler", captain: false, viceCaptain: false }
];
indiaOdiSquad2025.map(ele=>{
    console.log("player name is",ele.name);
    console.log("role",ele.role);
    console.log('------');
    
    
})
// prompt is used to get the input from the user in popup manner
//alert i s used to display the output in popup manner
//console.log is used to display the output in console
let  addNumber=()=>{
    let a=parseInt(prompt("enter the first number"))
    let b=parseInt(prompt("enter the  second number"))
    alert(a+b)
}
addNumber()