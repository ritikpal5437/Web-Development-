
// function define hote hi immediately execute ho jata hai.

(function () {
    console.log("Hello Ritik");
})();
(function () {
    console.log("Hello Javascript");
})();


(function (name) {
    console.log("Hello " + name);
})("Ritik");