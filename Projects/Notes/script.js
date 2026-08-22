let button = document.querySelector("button");
let notesContainer = document.querySelector(".notes-container");

function saveNotes(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

button.addEventListener("click", function () {

    let note = document.createElement("p");
    note.className = "input-box";
    note.setAttribute("contenteditable", "true");

    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "×";

    note.appendChild(deleteBtn);
    notesContainer.appendChild(note);

    deleteBtn.addEventListener("click", function () {
        note.remove();
        saveNotes();
    });
    note.addEventListener("click",function () {
        saveNotes();

        
    });

    saveNotes();
});
notesContainer.innerHTML = localStorage.getItem("notes") || "";

document.querySelectorAll(".input-box span").forEach(function (deleteBtn) {

    deleteBtn.addEventListener("click", function () {
        deleteBtn.parentElement.remove();
        saveNotes();
    });

});
