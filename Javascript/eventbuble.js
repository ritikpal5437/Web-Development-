let parent=document.getElementById("parent");
let child=document.getElementById("child");

parent.addEventListener("click", function() {
    console.log("Parent clicked");
});

child.addEventListener("click", function() {
    console.log("Child clicked");
}); 