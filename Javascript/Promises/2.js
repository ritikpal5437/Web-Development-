// let prom1 = new Promise(function (resolve,reject) {
    
//      setTimeout(function() {
//        resolve("data recived");
       
//     }, 2000);
    
// });
// prom1.then(function(result) {
//     console.log(result);
// });
let prom1 = new Promise(function (resolve,reject) {
    
     setTimeout(function() {
       reject("data is not recived");
       
    }, 2000);
    
});
prom1.catch(function(result) {
    console.log(result);
});
