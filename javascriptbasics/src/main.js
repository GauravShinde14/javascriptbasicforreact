// console.log(1===1);
// let a = 20;
// let b = "20";
// console.log(a===b);


// // primetive type data types are immutable and pass by value, 
// // ***************************************** if statement ****************************************
// const condition = true;

// if(condition){
//     let a =100;
//     console.log(a)
// }


// const number = 1000;
// let result;

// if(number == 100){
//     result = "one success"
//     console.log(result)
// }else if(number == 10000){
//     result = "two success"
//     console.log(result)
    
// }else{
    
//     result = "no success"
//     console.log(result)

// }

//     // ternary operator or statement
    
//     // let result = exp 1 ? code1 : code2 ;
// let num = 100;
//     let result2 = num ==100 ? "success"  : "failure"
//     console.log(result2);



// // **********************************switch statements*****************************************

// let switch1 = 20;

// switch(switch1){

//     case 10 :
//         console.log(switch1 +"executed")
//         break

//     case 20 :
//         console.log(switch1 +"executed")
//         break

//     case 30 :
//         console.log(switch1)
//         break

//     case 40 :
//         console.log(switch1)
//         break

//     default :
//         console.log("no match")
//         break
// }



// // datatypes(Number,String, boolean, undefined, null)


// //********************* Number **************************************



// // literals
// const number1 = 600;
// console.log(number1) 

// // type consversion 

// console.log(Number(99));// we can also create the number by using this.
// console.log(Number("99"))// this also helps in type conversion

// // constructor syntax


// console.log(new Number(1000)) // this creates the object which has key-pair value.



// // floating number 
// // here the floating number can be tricky , it can make the calculations wrong because of IEEE coding standards.
// const floatingNumber =66.33


// // NaN (Not a number)

// console.log(Number.isNaN(90))
 
// console.log(Number(2e2))

// // type checking.
// let test= "10";
// console.log(typeof test)

// // instance 
// let instanceVaribale = new Number(10)
// console.log( instanceVaribale instanceof Number);// returns true or false


// // function constructor 
// // constructor can only be a constructor when it has new keyword before it.
// // eg. new FunctionName() // this will be the fucntion constructor.
// // it has two properties 1.constructor 2.Prototype.







// // ****************** String Datatype ********************

// // String literal

// let greet ="good morning";
// console.log(greet)


// //immutability .
// // primary literals are imutable.
// // =  sign reassigns the address.


// // String has many properties which helps us to manipulate the string.
// // eg .slice , .replace, .indexOf, .includes, .tirm()




// // boolean 

// const isMarried = true;


// // *************************************Functions ************************************************


// // function FunctionNAme(){
// // }

// function addfunction(){
//     console.log("this is add function")
// }

// addfunction();

// // parameterized functions.

// function sub(num1 ,num2){
//     let ans = num1 - num2;
//     console.log("the substraction is "+ans);
// }

// sub(15,10)


// //anonymous funxtion or Function expression

// const addExpression = function (){
//     console.log("this is fucntiojn")
// }


// console.log(addExpression)

// // fucntions are object in javascript .
// // we can call the fucntion and additionally we can treat this as object means we can read property and attach property.



// // arrow fucntion or short fucntion (was introduced in ES5).

// let greett = (greet) =>{
//     console.log(greet)
// }

// const anotherArrowFunction = ()=> console.log("this is short arrow fucntion")

// greett("this is arrow function")
// anotherArrowFunction()

// // in this fucntion keyword is removed


// //********************************************************object ***************************//

// // object literal 

// const information = {
//     name :"Gaurav",
//     age:30,
//     phoneno: "1234567890",
//     isMarried : true,
//     profession : "Software Engineer",
//     friends : ["amar","amit","sakshi"],
//     address :{
//         flatno:"201",
//         street : "Magarpatta road",
//         city: "pune",
//         pincode:"415002"
//     },
//     getinformation : function(){
//         console.log("age"+this.age+" \nName: "+this.name+" \nAddress: "+this.address.street)
//     },
//     // another way to write function in object
//     getInformation1(){
//         console.log("AAge"+this.age+" \nName: "+this.name+" \nAddress: "+this.address.street)
//     }
// }

// console.log(information.getinformation())
// console.log(information.getInformation1())



// //object fiunction constructor.

// let info1 = new Object()

// console.log(info1

// )



// /// mutability and pass by reference or address.
// // objects are mutable.

// let myInfo = {name :"gaurav",lastname:"shinde"}
// let abhishekInfo = {name:"Abhishek",lastname :"roshan"}

