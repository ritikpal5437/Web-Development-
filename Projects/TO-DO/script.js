let input = document.getElementById("taskInput");
let button = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {

        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        let text = document.createElement("span");
        text.innerText = task.text;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete-btn");

        if (task.completed) {
            text.style.textDecoration = "line-through";
        }

        checkbox.addEventListener("change", function () {

            task.completed = checkbox.checked;

            saveTasks();
            displayTasks();

        });

        deleteBtn.addEventListener("click", function () {

            tasks.splice(index, 1);

            saveTasks();
            displayTasks();

        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(text);
        taskDiv.appendChild(deleteBtn);

        taskList.appendChild(taskDiv);
    });
}

button.addEventListener("click", function () {

    let taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    let newTask = {
        text: taskText,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();
    displayTasks();

    input.value = "";
});

displayTasks();