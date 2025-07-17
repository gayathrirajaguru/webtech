let arr=[10,20,30,40,50]
let map1=arr.filter((ele)=>{
    
    return ele>30

})
console.log(map1);
let m=map1.map((ele)=>{
    return ele+100
})
console.log(m);
let r=m.reduce((acc,ele)=>{
    return acc+ele

})
console.log(r);


