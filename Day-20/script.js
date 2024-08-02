{
// Task 1

let name1=document.getElementById("Name");
sessionStorage.setItem("name","Tejas");
name1.innerText=sessionStorage.getItem("name");
let age=document.getElementById("age");
sessionStorage.setItem("age","19");
age.innerText=sessionStorage.getItem("age")


//Task 2
let myData={
    name:"Tejas",
    City:"Pune",
    age:"19"

}

sessionStorage.setItem("UserData",JSON.stringify(myData))
let first=document.getElementById("first");
first.innerText=JSON.parse(sessionStorage.getItem("UserData")).name


//Task 3
let f1=document.getElementById("f1")
f1.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData = {
        username: username.value,
        email: email.value
    };
    
    sessionStorage.setItem("UserData2", JSON.stringify(formData));
}
)
let user=document.getElementById("user");
let mail=document.getElementById("mail");
user.innerText=JSON.parse(sessionStorage.getItem("UserData2")).username;
mail.innerText=JSON.parse(sessionStorage.getItem("UserData2")).email;
}

//Task 4
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name")
console.log(sessionStorage.getItem("name"));

//Task 5
sessionStorage.setItem("name","Tejas")
console.log(sessionStorage.getItem("name"));


//Task 6
let myData2={
    name:"Tejas",
    City:"Pune",
    age:"19"

}

sessionStorage.setItem("UserData3",JSON.stringify(myData2))
console.log(JSON.parse(sessionStorage.getItem("UserData3")))


//Task 7
let username=document.getElementById("username");
let email=document.getElementById("email");

let f1=document.getElementById("f1")
f1.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData = {
        username: username.value,
        email: email.value
    };
    
    sessionStorage.setItem("UserData2", JSON.stringify(formData));
}
)
let user=document.getElementById("user");
let mail=document.getElementById("mail");
user.innerText=JSON.parse(sessionStorage.getItem("UserData2")).username;
mail.innerText=JSON.parse(sessionStorage.getItem("UserData2")).email;


//Task 8

console.log("Before removing ",sessionStorage.getItem("name"));
sessionStorage.removeItem("name")
console.log("After removing ",sessionStorage.getItem("name"));

//Task 9
function data(key,value){
    localStorage.setItem(`${key}`,`${value}`);
    sessionStorage.setItem(`${key}`,`${value}`);
}
data("Branch","Computer")

//Task 10
function clearAllStorage() {
    localStorage.clear();
    sessionStorage.clear();

    // To Verify  both storages are empty
    console.log("localStorage length:", localStorage.length);
    console.log("sessionStorage length:", sessionStorage.length);
}

clearAllStorage();
