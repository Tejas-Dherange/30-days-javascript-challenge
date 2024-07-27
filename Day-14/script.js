//Task 1,2

class Person{
    constructor(name,age,surName){
        this.name=name;
        this.surName=surName;
        this.age=age;
    }
    update(age){
        return this.age=age;
    }
    greet(){
        return `Hello ${this.name} you are ${this.age} !`
    }
    
}
const obj=new Person("Tejas",19);
console.log(obj.greet());
console.log(obj.update(23));


//Task 3,4
class Student extends Person{
    constructor(name ,age,studentId){
        super(name,age);
        this.studentId=studentId;
    }
    greet(){
        return `Hello ${this.name} you are ${this.age} and your ID is ${this.studentId} !`
    }
}

const obj1=new Student("Tejas0",18,175);
console.log(obj1.greet());

// Task 5
class Person1{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    
    static greet(){
        return `Hello ${this.name}  !`
    }
}
console.log(Person1.greet());

//Task 6
class Student1 extends Person{
    constructor(name ,age,studentId){
        super(name,age);
        this.studentId=studentId;
        Student1.count++;
    }
    greet(){
        return `Hello ${this.name} you are ${this.age} and your ID is ${this.studentId} !`
    }


    static count=0;
}
const std1=new Student1("hgy",12,123)
const std2=new Student1("djvb",15,456)
const std3=new Student1("djjf",14,789)
console.log(std1.greet());
console.log(Student1.count);


//Task 7
class Person2{
    constructor(name,age,surName){
        this.name=name;
        this.surName=surName;
        this.age=age;
    }
    update(){
        return this.age=56;
    }
    greet(){
        return `Hello ${this.name} you are ${this.age} !`
    }
    get fullName(){
        console.log(`Full name is ${this.name} ${this.surName}`);
    }
    set fullName(name1){
        const [name,surName]=name1.split(' ');
        this.name=name;
        this.surName=surName;
    }
}
const obj2=new Person2("Tejas",18,"Dherange")
obj2.fullName;
obj2.fullName='GUujjfb nvhbkjfkj'
obj2.fullName;


//Task 9,10
class Account{
     #balance=0;

     constructor(inBalance) {
        if(inBalance>0){
            this.#balance=inBalance;
        }else{
            throw new Error("Initial balance cant be negative")
        }
     }

     deposite(amt){
        this.#balance+=amt;
     }

     withdraw(amt){
        this.#balance-=amt;
     }

     getBalance(){
        return this.#balance;
     }
}

const bank=new Account(1000);
console.log(bank.getBalance())
bank.deposite(5000)
console.log(bank.getBalance())
bank.withdraw(3000)
console.log(bank.getBalance())
