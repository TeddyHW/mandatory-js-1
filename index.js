document.querySelector("title").textContent = "Fruits & Vegetables Corp";
document.querySelector("h1").textContent = "Fruits & Vegetables Corp";
let a = document.querySelector("ul li:last-child a");
a.textContent = "Vegetables";
a.href = "#Vegetables";

let about = document.querySelector("#about");
let main = document.querySelector("main");
let contact = document.querySelector("#contact");
let h2 = document.createElement("h2");
let pAbout = document.createElement("p");
let contactH = document.createElement("h2");

let contactP = document.querySelector("#contact p");
let table = document.querySelector("#contact table");

about.textContent = "";
h2.textContent = "About";
pAbout.textContent = "We're the best in fruits & vegetables";
contactH.textContent = "Contact";

main.appendChild(about);
about.appendChild(h2);
about.appendChild(pAbout);
main.appendChild(contact);

contact.appendChild(contactH);
contact.appendChild(contactP);
contact.appendChild(table);

let tr = document.querySelector("table thead tr");
let td = document.querySelectorAll("table thead tr td");
td.textContent = "";

let newTH1 = document.createElement("th");
let newTH2 = document.createElement("th");

newTH1.textContent = "Name";
newTH2.textContent = "Email";

tr.removeChild(td[0]);
tr.removeChild(td[1]);
tr.appendChild(newTH1);
tr.appendChild(newTH2);

let newCSS = document.createElement("link")
newCSS.setAttribute("rel", "stylesheet");
newCSS.setAttribute("href", "main.css");
document.head.appendChild(newCSS);
