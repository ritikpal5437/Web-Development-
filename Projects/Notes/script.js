let button = document.querySelector("button");
let notesContainer = document.querySelector(".notes-container");

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
    });
});