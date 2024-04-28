const submitButton = document.querySelector(".btn-outline-secondary");
const inputContainer = document.querySelector(".input-container");
const inputField = document.querySelector(".form-control");
const todoList = document.querySelector(".todo-list");

submitButton.addEventListener("click", () => {
  submitTodo()
});



function submitTodo() {
  if (inputField.value.trim() !== "") {

    const todoListItem = document.createElement("li");
    const span = document.createElement("span")
    const icon = document.createElement("i")

    todoListItem.classList.add("list-group-item")
    icon.classList.add("fa-regular", "fa-circle-xmark")

    span.innerText = inputField.value


    todoListItem.appendChild(span);
    todoListItem.appendChild(icon);
    todoList.appendChild(todoListItem);
    
    icon.addEventListener("click", () => {
      todoListItem.remove();  
    })

    icon.addEventListener("mouseover", () => {
      todoListItem.lastChild.classList.remove("fa-regular")
      todoListItem.lastChild.classList.add("fa-solid")
    })
    
    icon.addEventListener("mouseout", () => {
      todoListItem.lastChild.classList.remove("fa-solid")
      todoListItem.lastChild.classList.add("fa-regular")
    })

    inputField.value = "";

  } else {
    const alert = document.createElement("div")

    alert.setAttribute("role", "alert")
    alert.classList.add("alert", "alert-danger")
    alert.innerText = "Please enter todo"

    inputContainer.appendChild(alert)
    
    setTimeout(() => {
        alert.remove()
    }, 500)
  }
}

inputField.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
    submitTodo()
  }
})