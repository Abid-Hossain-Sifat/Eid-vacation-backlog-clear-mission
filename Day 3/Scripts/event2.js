console.log ("hello from event js2")

const subBtn = document.getElementById("subBtn");
const cmntText = document.getElementById("commentText");
const cmntContainer = document.getElementById("cmntContainer");




subBtn.addEventListener("click", function() {
    const cmntbox = document.createElement("div")
const newP = document.createElement("p")
cmntbox.appendChild(newP);
cmntbox.className = "items-center text-center text-2xl p5 w-[40%] mx-auto bg-blue-300 rounded-lg"
    let newCmnt = cmntText.value;
    newP.innerText = newCmnt;
    cmntContainer.appendChild(cmntbox);
    cmntText.value = '';

})