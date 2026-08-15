function orderFood(callback) {
    console.log("Order placed");

    setTimeout(function () {
        console.log("Food is ready");

    callback();
        
    }, 2000);
}

function eatFood() {
    console.log("Eating food");
}

orderFood(eatFood);