// callback practise
// function greet(){
//     console.log("Hello Ritik");


// }
// function execute(callback){
//     callback();


// }
// execute(greet);


//  function work(callback) {
//     console.log("Work started");

//     setTimeout(function () {
//         console.log("Work completed");
//         callback();
//     }, 2000);
// }

// function done() {
//     console.log("Now callback executed");
// }

// work(done);

function download(callback) {
    console.log("Downloading.....");
    setTimeout(function () {
        console.log("download complte");
        callback();

    }, 3000);
}

    function finished() {
        console.log("You can open the file"); 
}
download(finished);
