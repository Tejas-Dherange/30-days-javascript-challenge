
// Task 1,2
let ele=document.getElementById("first")
ele.innerHTML=ele.innerHTML+" Welcome to my website" 
let bgele=document.getElementsByClassName("container")
bgele[0].style.backgroundColor='yellow';

//Task 3
let newEle = document.createElement("div");
newEle.textContent="Hello this is text content"
document.body.appendChild(newEle)

// Task 4

let ele2=document.createElement("li")
ele2.textContent="This is third"
let exi=document.getElementById("ul1")
exi.appendChild(ele2)

// Task 5
let ele3=document.getElementsByClassName("sec")[0]
ele3.remove();

// TAsk 6 do it later
let ele4=document.getElementById("ul1")
if(ele4.lastElementChild){
    ele4.removeChild(ele4.lastElementChild)
}

// Task 7
let imgEle=document.getElementsByClassName("image")[0]
imgEle.setAttribute("alt","MyImage.jpg")


// Task 8
let css=document.getElementById("cont2")
css.classList.add("bg")
css.remove("bg")

//Task 9
let btt=document.getElementsByTagName("button")[0]
let original=ele.innerHTML;
let isOriginal=true;
btt.addEventListener("click",()=>{
    if(isOriginal){
        ele.innerHTML="Helllo this is after on click";
    }else{
        ele.innerHTML=original;
    }
    isOriginal=!isOriginal;
})

//Task 10
let IsOver=true;
bgele[0].addEventListener("mouseover",()=>{
    if(IsOver){

        bgele[0].style.border="3px solid red"
    }else{
        bgele[0].style.border="3px solid black"
        
    }
    IsOver=!IsOver;
})