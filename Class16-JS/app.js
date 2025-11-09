var todoList = [
    // { text: "Simple Task1", completed: false },
    // { text: "Simple Task2", completed: false }
]

var inputElement = document.getElementById("input");
var addButton = document.getElementById("addTodo");
var parentListElement = document.getElementById("list");

{/*
<li class="todo_item">
    <p>Simple Task</p>
    <div>
        <button class="btn btn-primary btn-sm"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
        <button class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i> Delete</button>
    </div>
</li> 
*/}

addButton.addEventListener("click", function(){
    var userInput = inputElement.value;
    if(userInput.trim() === ""){
        alert("Please add task.")
        return;
    }
    var todoTask = {text: userInput, completed: false}
    todoList.push(todoTask)
    renderList()
    inputElement.value = ""

})


function renderList() {
    parentListElement.innerHTML = ""
    todoList.forEach(function(todo, index){
        var li = document.createElement("li");
        li.setAttribute("class", "todo_item");
    
        var p = document.createElement("p");
        p.innerText = todo.text
        p.addEventListener("click", function(){
            completeTodo(index)
        })
        if(todo.completed){
            p.setAttribute("class", "completed")
        }
        
        var div = document.createElement("div");

        var editButton = document.createElement("button");
        editButton.setAttribute("class", "btn btn-primary btn-sm me-1");
        editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit`
        editButton.addEventListener("click", function(){
            editTodo(index)
        })

        var deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "btn btn-danger btn-sm");
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i> Delete`
        deleteButton.addEventListener("click", function(){
            deleteTodo(index)
        })

        if(!todo.completed){
            div.appendChild(editButton)
        }
        div.appendChild(deleteButton)
        
        
        li.appendChild(p)
        li.appendChild(div)
        console.log(li)
        parentListElement.appendChild(li)
    })
}

function deleteTodo(index){
    todoList.splice(index,1);
    renderList()
}
function editTodo(index){
    var todoItem = todoList[index];
    var editedTodoText = prompt("Update the task", todoItem.text)
    todoList[index].text = editedTodoText;
    renderList()
}
function completeTodo(index){
    todoList[index].completed = true;
    renderList()
}
renderList()