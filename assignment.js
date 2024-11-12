//1) assign a fucntion to a variable
//2) function expression - function declaration, Arrow functionF, user arrow function
//3) use all 3 fucntion and call the fucntion using variable
//4) Pass a function as argument in a function
//5)call the function
//6)return fucntion from fucntion
//7)call the fucntion



//1) Assigning function as varibale
//Function declarartion
const add = function sum(a,b){
    return a+b;
}

console.log(`addition is ${add(2,3)}`); ///calling function

//Function expression
//Anonymous function
const minus = function (a,b){
    return a-b;
}

console.log(`Sunstarction is ${minus(6,2)}`); //calling function

//Arrow function
const div = (a,b) => a/b;
console.log(`Division is ${div(16,4)}`); //calling function


//Pass function as argument
//Function declaration
function calculate(a,b,sm){
    return sm(a,b);
}

function sum(a,b){
    return a+b;
}

console.log(`Addition is ${calculate(23,34,sum)}`); //calling function


//Anonymous function
const multiply = function (a,b,ml){
    return ml(a,b);
}

const mul = function (a,b){
    return a*b;
}

console.log(`Multiplication is ${multiply(12,3,mul)}`); //calling function

//Arrow function 
const division = (a,b,dv) => dv(a,b);

const divs = (a,v) => a/b;
console.log(`Division is ${division(12,3,div)}`); //calling function

/*
const division2 = (a,b,dv) => dv(a,b);
console.log(`Division is ${division2(12,3,div2)}`);
const div2 = (a,v) => a/b;  // her it will thorugh error as "Cannot access 'div2' before initialization", as it is intitialized after calling function
*/

// Return function from function

// Function declarartion
function firstname (){
    return function fname (a){
        console.log(`Firstname is ${a}`);
    }
}

const fname1 = firstname();
fname1("Teju"); //calling function


//Anonymous function
function lastname (){
    return function (a){
        console.log(`Lastname is ${a}`);
    }
}

const lname = lastname();
lname("Ajbale"); //calling function

//Arrow function
function middlename (){
    return (a)=> console.log(`Middlename is ${a}`);
    
}

const mname = middlename();
mname("Om"); //calling function