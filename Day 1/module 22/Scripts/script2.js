console.log ("script2.js is running");

// Query Selector all 

let spans1 = document.querySelectorAll("span");
console.log(spans1);
for (let span1 of spans1) {
    console.log(span1.innerText)
}

console.log("===============================================");




let spans2 = document.querySelectorAll("#container p span");

for (let span2 of spans2) {
    console.log(span2.innerText);
}
console.log("===============================================");

let spans3 = document.querySelectorAll("#container h1 span");
for (let span3 of spans3) {
    console.log(span3.innerText);
}


console.log("====================Query Selector All End===========================");
// Query Selector

console.log("========================Query Selector========================");
let span1 = document.querySelector("#container p span");
console.log(span1.innerText);

console.log("===============================================");
let span2 = document.querySelector("#container h1 span");
console.log(span2.innerText);

console.log("====================Query Selector End===========================");