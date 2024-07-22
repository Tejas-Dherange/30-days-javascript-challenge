console.log("Hello friends");

//Task 1
let isChanged = true;
let p = document.querySelector("#para");
let original=p.innerHTML;
document.getElementById("btn").addEventListener("click", () => {
  if (isChanged) {
    p.textContent = "Hello content is changed";
  } else {
    p.textContent=original;
}
isChanged = !isChanged;
});

//Task 2
let img=document.getElementById("image")
img.addEventListener("dblclick",()=>{
    img.classList.add("none")
})

//Task 3
let bg=document.getElementsByClassName("container")[0]
bg.addEventListener("mouseover",()=>{
    bg.style.backgroundColor="red"
})

//Task 4
bg.addEventListener("mouseout",()=>{
    bg.style.backgroundColor="blue"
})

//Task 5
let inp=document.getElementsByTagName("input")[0]
inp.addEventListener("keydown",()=>{
    console.log("Key is pressed");
})

//Task 6
let para1=document.getElementById("para1")
inp.addEventListener("keyup",(e)=>{
        para1.textContent=e.target.value;
    // console.log("Key is up");
})

//Task 7
// let btn2=document.getElementById("btn2");
// btn2.style.backgroundColor="red"
// document.addEventListener('DOMContentLoaded', (event) => {
    // let btn2 = document.getElementById("btn2");
    let f1 = document.getElementById("f1");

    f1.addEventListener('submit', (e) => {
        e.preventDefault();

        let formData = new FormData(f1);
        formData.forEach((val, key) => {
            console.log(`${key} : ${val}`);
           
        });
    });
// });

//Task 8
let drpd=document.getElementById("dropdown")
let p2=document.getElementById("para2")

drpd.addEventListener("change",(e)=>{
    p2.innerText="Selected :" + drpd.value
})

//Task 9
let dyna=document.getElementById("dynamo")

dyna.addEventListener("click",(e)=>{
    if(e.target && e.target.nodeName === 'LI'){
        console.log(e.target.textContent);
    }
})

//Task 10
let dyn=document.getElementById("dyn3")
let add=document.getElementById("add")

add.addEventListener("click",(e)=>{
    let newItem =document.createElement('li')
    newItem.textContent=" List"+ (dyn.children.length + 1);
    dyn.appendChild(newItem);
})
dyn.addEventListener("click",(e)=>{
    if(e.target && e.target.nodeName === 'LI'){
        console.log(e.target.textContent);
    }
})