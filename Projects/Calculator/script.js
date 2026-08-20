let display = document.getElementById('display');
let button = document.querySelectorAll('.btn');

button.forEach(function(btn){
    btn.addEventListener('click',function(){
        let value = btn.dataset.value;
        if(display.innerText==="0"){
            display.innerText=value;
        }
        else{
        display.innerText=display.innerText+value;
        }
    })
});

let firstNumber = "";
let operator = "";

if (value === "+" || value === "-" || value === "*" || value === "/") {

    firstNumber =display.innerText;
    operator = value ;
    display.innerText = "";

}
if(value==="="){
    let secondNumber=display.innerText;



let num1 = Number(firstNumber);
let num2 = Number(secondNumber);
let result;
switch(operator){
    case "+":
        result= num1+num2;
        break;

    case "-":
        result= num1-num2;
        break;

    case "*":
        result= num1*num2;
        break;

        case "/":
        result= num1/num2;
        break;
}
display.innerText=result;
}