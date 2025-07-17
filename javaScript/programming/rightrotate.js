let a=[10,20,30,40,50]
let last=a[a.length-1]
for(let i=a.length-1;i>0;i--){
    a[i]=a[i-1]
}
a[0]=last
console.log(a);
