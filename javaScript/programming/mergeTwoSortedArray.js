let a=[1,3,5,7,9]
let b=[2,4,6]
let copy=[]
let i,j=0

while(i<a.length && j<b.length){
    if(a[i]<b[j]){
        copy.push(a[i])
        i++
    }
    else{
        copy.push(b[j])
        j++
    }
}

    while(i<a.length){
        copy.push(a[i])
        i++
    }
    while(j<b.length){
        copy.push(b[j])
        j++
    }
console.log(copy);


