
//comparison operator
// >,<,>=,<=
let a =3;
let b=5, c=5;
console.log(a>b);//false
console.log(a<b);//true
console.log(a<=b);//true
console.log(a>=b);//false

//logical operator
// AND-&&, OR- ||, NOT-  !
let gender = 'F';
let age1 = 18;
if((gender == 'M')&&( age1 == 18)){
    console.log("Boy tenager");
}
else{
    console.log("Dont know")
}

if((gender == 'F')||( age1 == 19)){
    console.log("Girl tenager");
}
else{
    console.log("Dont know")
}

if(   !((gender == 'M') || (age1 == 19)) ){  //   !((false)  || (false))   => !(false)  => true
    console.log("Boy Teenager");
} else {
    console.log("Don't know!");
}

//equality operations
//=  //assignment
//==  //loose
//=== //strict

firstName = "Akhil"; //assignment operation , we assign value to a variable

//==  //equality  compare two things, boolean output: true/false
let num1 = 78  //number
let num2 = "78" //string

let num3 = Number(num2);  //"78" --> 78

//loose comparison //JS will convert datatypes if possible
if(num1 == num2){  //(78 == "78"), (78 == 78), (78 == NaN)  //true //not checking the type,  it convert the types where possible//loosly types  
    console.log("Equal");
}else {
    console.log("Not Equal");
}  //Equal


//strict comparison
if(num1 === num2){
    console.log("Equal");// it doent change the type
}else {
    console.log("Not Equal");
}


let firstname = 'Teju';
let lastname = 'Ajbale';
let age =30;
// let prof = "I work at company \n\
// then I attend class from 7-9pm, \n\
// then I spend time with family"

//to add multiline string "/n/" should be added at end of each line
//we have another shortcut to craete multiline string that is '``' back tick

let prof = `"I work at company 
then I attend class from 7-9prof,
then I spend time with family`

//console.log("My name is "+firstname + " "+lastname+ "Age is : "+age+" Profession is : "+ prof);

//another way to write the above experssion with var name directly "${variablename}"
console.log(`My name is "${firstname} ${lastname} , Age is : ${age} , Profession is : ${prof}`);

//Arrays:
//it can store different types of values:  same Data Type[in Java], container
//arrays & list are same?

let subjects = ['teju', 'ashu'];

let names = ["Akhil", 78, true, undefined, null, subjects,     , "jain"       ];// index pos: 0 -> 5 , total values = 6
                //0   1     2      3        4      5       6              7      
names[7]= "Jain";
console.log(names[5]);
console.log(subjects[0]);