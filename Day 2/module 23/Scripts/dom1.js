console.log ("Hello from js")

// option 2: Js event property 
        function makeBlue() {
            document.getElementById("btnContainer").style.backgroundColor = "blue";
        }
        function makeDefault(){
            document.getElementById("btnContainer").style.backgroundColor = "white";
        }

// Option 3: get element by id and then add onclick 
// const bodyRed = document.getElementById("redBody");
// bodyRed.onclick = function redBackground() {
//     document.body.style.backgroundColor = "red";
// }
const defaultBody = document.getElementById("defaultBody");
defaultBody.onclick = function defoultBody () {
    document.body.style.backgroundColor = "white";
}

// Option 3: Different way 
const pBody = document.getElementById("purpleBody");
pBody.onclick = purpleBackground;


function purpleBackground() {
    document.body.style.backgroundColor = "purple";
}

// Option 4: addEventListener 

const pinkBody = document.getElementById("pinkBody").addEventListener("click", function pinkBody () {
    document.body.style.backgroundColor = "pink";
})


const bodyRed = document.getElementById("bodyRed");
console.log(bodyRed);
bodyRed.addEventListener("mouseover", function red (){
    document.body.style.backgroundColor = "red";
})

const greenBody = document.getElementById("greenBody").addEventListener("mouseover", function green () {
    document.body.style.backgroundColor = "green";
})

const yellowBody = document.getElementById("yellowBody").addEventListener("mouseover", function yellow (){
    document.body.style.backgroundColor = "blue";
})


// Practice
const p1 = document.getElementById("name");

const nameChangeBtn = document.getElementById("changeName");
nameChangeBtn.addEventListener("click", function changeName () {
    p1.innerText = "Abid Hossain Sifat";
})