// abhishekInfo = myInfo;
// console.log(abhishekInfo)// this is mutability.

// abhishekInfo.age = "30"
// console.log(abhishekInfo)
// console.log(myInfo)
// // here even if i manipulated abhishekinfo ,since they have same address so all the keys are assigned to that particular object in memory.

// const anotherInfo = {}

// console.log(Boolean(myInfo===abhishekInfo))// this is same beacause they have same address
// // expamples for primitive datatypes
// let name = "gaurav"
// let name2 ='shinde'
// console.log(Boolean(name === name2))// this is not false because they have different address



// //Dynamic Properties.
// // this helps to manipulate the key from object
// let ageKey = "jda"

// const information6 ={
//     name :"Gaurav",
//     [ageKey]:30,
//     phoneno: "1234567890",
// }

// console.log(information6)

// const trainerInfo ={
//     trainer : "jdhjadja",
//     id :"123456",
//     phoneno :"1234567890",
//     city :"pune",
//     currentCourse :"JS-React",
//     courseFee :{js :500,react:500,angular:500}
// }


// console.log(trainerInfo)

// // destructuring the object
// // destructuring happens on left hand side and object will be on right hand side

// //eg.

// let {trainer,id,courseFee} = trainerInfo
// console.log(trainer)// here we destructured the object and the name must be same to the key from object 
// console.log(courseFee)
// let {js,react:coursename,angular} = courseFee // for renameing we use react:coursename coclon
// console.log(coursename)

// // (...resObject ) this is used to get rest of the parameter.
// const trainerInfo2 ={
//     trainer1 : "jdhjadja",
//     id1 :"123456",
//     phoneno1 :"1234567890",
//     city1 :"pune",
//     currentCourse1 :"JS-React",
//     courseFee1 :{js :500,react:500,angular:500}
// }
// let {trainer1,id1,...resObject} = trainerInfo2 // here resObject will contain all the parameters excpet already defined
// console.log("******************************res")
// console.log(resObject)




// //key via for loop

// console.log("***********for loop***********")

// for(let prop in trainerInfo2){
//     console.log("object key ->"+prop)
//     console.log("object value using key"+trainerInfo2[prop])
// }


// // value existance (means the value in the object exists or not)

// console.log(Object.values(trainerInfo2))
// console.log(Object.values(trainerInfo2).includes("pune"))

// // same for key exixtance
// console.log("**************key existance***********************")
// console.log(Object.keys(trainerInfo2))

// console.log(Object.keys(trainerInfo2).includes("trainer1"))
// console.log(trainerInfo2.hasOwnProperty("city1")) 

// // the method that are used with instance are called as instance properties
// // the properties that are mentioned in the Class of object are called prototype properties





// //********************************object property and value update************************//

// console.log("*******************object property and value update*******************")
// const courseInfo = {
//     trainer : "jdhjadja",
//     id :"123456",
//     phoneno :"1234567890",
//     city :"pune",
//     currentCourse :"JS-React",
//     courseFee :{js :500,react:500,angular:500}
   
// }

// console.log(courseInfo)
// courseInfo.trainer = "gaurav"
// courseInfo.profession = "trainer"
// console.log(courseInfo)


// /// function to update and add the key value in object

// function addOrUpdate(key,value){
//     courseInfo[key] = value
//     console.log(courseInfo)
// }

// addOrUpdate("country","India")


// // Object remove property


// const courseInfo2 = {
//     trainer : "jdhjadja",
//     id :"123456",
//     phoneno :"1234567890",
//     city :"pune",
//     currentCourse :"JS-React",
//     courseFee :{js :500,react:500,angular:500}
   
// }

// const {trainer:trainername, ...restCourseInfo} = courseInfo2

// // this is the easiest way the remove the property 
// console.log(restCourseInfo)



// // Object Cloning shallow copy (Objects 1st level) and deep copy(nested level)


// const courseInfo3 = {
//     trainer : "jdhjadja",
//     id :"123456",
//     phoneno :"1234567890",
//     city :"pune",
//     currentCourse :"JS-React",
//     courseFee :{js :500,react:500,angular:500}
   
// }


// const courseInfoClone = courseInfo3
// // if we use above method then courseInfoClone and courseInfo3 will have same address assigned 
// // so when you wiill manipulate courseInfoClone object then all the changes will be reflected in courseInfo3 too.

// // so to resolve it we use

