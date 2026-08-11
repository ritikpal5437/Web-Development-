// let title = document.getElementById("title");
// let message = document.getElementById("message");
// let box = document.getElementById("box");

// title.innerText = "JavaScript DOM";

// message.innerHTML = "<b>Hello DOM</b>";

// box.innerHTML = `
//     <h2>Welcome</h2>
//     <p>Learning JS</p>
// `;

let title = document.getElementById("title");
let para = document.getElementById("para");

let box = document.getElementById("box");

console.log(box.textContent);
console.log(title.outerHTML);
console.log(para.tagName);