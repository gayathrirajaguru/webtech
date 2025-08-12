//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//de244b9f99b5aa703863676bfd6a3f93
//https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=de244b9f99b5aa703863676bfd6a3f93

try{
    let getData=async (city) => {
     let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de244b9f99b5aa703863676bfd6a3f93&units=metric`)
    let data=await res.json()
    let location=document.querySelector(".location")
    location.innerText=data.name
    let min=document.querySelector(".min")
    min.innerText=data.main.temp;
    console.log(data);
    
    }
    getData("bangalore")

}catch(err)
{
    console.log(err);
}

let searchButton=document.querySelector("button")
searchButton.addEventListener("click",()=>{
    let input=document.querySelector("input").value
    
    
    
})

    