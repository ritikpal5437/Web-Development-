let display = document.getElementById("display");
let button = document.querySelectorAll(".btn");

let firstNumber = "";
let operator = "";

button.forEach(function (btn) {
     btn.addEventListener("click", function () {
           let value = btn.dataset.value;
        if (value === "+" || value === "-" || value === "*" || value === "/") {

            firstNumber = display.innerText;
            operator = value;
            display.innerText = "";

        }
        else if (value === ".") {

    if (display.innerText.includes(".")) {
        return;
    }

}
        else if (value === "=") {

            let secondNumber = display.innerText;

            let num1 = Number(firstNumber);
            let num2 = Number(secondNumber);

            let result;

            switch (operator) {

                case "+":
                    result = num1 + num2;
                    break;

                case "-":
                    result = num1 - num2;
                    break;

                case "*":
                    result = num1 * num2;
                    break;

                case "/":
                    case "/":

    if (num2 === 0) {
        display.innerText="error";
    } else {
        result = num1 / num2;
    }

break;
                    
            }

            display.innerText = result;
        }
        else if (value === "C") {

            display.innerText = "0";
            firstNumber = "";
            operator = "";}
        else {
               if (display.innerText === "0") {
                display.innerText = value;
            }

            else {
                display.innerText += value;
            }}
     });

});