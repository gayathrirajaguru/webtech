// ! higherOrder Array Methods
//? 1.forEach()
// forEach is higherOrder array method,it is used for traversing the array
// it will take one callback function where it can take 3 parameters(element,index,array)
let number=[10,20,30,40,50]

number.forEach((ele,index,array)=>{
    console.log(ele,index,array);
})
let arr=[]
number.forEach((ele)=>{
    arr.push(ele+100)

})
console.log(arr);
//! map()
//map() is one higherorder array method ,it is used to traverse the array and we can perform any operation with the elements 
//it will take three parameters
//it will return one new array
let mappedArr=number.map((ele,index,array)=>{
    return ele+100
})
console.log(mappedArr);
//! filter()
//filter() is one of the higherorder method ,it is used to traverse the array and check the condition
//if the condition is matching then it will return the element
//it can take 3 parameter
let a=[5,10,15,20]
let greater=a.filter((ele)=>{
    return ele>10
})
console.log(greater);
 let sum=0
 a.map((ele)=>{
    sum= ele+sum
 })
 console.log(sum);

 //! reduce()
 // reduce () is the higherorder method ,it is used to reducing the array ito single value
 //it can take 4 parameters(acc,ele,index,arr)
 let sum2=a.reduce((acc,ele)=>{
    return acc+ele
 },0)
 console.log(sum2);
 let mul=a.reduce((acc,ele)=>{
    return acc*ele
 },1)
 console.log(mul);
 
 





