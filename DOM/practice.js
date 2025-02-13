const body = document.body;

const div = document.createElement('div');
body.append(div);
div.style.backgroundColor = "red";
div.append("Hello Paranitharan","ewrfrge")

const p = document.createElement('p');
div.appendChild(p);

const heading = document.createElement('h1');
div.appendChild(heading);

// p.append("This is a paragraph");
p.innerText = "This is a paragraph";
heading.textContent = "This is a heading";

console.log(div.innerText); //it prints the text content of the element consider spaces and new lines

console.log(div.textContent); //it prints the text content of the element. it displays the text content of the element without considering spaces and new lines.

// console.log(div.innerHTML);



