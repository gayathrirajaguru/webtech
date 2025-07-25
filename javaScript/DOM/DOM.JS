//! how to Target elements
// Target by the id
 let logo=document.getElementById("logo");
 console.log(logo);
 // Target by the class ------->returntype is array

 let boxes=document.getElementsByClassName("box")
 console.log(boxes);
 let secondBoxes=boxes[1]
 console.log(secondBoxes);
 // Target by the tag name
 let list=document.getElementsByTagName('li')
 console.log(list);
 let thridList=list[2]
 console.log(thridList);

 let login=document.getElementsByClassName('btn')
 console.log(login);
 console.log(login[0]);
 // whenever we are given tagname and classname it will give htmlcollection as the returntype
 //if we want particular element give the index
 //!document.querySelector()
 let logo2=document.querySelector('#logo')
 console.log(logo2);
 let li=document.querySelector("li")
 console.log(li);
 //!document.querySelectorAll()
 let boxe=document.querySelectorAll('.box')
 console.log(boxe);
 console.log(boxe[1]);



 //!innerText and innerHTML
 // previous element is replace by the current element what we are written in the innerText or innerHTML
 console.log(secondBoxes.innerText);
 console.log(secondBoxes.innerHTML);


 let thirdBox=boxes[2]
 console.log(thirdBox);
 thirdBox.innerHTML="<h2> I am box3</h2><p> hii how are you</p>"



 //! how to style
 let loginbutton=document.querySelector(".btn")
 console.log(loginbutton);
 loginbutton.style.backgroundColor="blue"
 loginbutton.style.padding="10px"
 loginbutton.style.color="white"


 let section=document.querySelector(".section")
console.log(section);
section.classList.add("con1")
console.log(section.classList);

//! how to create and display the element
let button=document.createElement("button")
button.innerText="button from js"

button.style.backgroundColor="red"
button.style.color="white"
section.prepend(button)

 
 let footer=document.createElement("div")
 footer.innerHTML="<p>end</p>"
 footer.classList.add("footer")
 section.after(footer)

 
 
 
 
 
 
 
 
 
 
 
 
