//this function will accept 2 numbers & it will perform calculation
/* 
sum
minus
dividmultiply
*/


//Higher order function
//a) Assign a function toa variable
// const result1 = function calculate(a,b){



// }
/*
//b) you can pass one function as argument into another function
function calculate(a,b,fn){

return fn(a,b);

}



function expression - 
we can't get the answer ,if  the function is not declared previously then  function cant be added as argument
To get we have to declare the function before calling it in an argument

const sum = (a,b) => {
    return a+b;
}
*/


//function declarartion- we can use this function as argument
function outputName(){

    return function sum(a,b){
        let c =a+b;
        console.log(c);
    }
}

const r = outputName();
//console.log(r)- //[Function: sum]
console.log(`output is ${r}`);
// // output is function sum(a,b){
//     let c =a+b;
//     console.log(c);
// } 

r(2,3)// calling the fucntion sum with variable


