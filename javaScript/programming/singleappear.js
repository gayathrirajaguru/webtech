let a=[1,2,3,3,2,4,1]
let count=0;
for(let i=0;i<a.length;i++){
    count=count^a[i]
    // same number in ^ --------->0^0--->0
    //differ number in ^ -------->0^2---->2
    
}
console.log(count);
let count1=0
for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length;j++){
        if(a[i]==a[j]){
            count++
        }

    }
    
    
}



