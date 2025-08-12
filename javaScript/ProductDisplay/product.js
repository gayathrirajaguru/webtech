

let main=document.querySelector("main");
let getdata=async()=>{
    try{
        let fetchedData = await fetch("https://fakestoreapi.com/products");
        console.log(fetchedData); // response

        
        let jsondata = await fetchedData.json();
       
       jsondata.map((item) => {
        console.log(item.title);
        
        let div=document.createElement('div');
        div.innerText=item.title;
             div.classList.add("card")
                console.log(item);
                div.innerHTML=`<img src="${item.image}" alt="">
                <h3>${item.title}</h3>
                <h3>Price: $${item.price}</h3>
                <h3>Category: ${item.category}</h3>`
        main.append(div);
            
        });
        console.log(jsondata); // original data 
    }
    catch(err){
        console.log(err);
    }
    
}
getdata()
/*let main=document.querySelector("main")
let getData=async()=>{
    try{
        let res=await fetch("https://fakestoreapi.com/products");
        let data=await res.json();
        console.log(data);
            data.map((ele)=>{
                let div=document.createElement("div")
                div.classList.add("card")
                console.log(ele);
                div.innerHTML=`
                <img src="${ele.image}" alt="">
                <h3>${ele.title}</h3>
                <h3>Price: $${ele.price}</h3>
                h3>Category: ${ele.category}</h3>`
                main.append(div);
            })
    }
    catch(err){
        console.log("Error:", err);
        
        
    }
}*/ 
