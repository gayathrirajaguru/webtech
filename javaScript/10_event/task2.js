let btn=document.querySelector("button")
let form=document.querySelector("form")
btn.addEventListener("click",()=>{
    let div=document.createElement("div")
    let itemLable=document.createElement("label")
    itemLable.innerText="Item"
    div.appendChild(itemLable)
    let itemInput=document.createElement("input")
    itemInput.setAttribute("type","name")
    itemInput.setAttribute("placeholder","Enter the item")
    div.appendChild(itemInput)

    
    
   let quantity=document.createElement("label")
   quantity.innerText="quantity"
   div.appendChild(quantity)
   let quantityInput=document.createElement("input")
   quantityInput.setAttribute("type","number")
   quantityInput.setAttribute("placeholder","Enter the quantity")
   div.appendChild(quantityInput)
   let price=document.createElement("label")
   price.innerText="Price"
   div.appendChild(price)
   let priceInput=document.createElement("input")
   priceInput.setAttribute("type","number")
   priceInput.setAttribute("placeholder","Enter the price")
   div.appendChild(priceInput)
    form.appendChild(div)
})


    btn.addEventListener("click",()=>{
    
    console.log("form Submitted");
    let input=document.getElementsByTagName("input")
    for(let i=0;i<input.length;i++){
        console.log(input[i].value);
    }
        
    })

