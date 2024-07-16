// Task 1
let num = -5;
if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// Task 2
const age = 19;
if (age >= 18) {
  console.log("You are eligible for voting");
} else {
  console.log("You are not eligible for voting");
}

// Task 3
let a = 3;
let b = 4;
let c = 5;
if (a >= b && a >= c) {
  console.log(`${a} is greater among three`);
}
if (b >= a && b >= c) {
  console.log(`${b} is greater among three`);
}
if (c >= a && c >= b) {
  console.log(`${c} is greater among three`);
}

//Task 4
let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Enter valid day number");
    break;
}

// Task 5
let marks = 9;
switch (true) {
  case marks >= 90:
    console.log("A");
    break;
  case marks >= 80:
    console.log("B");
    break;
  case marks >= 70:
    console.log("C");
    break;
  case marks >= 60:
    console.log("D");
    break;
  case marks >= 50:
    console.log("F");
    break;

  default:
    console.log("Failed");
    break;
}

//Task 6
let number = 9;
let res = number % 2 == 0 ? "Number is even" : "Number is odd";
console.log(res);

//Task 7
let year = 2001;
if ((year % 4 == 0 && year !== 100) || year % 400 == 0) {
  console.log(`${year} is  leap year`);
} else {
  console.log(`${year} is not leap year`);
}
