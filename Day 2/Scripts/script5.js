console.log ("Hello from script5.js");


let topicsContainer = document.getElementById("topics-container").childNodes[0 ];
console.log(topicsContainer);


// create Element 

const newTopic = document.createElement("li");
console.log(newTopic);
newTopic.innerText = "Append child";
console.log(newTopic.innerText);


// add to list 
const topicsList = document.getElementById("topic-list");
topicsList.appendChild(newTopic);


// create new div 

const newDiv = document.createElement("div");

// add list section 
const list = document.createElement("ol");
list.className = "list-decimal text-center text-xl"


// list item 
const l1 = document.createElement("li");
l1.innerText = "Kashmir, Pakistan";
const l2 = document.createElement("li");
l2.innerText = "Kabul, Afghanistan";
const l3 = document.createElement("li");
l3.innerText = "Egypt";
const l4 = document.createElement("li");
l4.innerText = "Turkey";
const l5 = document.createElement("li");
l5.innerText = "Italy";
const l6 = document.createElement("li");
l6.innerText = "Spain";
const l7 = document.createElement("li");
l7.innerText = "France";

// create others elements for newDiv 

// title 
const title = document.createElement("h1");
title.innerText = "Countrys I want to visit";
title.className = "item-center text-center mt-5 text-[30px] font-extrabold";


// append new div in body 
document.body.appendChild(newDiv);

// add h1 to new div
newDiv.appendChild(title);


newDiv.appendChild(list);
list.appendChild(l1);
list.appendChild(l2);
list.appendChild(l3);
list.appendChild(l4);
list.appendChild(l5);
list.appendChild(l6);
list.appendChild(l7);



// create another 
const newDiv2 = document.createElement("div");
document.body.appendChild(newDiv2);

// create title 
const title2 = document.createElement("h1");
title2.innerText = "My Skills";
title2.className = "text-center mt-5 text-3xl font-light";
newDiv2.appendChild(title2);


// create list 
const list2 = document.createElement("ul");
list2.className = "list-disc text-center text-xl";
newDiv2.appendChild(list2);

// list items
const nl1 = document.createElement("li");
nl1.innerText = "Graphics Design";
list2.appendChild(nl1);

const nl2 = document.createElement("li");
nl2.innerText = "Vedio Editing";
list2.appendChild(nl2);

const nl3 = document.createElement("li");
nl3.innerText = "Office Applications";
list2.appendChild(nl3);

const nl4 = document.createElement("li");
nl4.innerText = "Web Development";
list2.appendChild(nl4);


// add paragraph 
const paragraph = document.createElement("p");
paragraph.innerText = "I am a self-taught web developer with a passion for creating beautiful and functional websites. I have a strong background in HTML, CSS, and JavaScript, and I am always eager to learn new technologies and improve my skills.";
paragraph.className = "text-center mt-5 text-2xl font-medium";
newDiv2.appendChild(paragraph);