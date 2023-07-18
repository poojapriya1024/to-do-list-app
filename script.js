const task = document.getElementById("task");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(task.value == "")
        alert("You must enter a task!");
    else
    {
        let li = document.createElement("li");
        li.innerHTML = task.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    task.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e) {
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
    
},false);

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTasks() {
    //return all the content stored in the name of data
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
