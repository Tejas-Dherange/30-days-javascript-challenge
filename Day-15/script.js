
//Task 1
function Outer(){
  let name="Tejas";
  return function inner(){
    console.log("Inner function ",name);
  }
}
let Myname=Outer();
Myname()
  
//Task 2,3
let counter=0;
function increment(){
  return function inc(){
    counter++;
     return counter;
  }
}
let inc=increment();
console.log(inc());
console.log(inc());


//Task 4
function welcome(){
  let name="Tejas"
  return function greet(){
    console.log(`Hello ${name}`);
  }
}
let greet=welcome()
greet()

//Task 5
function task5(){
  let arr=[];
  for (let i = 0; i <6 ; i++) {
   arr.push( ( function(index){
      return function(){
          console.log(index);
      }
    })(i))
  }
  return arr;
}

let dis=task5();
dis[5]()
// console.log(dis());

//Task 6

function modules(){
  let arr=[];
  function push(item){
    arr.push(item);
  }
  function removeItem(index){
    arr.splice(index,1);
  }
  function listItem(){
    return arr;
  }
  return {
    push,
    removeItem,
    listItem
  }
}
let obj=modules();
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
console.log(obj.listItem());
obj.removeItem(2)
console.log(obj.listItem())

//Task 7
function memoize(fn) {
  const cache = {};

  return function(...args) {
      const key = JSON.stringify(args);
      if(cache[key]) {
          return cache[key];
      } else {
          const result = fn(...args);
          cache[key] = result;
          return result
      }
  };
}

function slowFunction(num) {
  // similates a slow computation
  for(let i=0;i<1e6; i++) {

  }
  return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Computed and cached
console.log(memoizedSlowFunction(5)); // Retrieved from cache
console.log(memoizedSlowFunction(10)); // Computed and cached
console.log(memoizedSlowFunction(10)); // Retrieved from cache


//Task 8
function memoizeNew(fn) {
  const cache = {};
  return function(...args) {
      const key = args.toString();
      if(cache[key] !== undefined) {
          return cache[key];
      };
      const result = fn(...args);
      cache[key] = result;
      return result; 
  };
}

function factorial(n) {
  if(n <= 1) {
      return 1;
  }
  return n*factorial(n-1);
}

const memoizeFactorial = memoizeNew(factorial);

console.log(memoizeFactorial(5));
console.log(memoizeFactorial(6));
console.log(memoizeFactorial(5));