// const courseInfoClone2 = Object.assign({},courseInfo3)// this will make the copy of the object and will have different addresses assigned 
// courseInfoClone2.id = "1230"
// courseInfoClone2.courseFee.js = 50000 // here the this is nested object of the object so it remains same for both the object where its copied from .
// console.log(courseInfoClone2)
// console.log(courseInfo3)


// // how to dealwith deep copy of object

// // JSON : JavaScript Object Notation
// console.log("***************json**********")// here after JSON parsing and all, we can clone the whole object without distrubing the main Object
// let courseinfojson = JSON.stringify(courseInfo3);
// let courseinfofromJson = JSON.parse(courseinfojson)
// courseinfofromJson.trainer = "Shinde"
// courseinfofromJson.courseFee.react= 100000
// console.log(courseInfo3)
// console.log(courseinfofromJson)


// let corsefee = { js: 500, react: 500, angular: 500 };
// let emptyObject = { ...corsefee };

// console.log(corsefee);
// console.log(emptyObject);


// //***************************object merging */

// console.log("***************************object merging *")

// const courseInfo4 = {
//     trainer : "jdhjadja",
//     id :"123456",
//     phoneno :"1234567890",
//     city :"pune",
//     currentCourse :"JS-React",
    
   
// }

// let courseFeee ={js :500,react:500,angular:500}
// const moreinfo = {
//         tech :"react",
//         salary :"2000000"
// }
// const nestedObject = Object.assign({},courseInfo4,{courseFeee});
// console.log("_----------------------nested object")
// console.log(nestedObject)
// // another way of nestedd object 
// console.log("_----------------------nested object2  ")
// const nestedObject2 = ({...courseInfo4,courseFeee,moreinfo})
// console.log(nestedObject2)


// const mergedObject = Object.assign({},courseInfo4,moreinfo,{slot:"morning"});

// console.log(courseInfo4)
// console.log(moreinfo)
// console.log(mergedObject)


// // another way is 

// const mergedObject2 = {...courseInfo4,...moreinfo,slot:"morning",time:"9.00 to 11.00"}

// console.log("---------------------------------------------------------------------------")



// //************object type checking  */


// let courseFee1 ={js :500,react:500,angular:500}
// console.log(typeof courseFee1)
// console.log(typeof [])


// console.log(Object.prototype.toString.call(courseFee1))
// console.log(Object.prototype.toString.call(1))
// console.log(Object.prototype.toString.call("fshfjdjh"))
// console.log(Object.prototype.toString.call(null))
// console.log(Object.prototype.toString.call(undefined))
// console.log(Object.prototype.toString.call( new Date()))



// ///**********************************************iteration of object (imperative way)*/


// const courseInfo = {
//     trainer : "Sarang Jain",
//     id :"123456",
//     phoneno :"1234567890",
//     city :"pune",
//     currentCourse :"JS-React",
    
   
// }

// for(let prop in courseInfo){
//     console.log(prop)
//     console.log("this is value->",courseInfo[prop])
// }

// // to check if the specific property is in the object or not for eg

// if("trainer" in courseInfo){
//     console.log("yes its present and its value is ",courseInfo["trainer"])
// }




// //**********************looping objects in declarative way  */ // declarative way focuses directly for the output and on other hand imperative way focuses on steps involved in achieveing the output .



// const courseInfo = {
//     trainer : "Sarang Jain",
//     id :"123456",
//     phoneno :"1234567890",
//     city :"pune",
//     currentCourse :"JS-React",
// }

// let courseInfoKeys = Object.keys(courseInfo)
// console.log(courseInfoKeys)

// courseInfoKeys.forEach((element)=>{
//     console.log(element)
//     console.log('this is imperaative way to get values and keys ',courseInfo[element])
// })



// // ******************************Array in depth ************************/
// // array are special kind of object that  are ordered data sturcture.
// // objects --> theey are unordered data structure.

// // let numbers = [1,2,3,4,5,6]// prefered way array litetal.
// // console.log(numbers)

// const myInformation = ["gaurav","shinde",24,18000]
// console.log(myInformation)
// console.log(myInformation[myInformation
//     .length-1]
// )

// for(let i in myInformation){
//     console.log(myInformation[i])
// }

// const clone = myInformation
// clone.push("react")
// console.log(clone)
// console.log(myInformation)

// // these are passed by reference so if we chnage one array it will reflect in other too

// console.log(myInformation === clone) // output-> true // because they are pointing to same address


// myInformation.forEach((i)=>{
//     console.log(i)
// })

