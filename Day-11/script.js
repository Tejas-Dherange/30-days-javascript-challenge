//Task 1

let promise=new Promise(function (resolve,reject) {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 2000);
})
promise.then((res)=> console.log(res))

//Task 2
let promise1=new Promise(function (resolve,reject) {
    setTimeout(() => {
        reject("An error occured")
    }, 2000);
})
promise1.catch((rej)=>console.log(rej))

//Task 3
async function fetchData(){
try {
     return await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(response=> response.json())
    // .then(data=>console.log(data))
    .then(data=>data.data.map(entry=>console.log(`Year: ${entry.Year}, Population: ${entry.Population/1000000} M`)))
} catch (error) {
    console.log(error);
}
}
fetchData();

// Task 4
function promese(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Promise Resolved")
        }, 2000);
    })
}
async function task3(){
   try {
     let data=await promese();
     console.log(data);
   } catch (error) {
    console.log("Error ",error);
   }
}
task3();

//Task5 
function promese1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Promise Rejected")
        }, 2000);
    })
}
async function task4(){
   try {
     let data=await promese1();
     console.log(data);
   } catch (error) {
    console.log("Error ",error);
   }
}
task4();

//Task 6
function fetchResponse(Url){
    fetch(Url)
    .then(res=>res.json())
    .then(data=>Object.keys(data.bpi).map(key => {
        console.log(`${data.bpi[key].code},${data.bpi[key].rate_float}`);
      })
)
}
fetchResponse("https://api.coindesk.com/v1/bpi/currentprice.json");

//Task 7
async function fetching(){
    let response=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    let data=await response.json();
    Object.keys(data.bpi).map(key=>console.log(`${data.bpi[key].code},${data.bpi[key].rate},${data.bpi[key].symbol},${data.bpi[key].description}`));
}
fetching()

//Task 8
 function delay(ms) {
    return new Promise((resolve,reject)=>setTimeout(resolve, ms))
}

const promises = [
    delay(1000).then(() => 'First promise resolved after 1 second'),
    delay(2000).then(() => 'Second promise resolved after 2 seconds'),
    delay(3000).then(() => 'Third promise resolved after 3 seconds')
  ];

  Promise.all(promises)
  .then((res)=>{
    res.map(res=>console.log(res))
  })
  .catch((rej)=>{
    console.log("Error ", rej);
  })

  //Task 9
  Promise.race(promises)
  .then((res)=>{
    console.log("First promise ",res)
  })
  .catch((rej)=>{
    console.log("Error ", rej);
  })