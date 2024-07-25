
// Task 1
import {add} from './add.js'
console.log(add(10,15));


//task2
import { person } from './add.js';
console.log(person);

// Task 3
import {sub,mul} from './add.js'
console.log("Substraction is ",sub(10,9));
console.log("Multiplication is ",mul(10,9));


//Task 4
import div1 from './add.js';
console.log(div1(5,2));

//Task 5
import {Num,Num2,multiple} from "./add.js"
console.log(`${Num}  ,  ${Num2}  ,  ${multiple()}`);

//Task 6 
import l from "lodash";
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = l.chunk(array, 3);
console.log(chunkedArray);

//Task 7
import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    response.data.map((entry)=>console.log(entry.id,entry.title))
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });