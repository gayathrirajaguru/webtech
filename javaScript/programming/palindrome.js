let ispalindrome=(arr)=>{
    /*let reverse=arr.reverse();
    console.log(reverse);*/
    let i=0;
    let j=arr.length-1;
    while(i<=j){
        if(arr[i]!=arr[j])
        {
            return false;
        }
        i++
        j--

        
    }
    return true;
    
}
let a=[1,2,3,2,1]
let b=[1,5,6,4,1]
console.log(ispalindrome(a));
console.log(ispalindrome(b));
 
