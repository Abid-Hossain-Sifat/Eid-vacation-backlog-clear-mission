console.log ("Hello from external Javascript file");


// console.log (document);


let btnCollection = document.getElementsByTagName("button");
console.log(btnCollection);

for (const allbtn of btnCollection) {
    console.log(allbtn);
    console.log(allbtn.innerText);
}

const text = document.getElementById("damiText");
console.log(text.innerText);


const service = document.getElementById("services");
console.log(service);

// for (let list of lists) {
//     console.log(list);
//     console.log(list.innerText);
//     list.innerText = "change list inner text";
//     console.log(list.innerText);
// }
const span = document.getElementById("count");
console.log(span.innerText);
span.innerText = parseInt(service.children.length);
console.log(span.innerText);



let food = document.getElementById("foodList");
console.log(food.children);
food.children.inner



let addfood1 = document.createElement("li");
addfood1.innerText = "Grilled Chicken";
food.appendChild(addfood1);

let addfood2 = document.createElement("li");
addfood2.innerText = "Pizza";
addfood2.className = "foreignFood";
food.appendChild(addfood2);

let addfood3 = document.createElement("li");
addfood3.innerText = "Pasta";
addfood3.className = "foreignFood";
food.appendChild(addfood3);

let addfood4 = document.createElement("li");
addfood4.innerText = "Burger";
addfood4.className = "foreignFood";
food.appendChild(addfood4);

let foreignFoods = document.getElementsByClassName("foreignFood");
let foreignFoodCount = document.getElementById("foreignFoodCount");
foreignFoodCount.innerText = parseInt(foreignFoods.length);


let count = document.getElementById("foodCount");
count.innerText = parseInt(food.children.length);