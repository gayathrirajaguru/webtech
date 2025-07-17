// ! array
// array is linear datastructure where we can store multiple values in continuous manner
// in javascript we can stores both homogeneous and heterogeneous data in array
let arr=[1,"gayathri",true,undefined,()=>{},[3,4,5]]
console.log(arr);
//! push()
// push() is used to add the element at the last of the array and it will return the length of the array
let std=["rahul","gill","pant"]
std.push("bumrah");
console.log(std);
 let a=std.push("jadeja")
 console.log(a);
 //! pop()
 // pop() method is used to remove the last element from the array and it will the removed element
 let players=["gambhir","dhoni","sachin"]
 players.pop()
 console.log(players);
 let b=players.pop("dhoni")
 console.log(b);
 
 //! unshift()
 // this method is used to add any element at the starting of the array and it will return the length of the modified
 let serial=["vani rani","rosa"]
 serial.unshift("singapenne")
 console.log(serial);
 //! shift()
 // shift() method is used to remove the first element from the array and it will the removed element
 let movie=['leo','goat','dj']
 movie.shift()
 console.log(movie);
 
 //! includes()
 // it is used to check the given element is present or not in the array
 // if it is present it returns true else it return   false
 console.log(movie.includes("dj"));
 console.log(movie.includes("leo"));
 //! indexOf()
 // it is used to know the index of the given element
 let webseries=['loki','dark','breaking bad']
 console.log(webseries.indexOf('dark'));
 //! concat()
 // concat() is used to combine two or more than two arrays and it will return one new array .
 let arr2=[10,20,30]
 let arr3=[40,50,60]
 let combine=arr2.concat(arr3,["hello","hii"]);
 console.log(combine);
 // ! join()
// it will used to convert any arrays into string
let chararr=['h','e','l','l','o']
console.log(chararr.join(""));
//! reverse()
// it is used to reverse the array and it will modified the original array
// it will return onr array that will be in reversed order
let arr4=[1,2,3,4,5,6]
console.log(arr4);


console.log(arr4.reverse());
console.log(arr4);
//! splice()
// By using this method we can add,delete,modify the array element
// it can take 3 parameters(startindex,deletecount--->no.of element we want to delete,replacementvalue)
//this method will modify the original array
       //! for delete
let arr5=[10,20,30,40,50,60,70]
arr5.splice(1,2);
console.log(arr5);

           // ! for update
let arr6=[10,20,30,40,50,60,70]
arr6.splice(1,2,500)
console.log(arr6);
         //! add
let arr7=[10,20,30,40,50,60,70]
arr7.splice(2,0,25)
console.log(arr7);

//! variable hoisting
// if we are acessing any variable before its declaration ,an dthe variable has declared by var keyword then this part will moving to the top 
//and it will give the output as undefined .it is called variable hoisting
// variable hoisting is  possible  for only var keyword not let and const
console.log(r)
let r
console.log(g)
var g
//! 




 
 
 

