console.log ("Hello from js")
const clck = document.getElementById("click");
const ent = document.getElementById("enter");
const mve = document.getElementById("move");
const out = document.getElementById("out");
const name = document.getElementById("name");
const mail = document.getElementById("email")

clck.addEventListener("click", function (click){
    console.log ("Button Click Successfully")
});

ent.addEventListener("mouseenter", function (enter) {
    console.log ("Mouse Enter Successfully")
});

mve.addEventListener("mousemove", function (move) {
    console.log ("Mouse Move Successfully")
});

out.addEventListener("mouseout", function (out) {
    console.log ("Mouse Move Successfully")
});

name.addEventListener("focus", function (focus) {
    console.log ("Focus successful")
})
name.addEventListener("blur", function (blur) {
    console.log ("Blur Successful")
})
name.addEventListener ("keydown", function (keyEvent) {
    console.log ("key Event success", keyEvent)
})

mail.addEventListener("focus", function (focusEvent) {
    console.log ("Focus Successful", focusEvent)
})
mail.addEventListener("keyup", function (upEvent) {
    console.log (upEvent.target.value )
})
mail.addEventListener("blur", function (blurEvent) {
    console.log ("Blur Successful", blurEvent)
})