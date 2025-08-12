let ol=document.querySelector('ol');


let getdata=async()=>{
    try{
        let fetchedData = await fetch("https://fakestoreapi.com/products");
        console.log(fetchedData); // response

        
        let jsondata = await fetchedData.json();
       
       jsondata.map((item) => {
        console.log(item.title);
        
        let li=document.createElement('li');
        li.innerText=item.title;

            ol.append(li) 
            
            
        });
        console.log(jsondata); // original data 
    }
    catch(err){
        console.log(err);
    }
    
}

//! async and await