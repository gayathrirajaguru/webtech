//! object creation by using object literals
let student={
    sname:'gayathri',
    age:22,
    skills:['html','css','js'],
    address:{
        city:'ranipet',
        pincode:'604505'

    },
    work:()=>{
        console.log("cook");
        
    }
}
console.log(student);
student.work()
//! how to access
console.log(student.sname);
console.log(`student name is:${student.sname}`);
//! how to modify 
student.age=21
console.log(student.age);
//! how to add 
student.phone=9876567689
console.log(student.phone);
console.log(student.address.pincode);
//! how to delete
// delete is the keyword to delete any object
delete student.address.pincode;
console.log(student);



//! methods in objects


//1.Object.keys()
// this method is used to return all the keys inthe form of array
let key=Object.keys(student)
console.log(key);


// 2.Object.values()
// this method is used to return all the values inthe form of array
let value=Object.values(student)
console.log(value);



//3.Object.entires()
//


let key_values=Object.entries(student)
console.log(key_values);


//! 4.Object.freeze()
//this method  is making the object frozen where we can't add or delete or modify the object
let ob={
    name:'pen',
    price:20,
    color:'black'
}
console.log("before freeze");
console.log(ob);
Object.freeze(ob)
console.log("after freeze");
console.log(ob);
ob.price=30
delete ob.color

console.log(ob);
//! 5.Object.isFrozen
// it is used to check whether the given object is frozen or not 
//if frozen it will return true else false
console.log(Object.isFrozen(ob))       //true
console.log(Object.isFrozen(student))  //false

//!6. Object.seal()
//  it is also similar to Object.freeze() method, we can't do delete,add but we can modify 
let ob1={
    name:'book',
    pirce:100

}
console.log("before seal");
console.log(ob1)
console.log("after seal");
Object.seal(ob1) 
delete ob1.price //cannot able to delete
ob1.page=100  // cannot able to add
ob1.name='book1' //able to modify
console.log(ob1);
//! 7.Object.isSealed
// it is used to know whether the object is sealed or not
//if it is sealed it will return true else false
console.log(Object.isSealed(ob1));
//!8. objectNAme.hasOwnProperty()
// it is used to know the key is present or not in the object
//it will return the boolean
console.log(ob1.hasOwnProperty('name'));


























