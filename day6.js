/*Types of function
1 Arrow function
2 callback function
3 normal function(Function declarartion)
4 Anonymous fuction (Dunction expression)
5 Constructor function
6 Higher order functions

here in JS no need to mention return type, datatype of variable
eg- 
function name(a, b){
 return a+b
}
*/
/*
//1- Function declarartion- with function keyword- function nam, argument and body
function sum(a,b){
let c =a+b;
console.log(`Output is ${c}`);
}

//function calling
sum(1,2);


//2 function expression - assigning a function to constant variable, it has function keyword, but not function name, that why to assignn value the function is assigned to a consta variable
//Anonymous function- without name of function
const sum2 = function (a,b){
    let c= a+b;
    console.log(`The sum of ${a}, ${b} is ${c}`);
}

sum2(3,4);

const sum3 = sum2;
sum3(5,6);

//Arrow function - part of Function expression
//special form of anonymous function
const add = (a,b) =>{
    let c = a+b;
    console.log(`Output is ${c}`);
}

add(3,7);

const primNum = ()=>{
    console.log("teju");
}

primNum();

console.log(sum3); //[Function: sum2]
console.log(sum2); //[Function: sum2]
console.log(typeof sum);// function
*/
//functions in JS are treated as varibale only
//in arrow function if you have 1 line of code then you can directly write it withour {}

const firstname = () => "Teju ajbale";

firstname();
console.log(firstname);//[Function: firstname]
console.log(typeof firstname);//function
console.log(typeof firstname()); //undefined
console.log(firstname());

const age = function(yr){
    let realage = 2024 -yr;
    return realage;
}
age(1970);

const age2 = (yr)=> {
    let realage = 2024 -yr;
    return realage;
}

const age3 = (yr) => 2024-yr;// here though we didnt return anything but the expression get solved and assigned to variable age3, here age3 acts like whtever assigned to it
// to retuen the value we have to use (return 2014-yr) to return value,
// const age3 = (yr) => (return 2024-yr);
console.log(age3(1980));
console.log(age3);
console.log(typeof age3);
console.log(typeof age3(1989));