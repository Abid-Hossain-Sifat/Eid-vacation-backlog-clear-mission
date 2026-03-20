
console.log ("Hellow from Event handling");

let text = document.getElementById("dText");
let defText = text.innerText;
const changeTextBtn = document.getElementById("changeText");
const defaultTextBtn = document.getElementById("getOriginalText");
let newText = "event handling is fun and easy to learn with practice and dedication and it will open up many opportunities for you in the world of web development and programming";

changeTextBtn.addEventListener("click", function changeText () {
    text.innerText = newText;
})

defaultTextBtn.addEventListener("click", function defaultText () {
    console.log("clicked");
    text.innerText = defText;
})
// btn 
const changeOwnBtn = document.getElementById("cngOwner");
console.log (changeOwnBtn)
const defOwnBtn = document.getElementById("getOriginalOwner");

let nme = document.getElementById("name");
let ag = document.getElementById("age");
let em = document.getElementById("email");
let cont = document.getElementById("contact")
console.log (nme, ag, em, cont);


const defN = nme.innerText;
const defA = ag.innerText;
const defE = em.innerText;
const defC = cont.innerText;

// change owner details 

const changeName = "Abid Hossain Sifat";
const changeAge = 19;
const changeMail = "itzabid006@gmail.com";
const changeContact = "0182823543"

// action 
changeOwnBtn.addEventListener("click", function (){
    nme.innerText = changeName;
    ag.innerText = changeAge;
    em.innerText = changeMail;
    cont.innerText = changeContact;
})

defOwnBtn.addEventListener("click",function (){
    console.log ("clicked")
    nme.innerText = defN;
    ag.innerText = defA;
    em.innerText = defE;
    cont.innerText = defC;
})
