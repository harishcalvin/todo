// new todo
const modes = document.getElementById('moonIcon'); //moonIcon
const theme = document.querySelector('.light_mode'); //div lightmode, todoSection
const body = document.querySelector('body'); //body
const bgImage = document.querySelector('#bcgImg'); //background image
const userTodo = document.querySelector('#todoInput');
const todoUl = document.querySelector('.todo_ul');
const btn = document.querySelector('.click');

modes.addEventListener('click', themes);
btn.addEventListener('click', newTodo);

function themes() {
    //darkmode
    if (theme.classList.contains('light_mode')) {
        theme.classList.remove('light_mode');
        theme.classList.add('dark_mode');
        modes.classList.remove('bi-moon-fill');
        modes.classList.add('bi-brightness-high-fill');
        body.style.backgroundColor = '#171823';
        bgImage.src = './images/bg-desktop-dark.jpg';
    } else {
        //lightmode
        theme.classList.remove('dark_mode');
        theme.classList.add('light_mode');
        modes.classList.remove('bi-brightness-high-fill');
        modes.classList.add('bi-moon-fill');
        body.style.backgroundColor = '#FAFAFA';
        bgImage.src = './images/bg-desktop-light.jpg';
    }
}

function newTodo(event) {
    event.preventDefault();
    //tododiv
    const newTodo = document.createElement('li');
    const todo_list = `${userTodo.value}`;
    newTodo.innerText = todo_list;
    newTodo.classList.add('todo_item');
    todoUl.appendChild(newTodo);
    if (userTodo.value === " ") {
        return null
    }
    //checkbox button 
    const checkbox = document.createElement('button');
    checkbox.classList.add('checklist_btn');
    checkbox.innerHTML = '<i class="bi bi-circle"></i>';
    newTodo.prepend(checkbox);
    //checklist 
    checkbox.addEventListener('click', function() {
            // icon.classList.toggle('bi-check2-circle');
            newTodo.classList.toggle('completedItem');
        })
        //delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete_btn');
    deleteBtn.innerHTML = '<i class="bi bi-x"></i>';
    newTodo.appendChild(deleteBtn);
    //delte
    deleteBtn.addEventListener('click', function() {
        newTodo.classList.add('deleted');
        newTodo.remove();
    })
    userTodo.value = ""

}