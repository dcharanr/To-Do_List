function addTask() {
    var taskInputElement = document.getElementById("taskinput");
    var taskInput = taskInputElement.value;
    var taskList = document.getElementById("tasklist");

    if (taskInput == "") {
        alert("Please enter the task");
        return;
    }

    var listItem = document.createElement("li");

    var taskText = document.createElement("span");
    taskText.innerText = taskInput;
    listItem.appendChild(taskText);

    taskList.appendChild(listItem);

    var buttonContainer = document.createElement('div');
    listItem.appendChild(buttonContainer);
    buttonContainer.className = "task-button";

    var deleteButton = document.createElement('button');
    deleteButton.className = "delete-button";
    buttonContainer.appendChild(deleteButton);
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    var completeButton = document.createElement('button');
    completeButton.className = "complete-button";
    buttonContainer.appendChild(completeButton);
    completeButton.innerText = "Complete";
    completeButton.onclick = function() {
        taskText.classList.toggle("completed");
        if (completeButton.innerText === "Complete") {
            completeButton.innerText = "Completed";
        } else {
            completeButton.innerText = "Complete";
        }
    };

    // Clear the input field after adding the task
    taskInputElement.value = "";
}
