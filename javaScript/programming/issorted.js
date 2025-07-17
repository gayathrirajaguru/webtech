let a=[2,3,4,7,1,10]
let flag=true
   
    for(let i=1;i<a.length;i++){
        if(a[i-1]>a[i]){
            flag=false;
            
            break;
        }
    }if(flag==true){
            console.log("sorted");
            
        
        
    }
    else{
        console.log("not sort");
        
    }
