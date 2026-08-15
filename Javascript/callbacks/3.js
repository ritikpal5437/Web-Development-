function login(callback) {
    console.log("logging in...");
    setTimeout (function() {
        console.log("login succes");
        callback();
    }, 2000);
}
 function finished() {
        console.log("Welcome to dashboard"); 
}
login(finished);