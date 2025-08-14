 console.log("i am external js");
//  how many ways we can declare variable 
// 3 ways
// 1. let myname="gayathri"; (;) is not mandatory
 let myname ,myage
 myname="gayathri"
 myage=21
 console.log(myname);
 console.log(myage);
 
//  2.var
 var phone = 3456789867;
 console.log(phone);
 var phone // redeclaration is possible
 
 
//  3.const
const aadharno = 23456666666666; // redeclaration & reinitialiazation isnot possible
console.log(aadharno);
// datatype

// ! 1. Number
let id=2212
console.log(typeof id);
// ! typeof
// typeof operator is know the datatype of the variable
// ! 2.string
let emp1="rahul"
let emp2 ='bumrah'
let emp3 =`gill` // backtick
console.log(typeof emp1);
console.log(typeof emp2);
console.log(typeof emp3);
// ! 3.boolean 
let ismarried = false
console.log(typeof ismarried);
// !  4.undefined
let dob 
console.log(typeof dob );
console.log(dob);

// any variable declared but not initialized is called undefined
// ! type of undefined is also undefined
// ! 5. null
let sal =null
console.log(sal);
console.log(typeof sal);
// d/f b/w type null is object
// ! 6. bigint
let count=2n
console.log(count);
console.log(typeof count);
// type of bigint is bigint
// ! non primitive datatype
//1.array
let arr=[10,'devi',true];
console.log(arr);
// 2.function
function display(){
    console.log("i am display function");
    
}
display()
// 3.object
let student={
    sname:"rohit",
    age:20,
    }
console.log(student);












 
 

 

