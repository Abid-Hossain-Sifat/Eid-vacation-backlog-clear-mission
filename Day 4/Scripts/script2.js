const userInput = document.getElementById("userName");
const passInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const form = document.getElementById("loginForm");

// enable/disable button
function checkLogin() {
    if (userInput.value === "admin" && passInput.value === "admin123") {
        loginBtn.removeAttribute("disabled");
    } else {
        loginBtn.setAttribute("disabled", true);
    }
}

userInput.addEventListener("input", checkLogin);
passInput.addEventListener("input", checkLogin);

// button click (form submit)
form.addEventListener("submit", function (event) {
    event.preventDefault(); // page reload off

    if (userInput.value === "admin" && passInput.value === "admin123") {
        window.location.assign("./index1.html");
    }
});