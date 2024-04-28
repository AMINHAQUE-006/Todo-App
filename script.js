const submitButton = document.querySelector(".btn-outline-secondary");
const inputContainer = document.querySelector(".input-container");
const inputField = document.querySelector(".form-control");
const todoList = document.querySelector(".todos-list");


const canceledTodo = document.querySelector(".Canceled-todos")
const doneTodo = document.querySelector(".Completed-todos")

submitButton.addEventListener("click", () => {
  submitTodo()
});



function submitTodo() {
  if (inputField.value.trim() !== "") {

    const todoListItem = document.createElement("li");
    const span = document.createElement("span")
    const crossIcon = document.createElement("i")
    const doneIcon = document.createElement("i")
    const iconContainer = document.createElement("span");

    todoListItem.classList.add("list-group-item")

    crossIcon.classList.add("fa-regular", "fa-circle-xmark")
    doneIcon.classList.add("fa-regular", "fa-circle-check")

    span.innerText = inputField.value

    todoListItem.appendChild(span);
    iconContainer.appendChild(doneIcon)
    iconContainer.appendChild(crossIcon)
    todoListItem.appendChild(iconContainer)
    todoList.appendChild(todoListItem);
    
    crossIcon.addEventListener("click", () => {
      canceledTodo.appendChild(todoListItem)
      todoListItem.removeChild(iconContainer)
    })

    doneIcon.addEventListener("click", () => {
      doneTodo.appendChild(todoListItem)
      todoListItem.removeChild(iconContainer)
    })

    crossIcon.addEventListener("mouseover", () => {
      iconContainer.lastChild.classList.remove("fa-regular")
      iconContainer.lastChild.classList.add("fa-solid")
    })

    doneIcon.addEventListener("mouseover", () => {
      iconContainer.firstChild.classList.remove("fa-regular")
      iconContainer.firstChild.classList.add("fa-solid")
    })
    
    crossIcon.addEventListener("mouseout", () => {
      iconContainer.lastChild.classList.remove("fa-solid")
      iconContainer.lastChild.classList.add("fa-regular")
    })

    doneIcon.addEventListener("mouseout", () => {
      iconContainer.firstChild.classList.remove("fa-solid")
      iconContainer.firstChild.classList.add("fa-regular")
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