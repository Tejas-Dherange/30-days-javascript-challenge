
//Task 1
let regex = /JavaScript/g;
let text ="JavaScript is a versatile language. Many developers love JavaScript because it can be used for both frontend and backend development. JavaScript frameworks like React and Node.js are popular in the industry. JavaScript";
let matches=text.match(regex)
console.log(matches);

//Task 2,3,4
let digits = "In 2024, my phone Number is 123-456-7890, and my Zip code is 56789. I have 3 apples, 7 bananas, and 42 oranges.";
console.log(digits.match(/\d+/gd));
console.log(digits.match(/\b[A-Z][a-z]*\b/g));

//Task 5
let text1 = "My phone number is (123) 456-7890.";
let matches1 = text1.match(/\((\d{3})\)\s*(\d{3})-(\d{4})/);
console.log(matches1);

//Task 6
let email="tejas4565@gmail.com";
console.log(email.match(/([\w\.-]+)@([\w\.-]+)/));

//Task 7
console.log(text.match(/^\w+\b/));

//Task 8
console.log(text.match(/\w+\b$/));


//Task 9
let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
let password="Tejas@1234"
console.log(password.match(pass));

//Task 10
let val= /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]{2,}(\/.*)?$/
let URL="https://vjdgumvmisfio.com"
console.log(URL.match(val));