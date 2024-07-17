//Task1

function evenOdd(num) {
  if (num % 2 == 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
};
evenOdd(5);

//Task2
function square(num) {
    return res=num*num;
};
console.log(square(6));

//Task 3
const max=function(num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}
console.log(max(8,2),"is Maximum");


//Task 4
const concat=function(str1,str2){
    return str1+str2;
}
console.log(concat("Tejas","Dherange"));

//Task 5
const sum=(num1,num2)=>{
    return num1+num2;
}
console.log(sum(2,9));

//Task 6

const specific=(str)=>{
   return str.includes("e")
}
console.log(specific("Tejas"));

//Task 7

const def=function(num1,num2=8){
    return num1*num2;
}
console.log(def(5,9));
console.log(def(5));

//Task 8
const greet=function(name,age=18){
    return `Hello ${name} , you are ${age} !`
}
console.log(greet("Tejas"));
console.log(greet("Tejas",20));

//Task 9
const higher=function(lower,num){
    return lower()+num;
}
const lower=function(){
    return 9;
}
console.log(higher(lower,5));

//Task 10
function higher1(f1,f2){
    return function(value){
        return f2(f1(value));
    }
}
function add(n){
    return n+10;
}
function multy(n){
    return n*3;
}
const addmulty=higher1(add,multy);
const res1=addmulty(6);
console.log(res1);