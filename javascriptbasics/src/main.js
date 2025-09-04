console.log(1===1);
let a = 20;
let b = "20";
console.log(a===b);


// primetive type data types are immutable and pass by value, 
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


//********************************************************object ***************************//

// object literal 

const information = {
    name :"Gaurav",
    age:30,
    phoneno: "1234567890",
    isMarried : true,
    profession : "Software Engineer",
    friends : ["amar","amit","sakshi"],
    address :{
        flatno:"201",
        street : "Magarpatta road",
        city: "pune",
        pincode:"415002"
    },
    getinformation : function(){
        console.log("age"+this.age+" \nName: "+this.name+" \nAddress: "+this.address.street)
    },
    // another way to write function in object
    getInformation1(){
        console.log("AAge"+this.age+" \nName: "+this.name+" \nAddress: "+this.address.street)
    }
}

console.log(information.getinformation())
console.log(information.getInformation1())



//object fiunction constructor.

let info1 = new Object()

console.log(info1

)



/// mutability and pass by reference or address.
// objects are mutable.

let myInfo = {name :"gaurav",lastname:"shinde"}
let abhishekInfo = {name:"Abhishek",lastname :"roshan"}

abhishekInfo = myInfo;
console.log(abhishekInfo)// this is mutability.

abhishekInfo.age = "30"
console.log(abhishekInfo)
console.log(myInfo)
// here even if i manipulated abhishekinfo ,since they have same address so all the keys are assigned to that particular object in memory.

const anotherInfo = {}

console.log(Boolean(myInfo===abhishekInfo))// this is same beacause they have same address
// expamples for primitive datatypes
let name = "gaurav"
let name2 ='shinde'
console.log(Boolean(name === name2))// this is not false because they have different address



//Dynamic Properties.
// this helps to manipulate the key from object
let ageKey = "jda"

const information6 ={
    name :"Gaurav",
    [ageKey]:30,
    phoneno: "1234567890",
}

console.log(information6)

const trainerInfo ={
    trainer : "jdhjadja",
    id :"123456",
    phoneno :"1234567890",
    city :"pune",
    currentCourse :"JS-React",
    courseFee :{js :500,react:500,angular:500}
}


console.log(trainerInfo)

// destructuring the object
// destructuring happens on left hand side and object will be on right hand side

//eg.

let {trainer,id,courseFee} = trainerInfo
console.log(trainer)// here we destructured the object and the name must be same to the key from object 
console.log(courseFee)
let {js,react:coursename,angular} = courseFee // for renameing we use react:coursename coclon
console.log(coursename)

// (...resObject ) this is used to get rest of the parameter.
const trainerInfo2 ={
    trainer1 : "jdhjadja",
    id1 :"123456",
    phoneno1 :"1234567890",
    city1 :"pune",
    currentCourse1 :"JS-React",
    courseFee1 :{js :500,react:500,angular:500}
}
let {trainer1,id1,...resObject} = trainerInfo2 // here resObject will contain all the parameters excpet already defined
console.log("******************************res")
console.log(resObject)




//key via for loop

console.log("***********for loop***********")

for(let prop in trainerInfo2){
    console.log("object key ->"+prop)
    console.log("object value using key"+trainerInfo2[prop])
}


// value existance (means the value in the object exists or not)

console.log(Object.values(trainerInfo2))
console.log(Object.values(trainerInfo2).includes("pune"))

// same for key exixtance
console.log("**************key existance***********************")
console.log(Object.keys(trainerInfo2))

console.log(Object.keys(trainerInfo2).includes("trainer1"))
console.log(trainerInfo2.hasOwnProperty("city1")) 

// the method that are used with instance are called as instance properties
// the properties that are mentioned in the Class of object are called prototype properties





//********************************object property and value update************************//

console.log("*******************object property and value update*******************")
const courseInfo = {
    trainer : "jdhjadja",
    id :"123456",
    phoneno :"1234567890",
    city :"pune",
    currentCourse :"JS-React",
    courseFee :{js :500,react:500,angular:500}
   
}

console.log(courseInfo)
courseInfo.trainer = "gaurav"
courseInfo.profession = "trainer"
console.log(courseInfo)


/// function to update and add the key value in object

function addOrUpdate(key,value){
    courseInfo[key] = value
    console.log(courseInfo)
}

addOrUpdate("country","India")


// Object remove property


const courseInfo2 = {
    trainer : "jdhjadja",
    id :"123456",
    phoneno :"1234567890",
    city :"pune",
    currentCourse :"JS-React",
    courseFee :{js :500,react:500,angular:500}
   
}

const {trainer:trainername, ...restCourseInfo} = courseInfo2

// this is the easiest way the remove the property 
console.log(restCourseInfo)



// Object Cloning shallow copy (Objects 1st level) and deep copy(nested level)


const courseInfo3 = {
    trainer : "jdhjadja",
    id :"123456",
    phoneno :"1234567890",
    city :"pune",
    currentCourse :"JS-React",
    courseFee :{js :500,react:500,angular:500}
   
}


const courseInfoClone = courseInfo3
// if we use above method then courseInfoClone and courseInfo3 will have same address assigned 
// so when you wiill manipulate courseInfoClone object then all the changes will be reflected in courseInfo3 too.

// so to resolve it we use

const courseInfoClone2 = Object.assign({},courseInfo3)// this will make the copy of the object and will have different addresses assigned 
courseInfoClone2.id = "1230"
courseInfoClone2.courseFee.js = 50000 // here the this is nested object of the object so it remains same for both the object where its copied from .
console.log(courseInfoClone2)
console.log(courseInfo3)


// how to dealwith deep copy of object

// JSON : JavaScript Object Notation
console.log("***************json**********")// here after JSON parsing and all, we can clone the whole object without distrubing the main Object
let courseinfojson = JSON.stringify(courseInfo3);
let courseinfofromJson = JSON.parse(courseinfojson)
courseinfofromJson.trainer = "Shinde"
courseinfofromJson.courseFee.react= 100000
console.log(courseInfo3)
console.log(courseinfofromJson)

