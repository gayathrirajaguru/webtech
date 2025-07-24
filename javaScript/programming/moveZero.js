let a=[1,1,0,1,0,0,1,0,1]

let i=0;
let j=0;
while(j<a.length)
{
    if(a[j]==1){
    
   j++
}
else{
    let t=a[j]
    a[j]=a[i]
    a[i]=t
    i++
    j++
}
 console.log(a);
}
 
 
 

   


