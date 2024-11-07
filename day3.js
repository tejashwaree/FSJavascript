/*
let thirdName = "third"; //block scope
const fourthName = "fouth";

//basic operation
let num1 = 2;
let num2 = 3;
let num3 = (num1)**(num2);  2^3 =8, to indicate ^ we use "**"



let n1 = ++num1; //calculate & then assign
let n2 = num1++;   //assign & then calculate

console.log(n1);  //3
console.log(n2);  //3
console.log(num1);  //4

//num1 = num1 +10;
num1/=10;
num1 = num1+10;

console.log(num1);  //14

*/

/*
//data type conversion: Manual , Automatic [Coercion]
// Number & String

let age = 70;  //number
let friendsAge = '30'; //String

//Number -> String
//Manual:
let sAge = String(age);
console.log(sAge);  //70
console.log(typeof sAge);  //string  = 70 , "70"

let nextyearAge = sAge + 1;  //string + number , "70"+ "1" = 701

console.log(nextyearAge);  //701
console.log(typeof nextyearAge); //String

//String -> Number
*/

/*
//String to a number:
let rollNo = "Akhil";// String  , typeconversion error, ascii

let numRollNo = Number(rollNo);

//numRollNo= numRollNo+2;

console.log(numRollNo+1);  //NaN : Not a Number
//console.log(typeof numRollNo);  // number, 
*/


/*
//undefined vs Not Defined
let fn;
console.log(fn);
console.log(typeof fn);

console.log(ln);  //undefined
*/


//Truthy & Falsy
/*
//Falsy: those values which are not false, but will get converted to false if coverted to boolean.
let age =7.88768752347;  // numbers: -> boolean false :  0 , NaN
let isValid = Boolean(age);
console.log(isValid);  
console.log(typeof isValid);  //boolean;
console.log(typeof age); // number
*/

/*
let firstName = 'Akhil';  //empty are considered as false, but space strings are considered as true
console.log(Boolean(firstName));

*/
let lg = null;
console.log(Boolean(lg));