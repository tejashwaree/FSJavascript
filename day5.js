//if else
let age =28;
if(age>0 && age<=18){
    console.log("Teen");
}
else if(age>18 && age<60){
    console.log("Adult");
}
else if(age<0){
    console.log("user entered ibvalid age")
}
else{
    console.log("Sinior citizen")
}

//switch case
let day = 'Tu';
switch(day){
    case 'M':{
        console.log("Monday");
        break;
    }
    case 'Tu':{
        console.log("Tuesday");
        break;
    }
    case 'W':{
        console.log("Wednesday");
        break;
    }
    case 'Th':{
        console.log("Thursday");
        break;
    }
    case 'F':{
        console.log("Friday");
        break;
    }
    case 'St':{
        console.log("Saturday");
        break;
    }
    default:{
        console.log("Invalid Input");
    }
}

//ternary operator
let ag = 28;
let agegroup;

//ag<=18? console.log("Teen"): console.log("Adult")
agegroup = ag>=18? "Adult" : "Teen";
console.log(agegroup);


//for loop
for(let i=0; i<5;i++){
    console.log("HI");
}

//while
let age1 =5
while(age1>0){
    console.log("Bye");
    age1--;
}

//for loop for array
 