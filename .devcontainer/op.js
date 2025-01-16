let str1="MEHEDI"
let str2=" HASAN"
let str3= str1+str2;
console.log(str3);
//data type summarry
const id=Symbol("123")
const id2=Symbol("123")
console.log(id===id2);//output will be false cause we use symbol
//string
const name="mehedi"
const age = 23
console.log(`hello i am ${name} and i am ${age} years old`)
const gameName =new String("mehedi hasan")
console.log(gameName[0]);//output is m
console.log(gameName[7]);//output is h
console.log(gameName.length);//output is the length of the gameName string whicg is 12
console.log(gameName.toUpperCase());
const newString= gameName.substring(0,4);//print subtring
console.log(newString);
const anotherString= gameName.slice(-8,2);
console.log(anotherString);
const newstring1= "     mehedi      "
console.log(newstring1.trim());//remove useless space 
const url="mehedi123@gmail%20.com"
console.log(url.replace("%20","_"));// replace %20 with _
console.log(url.includes("hasan"));//in url there is no hasan so output is false 
console.log(gameName.split(" "));//convert string into array based on saparater here i use separater as space 








