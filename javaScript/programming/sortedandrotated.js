let isSorted=(arr)=>{
    let count=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]>arr[i]){
            count++;

        }
    }
    if(arr[arr.length-1]>arr[0]){
        count++;
    }
   if(count==1){
    console.log("sorted and rotated");
    
   }
   else{
    console.log("not sorted and rotated");
    
   }
    
}
let a=[5,6,1,2,3,4]
let b=[13,10,11,12]
let c=[5,6,7,8]
let d=[1,4,6,5,7]
isSorted(a)
isSorted(b)
isSorted(c)
isSorted(d)