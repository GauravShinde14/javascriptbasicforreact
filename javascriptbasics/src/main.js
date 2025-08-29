console.log(1===1);
let a = 20;
let b = "20";
console.log(a===b);



// ***************************************** if statement ****************************************
const condition = true;

if(condition){
    let a =100;
    console.log(a)
}


const number = 1000;
let result;

if(number == 100){
    result = "one success"
    console.log(result)
}else if(number == 10000){
    result = "two success"
    console.log(result)
    
}else{
    
    result = "no success"
    console.log(result)

}

    // ternary operator or statement
    
    // let result = exp 1 ? code1 : code2 ;
let num = 100;
    let result2 = num ==100 ? "success"  : "failure"
    console.log(result2);



// **********************************switch statements*****************************************

let switch1 = 20;

switch(switch1){

    case 10 :
        console.log(switch1 +"executed")
        break

    case 20 :
        console.log(switch1 +"executed")
        break

    case 30 :
        console.log(switch1)
        break

    case 40 :
        console.log(switch1)
        break

    default :
        console.log("no match")
        break
}



// datatypes(Number,String, boolean, undefined, null)


//********************* Number **************************************



// literals
const number1 = 600;
console.log(number1) 

// type consversion 

console.log(Number(99));// we can also create the number by using this.
console.log(Number("99"))// this also helps in type conversion

// constructor syntax


console.log(new Number(1000)) // this creates the object which has key-pair value.



// floating number 
// here the floating number can be tricky , it can make the calculations wrong because of IEEE coding standards.
const floatingNumber =66.33


// NaN (Not a number)

console.log(Number.isNaN(90))
 
console.log(Number(2e2))

// type checking.
let test= "10";
console.log(typeof test)

// instance 
let instanceVaribale = new Number(10)
console.log( instanceVaribale instanceof Number);// returns true or false


// function constructor 
// constructor can only be a constructor when it has new keyword before it.
// eg. new FunctionName() // this will be the fucntion constructor.
// it has two properties 1.constructor 2.Prototype.







// ****************** String Datatype ********************

// String literal

let greet ="good morning";
console.log(greet)


//immutability .
// primary literals are imutable.
// =  sign reassigns the address.


// String has many properties which helps us to manipulate the string.
// eg .slice , .replace, .indexOf, .includes, .tirm()




// boolean 

const isMarried = true;


// *************************************Functions ************************************************


// function FunctionNAme(){
// }

function addfunction(){
    console.log("this is add function")
}

addfunction();

// parameterized functions.

function sub(num1 ,num2){
    let ans = num1 - num2;
    console.log("the substraction is "+ans);
}

sub(15,10)


//anonymous funxtion or Function expression

const addExpression = function (){
    console.log("this is fucntiojn")
}


console.log(addExpression)

// fucntions are object in javascript .
// we can call the fucntion and additionally we can treat this as object means we can read property and attach property.



// arrow fucntion or short fucntion (was introduced in ES5).

let greett = (greet) =>{
    console.log(greet)
}

const anotherArrowFunction = ()=> console.log("this is short arrow fucntion")

greett("this is arrow function")
anotherArrowFunction()

// in this fucntion keyword is removed