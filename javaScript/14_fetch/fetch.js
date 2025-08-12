 let fetchedData = fetch("https://fakestoreapi.com/product")
  .then((data)=>{
        console.log(data)    // response


        // ! converting into json 

        let jsondata = data.json()

        console.log(jsondata)   // promise 


        jsondata.then((data)=>{
            console.log(data)   // original data 
        }).catch((err)=>{
            console.log(err)
        })
  })
  .catch((err)=>{
        console.log(err)
  })``