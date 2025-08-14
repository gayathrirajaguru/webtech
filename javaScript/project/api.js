let inner=document.querySelector(".inner");
let getdata=async()=>{
    try{
        let fetchedData = await fetch("https://api.github.com/users");
        console.log(fetchedData); // response

        
        let jsondata = await fetchedData.json();
       
       jsondata.map((item) => {
        console.log(item.title);
        
        let div=document.createElement('div');
        div.innerText=item.login;
             div.classList.add("con")
                console.log(item);
                div.innerHTML=`<img src="${item.avatar_url}" alt="">
                <h2>${item.login}</h2>

               <a href="${item.html_url}" target="_blank">View Profile</a>`
        inner.append(div);
            
        });
        console.log(jsondata); // original data 
    }
    catch(err){
        console.log(err);
    }
    
}
getdata()


