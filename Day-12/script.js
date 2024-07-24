
//Task 1
{function intentional() {
    return   new Error("An error occured");

}
try {
  let res = intentional();
  console.log(res);
} catch (error) {
  console.log("Error ", error);
}}

//Task 2
{function divide(a,b) {
    if( b==0){
        throw new Error("This is not possible")
    }
    return a/b;
}
try {
    let res=divide(10,5)
    console.log("Ans is ",res);
} catch (error) {
    console.error("Error ",error)
}}

//Task 3
{try {
    // throw new Error("error")
    console.log("Hello this is try block");
} catch (error) {
    console.log(error);
}finally{
    console.log("Hello this is finally block");
}}

// Task 4
{
    class validateErr extends Error{
        constructor(msg){
            super(msg)
            this.name='validateErr';
        }
    }

    function InputV(inp) {
        if(inp.trim()===''){
            throw new validateErr("Empty strings are invalid")
        }
        return "Valid input";
    }

    try {
        let res=InputV("        ");
        console.log(res);
    } catch (error) {
        console.log("Error ",error);
    }
}

//Task 6
{
    let promise=new Promise(function(resolve,reject){
        let num=Math.random()*10;
        if(num<=6){
            resolve("Promise is resolved")
        }else{
            reject("promise is rejected")
        }

    })

    promise
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    .finally(msg=>console.log("All done"))
}

// Task 7
{async function randm(){
    let num=Math.random()*10;
    // setTimeout(() => {
        if(num<=6){
            return ("Promise is resolved")
        }else{
            throw new Error("promise is rejected")
        }
    // }, 3000);
}

try {
    let res= randm()
    console.log(res);
} catch (error) {
    console.log("error ",error)
}}

//Task 8
{
  fetch("https://typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("Error ", err));
}

//Task 9
async function fetchData(){

    try {
        let response=await fetch("https://.typicode.com/uses")
        let data=await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error ",error);
    }
}
fetchData();
