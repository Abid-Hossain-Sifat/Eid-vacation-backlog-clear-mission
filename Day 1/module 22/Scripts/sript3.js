console.log("Hello from script3.js");

const locationTitle = document.getElementById("locationTitle");
console.log(locationTitle.innerText);

let locationtitle2 = "Some place of Bangladesh";
locationTitle.innerText = locationtitle2;

locationTitle.style.color = "#650130";

console.log(locationTitle.style.color);
console.log(locationTitle.style.fontSize);

let heading = document.getElementById("header");
heading.style.backgroundColor = "#F0B2CF";

let HP = document.querySelector("#header p");
HP.style.color = "#93E901";
HP.style.backgroundColor = "rgb(53, 202, 242)";
HP.style.width = "fit-content";
HP.style.borderRadius = "10px";