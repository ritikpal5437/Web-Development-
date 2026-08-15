function order(callback) {
    console.log("Order placed");
    setTimeout(function() {
        console.log("order in processing");
        callback();
    }, 2000);
}
function ready(callback) {
    console.log("food is ready");
    callback();
    
}
function eat(callback) {
    console.log("eating food");
    callback();
}

order(function() {
    ready(function() {
        eat(com);
    });
});
function com(params) {
        console.log("payment complete");
        
}
