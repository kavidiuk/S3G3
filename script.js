document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText) {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;

            taskItem.addEventListener("click", function () {
                taskItem.classList.toggle("completed");
            });

            const deleteButton = taskItem.querySelector(".delete-btn");
            deleteButton.addEventListener("click", function () {
                taskItem.remove();
            });

            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addTaskButton.click();
        }
    });
});
