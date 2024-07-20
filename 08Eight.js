// Task1 
let name1="Tejas"
let age=19
console.log(`My name is ${name1} and age is ${age} !`);

// Task 2
let str=`Lorem ipsum dolor sit amet.
 Lorem ipsum dolor sit amet.

 Lorem ipsum dolor sit amet.
`
console.log(str);

// Task 3
let arr=[1,2,3,4,5,6]
let [a,b]=arr;
console.log(a,b);

// Task 4
let book={
    title: "Atomic Habits",
    author: "James clear",
    year: 1986
}

let {author , title}=book;
console.log(title," written by ",author);

// Task 5
let arr1=[1,2,3,4,5,6,7]
let arr2=[...arr1,8,9,10]
console.log(arr2);

// Task 6
let arr3=[1,2,3,4,5,6,7,8,9,10]
let res=arr3.reduce((acc,curr)=>acc+curr,0)
console.log(res);


// Task 7
let par=function(num1,num2=1){
    return num1*num2;
}
console.log(par(5,6));
console.log(par(5));

// Task 8
// In this we have written variables outside ,
// we can also use inside the object with same variable name
const first="Tejas"
let last="Dherange"

const names={
    // first:"Tejas",
    // last:"Dherange",
      first,
      last,
     
    
    greet:function(){
       return (` my full name is ${this.first} ${this.last}`);
    }
}

console.log(names);
console.log(names.greet());

// Task 9

const key1="name"
const key2="age"

const obj={
    [key1]:"Tejas",
    [key2]:19
}
console.log(obj);
console.log(obj.name);