var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;   //the dot value is what retreives the input from the box
    var taskTypeInput = document.querySelector("select[name='task-type']").value

    var listItemEl = document.createElement("li");              //create new task item
    listItemEl.className = "task-item";                         //Styles using CSS
 
    var taskInfoEl = document.createElement("div");             // create div to hold task info and add to list item
    taskInfoEl.className = "task-info";                         // give it a class name
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";    // add HTML content to div

    listItemEl.appendChild(taskInfoEl);
    
    // listItemEl.textContent = taskNameInput;                     //Adds text
    tasksToDoEl.appendChild(listItemEl);                        //Appends the element to the task list
}


formEl.addEventListener("submit", createTaskHandler);
