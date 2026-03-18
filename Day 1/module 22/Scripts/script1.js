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


const lists = document.getElementsByTagName("li");
console.log(lists);

for (let list of lists) {
    console.log(list);
    console.log(list.innerText);
    list.innerText = "change list inner text";
    console.log(list.innerText);
}
const span = document.getElementById("count");
console.log(span.innerText);
span.innerText = parseInt(lists.length);
console.log(span.innerText);