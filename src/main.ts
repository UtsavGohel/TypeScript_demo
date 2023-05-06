// let username = "utsav"
// console.log(username);
// console.log("Hello");

// let a : number = 10;
// let b : string = '10';
// let c : number = 100;

// console.log(a/b);
// let myName:string = "utsav"
// let isLoad:boolean;
// let album : any;
// let password : number | string;
// myName = '11'
// isLoad=true
// album = "myname"
// album  = true
// password = "abcd"
// password = 123

// const sum = (a:number,b:number)=>{
//     console.log(a+b);
    
//     return a+b;
// }
// sum(10,20)

//Arrays
// let strArr = ['one','two','utsav']

// let randomArray = [10,'11','abcd',true]

// strArr[0] = 1
// strArr.push('a','b')
// strArr.unshift('1')
// strArr.shift() 
// strArr = randomArray
// let myArr = strArr
// console.log(myArr);

//Tuple
// let myTuple : [string,number,boolean] = ['s',6,true]  

//objects
// let myobj = {
//     name:'utsav',
//     age:20
// }
// console.log(myobj);
// let myobj2 = myobj
// myobj2.age = 22;
// console.log(myobj2,myobj);

//change new copoied object value wihtout affecting orignal object
// let newobj = {
//     name : 'abcd',
//     age : 20
// }
// console.log(newobj);
// let newSpreadObj = {...newobj}
// newSpreadObj.age = 21
// console.log(newobj,newSpreadObj);

//create our own types
// type empInfo = {
//     name:string,
//     empId:number,
//     age:number,
//     address:string
// }
// let empoyeeDetails : empInfo = {
//     name:'Utsav',
//     empId:1,
//     age:20,
//     address:"Rajkot"
// }
// console.log(empoyeeDetails);
// for(let a in empoyeeDetails){
//     console.log(empoyeeDetails[a]);
// }
// const fun = (empoyeeDetails:empInfo)=>{
//     return `Hey ${empoyeeDetails.name}, Welcome You are Working from ${empoyeeDetails.address}`
// }

// console.log(fun(empoyeeDetails));

//Interface
// interface empInfo  {
//     name:string,
//     empId:number,
//     age:number,
//     address:string
// }
// let empoyeeDetails : empInfo = {
//     name:'Utsav',
//     empId:1,
//     age:20,
//     address:"Rajkot"
// }
// console.log(empoyeeDetails);
// for(let a in empoyeeDetails){
//     console.log(empoyeeDetails[a]);
// }
// const fun = (empoyeeDetails:empInfo)=>{
//     return `Hey ${empoyeeDetails.name}, Welcome You are Working from ${empoyeeDetails.address}`
// }

// console.log(fun(empoyeeDetails));

//enum
// enum myenum{
//     q=2,
//     w,
//     s=5,
//     t
// }
// console.log(myenum.t);
