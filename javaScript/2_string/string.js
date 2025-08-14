let str1= "first string"
let str2= 'second string';
let str3=`third string`;
console.log(str1);
console.log(str2);
console.log(str3);
console.log(typeof str1);

//  how to know the length of the string
console.log(str1.length);
//! toUpperCase()
// this method is used to convert any string into uppercase and it will return one new string
let myName='Gayathri'
let upper=myName.toUpperCase()
console.log(upper);
console.log(myName);
//! toLowerCase()
// this method is used to convert any string into lowercase and it will return one new string
let lower=myName.toLowerCase()
console.log(lower);
console.log(myName);
// ! indexOf()
// it is used to know the index of the given character from the string
// it will take first occurance of the given character
// if the character is not present it will give (-1) 

console.log(myName.indexOf("t")); //4
console.log(myName.indexOf("D")); //-1
// ! lastIndexOf
// this method will give the last occurance index number of the given character from the string
console.log(myName.lastIndexOf('a'));
// ! charAt()
// it is used to know the character present in the given index
console.log(myName.charAt(3));
// ! includes()
// this method is used to know whether the given string is present or not
// if it is present it will return true otherwise it will return false.

let msg="hello how are you"
console.log(msg.includes("hello"));
//! trim()
// it is used to remove the whitespace from the both sides of the string and it will return the new string
let mobile='  vivo  ';
console.log(mobile);
console.log(mobile.length);
let mobile2=mobile.trim();
console.log(mobile2);
console.log(mobile2.length);
// ! split()
// this method is used to convert any string into array

let wish="good morning everyone"
let arr=wish.split(" ") // ---> {'good','morning','everyone'}

// ! let arr1=wish.split("") ---> character array {'g','o','o','d'....}
// ! let arr=wish.split() -----> here only element will be present  {'good morning everyone'}

console.log(arr);

// ! replace

//?  it is used to replace one strinh with another string
// it will replace only the occurance of the given string

let information="i am from ranipet"
let replaceString=information.replace("ranipet","vandavasi");
console.log(replaceString);
//! replaceAll

// it will replace all  accurance of the given string 

let replectall=information.replaceAll('a','@')
console.log(replectall);
// ! concat()
// this method is used to combine two or more  than two string and it will return new string
let str4='good afternoon'
let username='gayathri'
let newStr=str4.concat(" ",username)
console.log(newStr);
//! slice()
// it is used to extract one string from another string 
// it will take two parameter ( startindex,endindex)
// it will not include the end index value

let str5='hello how are you'
console.log(str5.slice(1,4)); //--->ell
console.log(str5.slice(6)); //-->how are you
console.log(str5.slice(-7,0)); // -->no output
console.log(str5.slice(-3)); //you
console.log(str5.slice(-3,-1)); // ->yo
//! substring()
// it is used to extract one string from another string 
// it will take two parameter ( startindex,endindex)
// it will not include the end index value


console.log(str5.substring(1,4)); //--->ell
console.log(str5.substring(4,1));//---->ell
console.log(str5.substring(6)); //---> how are you
// ! String interpolation

let num1=10
let num2=20
let add =num1+ num2
console.log(`addition of ${num1} and ${num2} is ${add}`);







 




















       
