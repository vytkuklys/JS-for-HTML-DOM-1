const body = document.body;

let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

let p4img = document.createElement("p");
p4img.setAttribute("class", "img");
container.appendChild(p4img);

let leftQuote = document.createElement("div");
leftQuote.classList.add("left-quote");
let leftH5 = document.createElement("h5");
leftH5.innerText = "Marcus";
leftQuote.appendChild(leftH5);
let leftP = document.createElement("p");
leftP.innerText = "Death smiles at us all, but all a man can do is smile back.";
leftQuote.appendChild(leftP);
container.appendChild(leftQuote);

let rightQuote = document.createElement("div");
rightQuote.classList.add("right-quote");
rightH5 = document.createElement("h5");
rightH5.innerText = "Aurelius";
rightQuote.appendChild(rightH5);
let rightP = document.createElement("p");
rightP.innerText = "Think of yourself as dead. You have lived your life. Now, take what's left and live it properly.";
rightQuote.appendChild(rightP);
container.appendChild(rightQuote);
