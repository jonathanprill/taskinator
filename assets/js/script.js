var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var listItemEl = document.createElement("li");              //create new task item
    listItemEl.className = "task-item";                         //Styles using CSS
    listItemEl.textContent = "This is a new task.";             //Adds text
    tasksToDoEl.appendChild(listItemEl);                        //Appends the element to the task list
}


formEl.addEventListener("submit", createTaskHandler);
