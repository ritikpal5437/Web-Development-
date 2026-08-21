let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+";

let upper = document.getElementById("uppercase");
let lower = document.getElementById("lowercase");
let num = document.getElementById("numbers");
let symbol = document.getElementById("symbols");

let lengthRange = document.getElementById("lengthRange");
let lengthValue = document.getElementById("lengthValue");

let generateBtn = document.getElementById("generateBtn");
let password = document.getElementById("password");
let copyBtn = document.getElementById("copyBtn");
lengthRange.addEventListener("input", function () {
    lengthValue.innerText = lengthRange.value;
});

generateBtn.addEventListener("click", function () {

    let characters = "";

    if (upper.checked) {
        characters += uppercase;
    }

    if (lower.checked) {
        characters += lowercase;
    }

    if (num.checked) {
        characters += numbers;
    }
if (symbol.checked) {
        characters += symbols;
    }
if (characters.length === 0) {
        password.innerText = "Select at least one option";
        return;
    }
    let result = "";

    for (let i = 0; i < lengthRange.value; i++) {

        let randomIndex = Math.floor(Math.random() * characters.length);

        result += characters[randomIndex];
    }
    password.innerText = result;
});
copyBtn.addEventListener("click", function () {

    navigator.clipboard.writeText(password.innerText);
 copyBtn.innerText = "Copied!";
 setTimeout(function () {
        copyBtn.innerText = "Copy";
    }, 1000);
});