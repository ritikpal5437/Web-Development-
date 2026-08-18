// Kisi variable ko code ke kis area me access kar sakte ho.

// type of var => Global Scope
// Local Scope
// Block Scope

let name = "ritik";
function showname() {
    console.log(name);
    
    
}
showname();
// here name variable is in global scope, so it can be accessed inside the function showname().
let globalName = "ritik";

function showname() {
    let localName = "vicky";
    console.log(localName);
}

// showname();
console.log(globalName);