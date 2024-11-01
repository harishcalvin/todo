// new todo
const modes = document.getElementById("theme--icon"); //moonIcon
const theme = document.querySelector(".light_mode"); //div lightmode, todoSection
const body = document.querySelector("body"); //body
const bgImage = document.querySelector("#bck--img"); //background image
const userTodo = document.querySelector("#todoInput");
const todoUl = document.querySelector(".todo--items__lists");
const btn = document.querySelector(".click");
const todoCount = document.querySelector("#todo-stats__items__count");

modes.addEventListener("click", handleThemeChange);
btn.addEventListener("click", createNewTodo);

function handleThemeChange() {
  //darkmode
  if (theme.classList.contains("light_mode")) {
    theme.classList.remove("light_mode");
    theme.classList.add("dark_mode");
    modes.classList.remove("bi-moon-fill");
    modes.classList.add("bi-brightness-high-fill");
    body.style.backgroundColor = "#171823";
    bgImage.src = "./images/bg-desktop-dark.jpg";
  } else {
    //lightmode
    theme.classList.remove("dark_mode");
    theme.classList.add("light_mode");
    modes.classList.remove("bi-brightness-high-fill");
    modes.classList.add("bi-moon-fill");
    body.style.backgroundColor = "#FAFAFA";
    bgImage.src = "./images/bg-desktop-light.jpg";
  }
}

function createNewTodo(event) {
  event.preventDefault();
  if (userTodo.value === "") {
    return null;
  }
  //tododiv
  const newTodo = document.createElement("li");
  const todo_list = `${userTodo.value}`;
  newTodo.innerText = todo_list;
  newTodo.classList.add("todo--item", "active");
  todoUl.appendChild(newTodo);
  todoCount.innerText = todoUl.children.length;
  //checkbox button
  const checkbox = document.createElement("button");
  checkbox.classList.add("checklist_btn");
  checkbox.innerHTML = '<svg class="checkedHover"></svg>';
  // const checkboxIcon = document.querySelector('#checkList');
  newTodo.prepend(checkbox);

  //checklist
  checkbox.addEventListener("click", function () {
    if (newTodo.classList.contains("active")) {
      checkbox.innerHTML = `<svg class="checkedSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="url(#paint0_linear)"/>
                <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white" stroke-width="2"/>
                <defs>
                <linearGradient id="paint0_linear" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#55DDFF"/>
                <stop offset="1" stop-color="#C058F3"/>
                </linearGradient>
                </defs>
                </svg>`;
      newTodo.classList.remove("active");
      newTodo.classList.add("completedItem");
      todoCount.innerText = parseInt(todoCount.innerText) - 1;
    } else {
      newTodo.classList.contains("completedItem");
      checkbox.innerHTML = '<svg class="checkedHover"></svg>';
      newTodo.classList.remove("completedItem");
      newTodo.classList.add("active");
      todoCount.innerText = parseInt(todoCount.innerText) + 1;
    }
    // newTodo.classList.toggle('completedItem');
  });
  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete_btn");
  deleteBtn.innerHTML = '<i class="bi bi-x"></i>';
  newTodo.appendChild(deleteBtn);
  //delte
  deleteBtn.addEventListener("click", function () {
    newTodo.classList.add("deleted");
    newTodo.remove();
    if (!newTodo.classList.contains("completedItem")) {
      todoCount.innerText = parseInt(todoCount.innerText) - 1;
    }
  });
  // filter
  const all = document.querySelector(".btn--all");
  const active = document.querySelector(".btn--active");
  const complete = document.querySelector(".btn--completed");

  all.addEventListener("click", filterAll);
  active.addEventListener("click", filterActive);
  complete.addEventListener("click", filterComplete);

  function filterAll() {
    if (newTodo.classList.contains("todo--item")) {
      newTodo.style.display = "block";
    } else {
      newTodo.style.display = "none";
    }
  }

  function filterActive() {
    if (newTodo.classList.contains("active")) {
      newTodo.style.display = "block";
    } else {
      newTodo.style.display = "none";
    }
  }

  function filterComplete() {
    if (newTodo.classList.contains("completedItem")) {
      newTodo.style.display = "block";
    } else {
      newTodo.style.display = "none";
    }
  }

  //clear completed
  const clearCompleted = document.querySelector(".todo-stats--phone-display");
  const dClearCompleted = document.querySelector(".btn--desk--clear--complete");
  clearCompleted.addEventListener("click", deleteCompleted);
  dClearCompleted.addEventListener("click", deleteCompleted);

  function deleteCompleted() {
    if (newTodo.classList.contains("completedItem")) {
      newTodo.remove();
    }
  }

  //end

  userTodo.value = "";
}
