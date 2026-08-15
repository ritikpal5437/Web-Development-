let prom1 = new Promise(function (resolve,reject) {
    
     setTimeout(function() {
       resolve("data recived");
       
    }, 2000);
    
});
prom1.then(function(result) {
    console.log(result);
});