// console.log(new Array(1,2,2)) // not prefered way to create array

// //array is the set of same kind of data type in languages like Java ,c,c++,etc
// // but in Javascript array is the set of any kind of datatypes.
// //eg.let nums = [1,"gaurav",true,null]

//  let numbers = [1,2,3,4,5]

//  //// add last element -mutable way
//  numbers.push(6)

//  // add first element - immutable way
//  const nummber2 = ["vue",...numbers]
//  const number3  = ["js",...nummber2,"react"]

//  console.log(nummber2)
//  console.log(number3)

// // remove element --via mutable way

// const subjects = ["vue","js","react","angular"]
// subjects.shift()
// console.log(subjects)


// // remove last element

// subjects.pop()
// console.log(subjects)


// //[].slice()
// const subjects = ["vue","js","react","angular"]
// const arrayy = subjects.slice(0,2) // returns an array.and it does not affect original array (its immutable) // returns brand new array 
// console.log(arrayy)


// //[].splice()
// // removes the element and returns an array and of necessary insert new element 

// const subjects = ["vue","js","react","angular"]
// console.log(subjects.splice(0,2,"new"))


// // add element in between 
// // mutable way
// const subjects = ["vue","js","react","angular","java","c++"]

// const index = 2;
// const deletecount = 2;
// const  newarray = subjects.splice(index,deletecount,"new")
// console.log(newarray)


// console.log(subjects)


// // via immutable way

// const subjects = ["vue","js","react","angular","java","c++"]

// const index = 2;


// const newarray =subjects.slice(0,index)
// const modifiedarray = [...newarray,"new array",...subjects.slice(index)]
// console.log(modifiedarray)

// console.log(subjects)

// // remove element anywhere.

// // immutable way 

// const subjects = ["vue","js","react","angular","java","c++"]

// // remove first value 
// console.log(subjects.slice(1)) // removed first element 

// // remove last value
// console.log(subjects.slice(0,-1))

// //removing from between or anywhere.

// const index =2

// console.log([...subjects.slice(0,index) ,...subjects.slice(index+1)])


// //finding and searching array items


// const subjects = ["vue","js","react","angular","java","c++"]

// console.log(subjects.indexOf("js"))

// console.log(subjects.includes("dafjk")) // returns true or false


// const subjectsWithId = [
//     {id :1,name :"js"},
//     {id :2,name :"react"},
//     {id :3,name :"java"},
//     {id :4,name :"node"},
//     {id :5,name :"vue"},
//     {id :6,name :"c++"},


// ]

// console.log(subjectsWithId.findIndex((element,index)=>{
//     if(element.name == "java"){
//         // console.log( index,element.name,element.id)
//         return true
//     }
// }),"returns the index of found element")







// array shallow copy and deep copy.


// const subjectsWithId =[
//     "js"
//     ,["v20",500],"react",["v19",500],"angular",["v18",500]
// ]

// with same address.
// let subjectsWithIdClone = subjectsWithId

// subjectsWithIdClone[0] = "something else"
// console.log(subjectsWithIdClone)
// console.log(subjectsWithId)


// using spreadd which gives different address.
// console.log("---------------------spread")
// let subjectsWithIdClone = [...subjectsWithId]

// subjectsWithIdClone[0] = "something else" // this changes the element without changing the first array because it has different address.
// subjectsWithIdClone[1][1] = 20000
// console.log(subjectsWithIdClone)
// console.log(subjectsWithId)

// here this spread does not work on nested array so the deep copy is not possible.
// eg.subjectsWithIdClone[1][1] = 20000 // this changes the value fro both the arrays.



// //for deep copy 


// console.log("---------------------deep copy with JSON")
// let subjectsWithIdClone = JSON.parse(JSON.stringify(subjectsWithId))

// // now beacause of this the nested array element can be changed without changing its original value from array.

// subjectsWithIdClone[0] = "something else" // this changes the element without changing the first array because it has different address.
// subjectsWithIdClone[1][1] = 20000
// console.log(subjectsWithIdClone)
// console.log(subjectsWithId)



///*************************merging the array */


const subjectsWithId =[
    "js"
    ,["v20",500],"react",["v19",500],"angular",["v18",500]
]

const sub1 = [["sagar",500]]
const sub2 = ["nikita",5000]


const mergedArray = [...subjectsWithId,...sub1,...[sub2]]
console.log(mergedArray)

// another way

const mergedArray2 = subjectsWithId.concat(sub1,[sub2])
console.log(mergedArray2)