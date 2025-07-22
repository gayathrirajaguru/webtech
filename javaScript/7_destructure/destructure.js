let student={
    name:'gayathri',
    age:21,
    phone:12345678,
    mail:"xxxx@gmail.com",
    city:'chennai'
}


console.log(student.phone);
//! destructure for object
// we have to give the same name as the key name
let {name,age,phone,mail,city}=student
console.log(name);
console.log(age);
//! destructure for array
// we can provide different name
let sub=['html','css','javascript','java']
let [sub1,sub2,sub3,sub4] =sub
console.log(sub1);

//! (...)---->rest parameter
// it store the rest of the value
// the rest parameter is used to group the remaining element into the array
// it collect "the rest " of the argument that we were not explicity specified
//the rest parameter is represent by the three dots(...)
let display=(a,b,...c)=>{
    console.log(a);
    console.log(b);
    console.log(c);

    
    
    
}
display(2,3,4,5,6,7,8,9)

//! spread operator
// whenever we want to combine the object or array we use spread operator
//the spread operator in javascript allows to expand an array ,object, or iterable into individual element
// it is used copy ,merge,pass element
//spread operator represented by (...) three dots
 let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[...arr1,...arr2] // --------->[1,2,3,4,5,6]
let arr4=[arr1] // ------>[[1,2,3]]
console.log(arr3);
console.log(arr4);
//! shallow copy 
// A shallow  copy of an object is an new copy that is the copy of the original,but it only copy the references of nested objects instead of creating new instance
// this means that if the original object contains the another object as a property ,changes to the nested object will affent the original and vice versa
let arr5=[2,3,4,5,6]
let copy=arr5
console.log(copy); //--->[2,3,4,5,6]
copy.push(100)
console.log(copy); // ---->[2,3,4,5,6,100]
console.log(arr5); //--->[2,3,4,5,6,100]
//! deep copy
//deep copy creates a completely independent clone of the original object,including all the nested objects. changes to the copied object do not affect the original.
let arr6=[1,2,3,4,5]
let copy2=JSON.parse(JSON.stringify(arr6))
console.log(copy2); //--->[1,2,3,4,5]
copy2.push(200)
console.log(copy2); //-->[1,2,3,4,5,200]
console.log(arr6);   //---->[1,2,3,4,5]














