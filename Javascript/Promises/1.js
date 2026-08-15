// let prom1 = new Promise(function(resolve, reject) {
//     resolve("login successful");
// });

// prom1.then(function(result) {
//     console.log(result);
// });

let prom1 = new Promise(function(resolve, reject) {
    reject("login failed");
});

prom1.catch(function(result) {
    console.log(result);
});