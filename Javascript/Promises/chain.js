let prom1 = new Promise(function(resolve, reject) {
    resolve("Step 1 completed");
});

prom1
    .then(function(result) {
        console.log(result);

        return "Step 2 completed";
    })
    .then(function(result) {
        console.log(result);

        return "Step 3 completed";
    })
    .then(function(result) {
        console.log(result);
    });