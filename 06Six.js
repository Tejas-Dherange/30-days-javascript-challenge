//Task 1
let arr=[1,2,3,4,5]
console.log(arr);

//Task 2
console.log(`first ${arr[0]}, last ${arr[arr.length-1]}`);

//Task 3
console.log("Original ",arr);
arr.push(6);
console.log("After push",arr);

//Task 4
console.log("Original ",arr);
arr.pop();
console.log("After pop",arr);

//Task 5
console.log("Original ",arr);
arr.shift();
console.log("After shift",arr);


//Task 6
console.log("Original ",arr);
arr.unshift(1);
console.log("After unshift",arr);

//Task 7
console.log("Array after all operations",arr);
console.log(arr.map((num)=>(num*2))) //it returns a new array cannot change anything in original array
console.log(arr);

//Task 8
console.log("Even numbers",arr.filter(num=>(num%2==0)));

//Task 9
console.log("Reduce method",arr.reduce((acc,curr)=>(acc+curr),0));

//Task 10
console.log(arr," for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Task 11
console.log("For each loop");
arr.forEach(num => {
    console.log(num);
});

//Task 12
let mulArr=[[1,2,3],[4,2,6],[7,8,9]]
console.log(mulArr);
console.log(mulArr[2][1]);
console.log(mulArr.flat(2));//we pass here depth at which we flat the array