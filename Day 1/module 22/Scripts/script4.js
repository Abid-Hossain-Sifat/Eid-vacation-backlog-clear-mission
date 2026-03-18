// console.log("hello from script4.js");


const sections = document.querySelectorAll("section");
console.log(sections);

for (const section of sections) {
    console.log(section)
    section.style.border = '2px solid purple';
    section.style.marginBottom = "10px";
    section.style.padding = "10px";
    section.style.alignItems = "center";
    section.style.textAlign = "center";
}