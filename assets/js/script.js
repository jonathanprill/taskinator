var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;   //the dot value is what retreives the input from the box
    var taskTypeInput = document.querySelector("select[name='task-type']").value

    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send it as an argument to createTaskEl
    createTaskEl(taskDataObj);

}


var createTaskEl = function(taskDataObj) {
    var listItemEl = document.createElement("li");              //create new task item
    listItemEl.className = "task-item";                         //Styles using CSS

    var taskInfoEl = document.createElement("div");             // create div to hold task info and add to list item
    taskInfoEl.className = "task-info";                         // give it a class name
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";    // add HTML content to div using LEXICAL SCOPING

    listItemEl.appendChild(taskInfoEl);
    
    tasksToDoEl.appendChild(listItemEl);                        //Appends the element to the task list
}



formEl.addEventListener("submit", taskFormHandler);
