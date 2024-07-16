//Task 1
for (let i = 0; i <11; i++) {
   console.log(i);
}

//Task 2
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${i*5}`);
}

//Task 3
let num=1;
let sum=0;
while (num<11) {
     sum+=num;
     num++;
}
console.log(sum);

//Task 4
let num1=10;
while (num1>=1) {
    console.log(num1);
    num1--;
}

//Task 5
let num2=1;
do {
    console.log(num2);
    num2++;
} while (num2<=5);

//Task 6
let num3=6;
let fact=1;
do {
    fact=fact*num3;
    num3--;
} while (num3>=1);
console.log(fact);

//Task 7
for (let i = 1; i <= 5; i++) {
    let patt='';
    for (let j = 1; j <= i; j++) {
        patt+='* ';
    }
    console.log(patt);
}

//Task 8
for (let i = 1; i <=10; i++) {
    if(i==5){
        continue;
    }
    console.log(i);
    
}

//Task 9
let num4=1;
while (num4<=10) {
    if(num4==7){
        console.log("7 detected");
        break;
    }
    console.log(num4);
    num4++;
}