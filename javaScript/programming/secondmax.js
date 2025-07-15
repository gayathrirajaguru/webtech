let a=[10,4,1,7,8,5]
let first=-Infinity;
let second=-Infinity;
for(let i=0;i<a.length;i++){
    if(a[i]>first){
        
        second=first
         first=a[i];
    }
    else if(a[i]>second && a[i]!=first)
    {
        second=a[i]
        
        


    }
}
    console.log(second);
        

            
        

    


