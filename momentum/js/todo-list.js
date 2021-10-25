import { TODO } from "./const.js";
const todoBtn = document.querySelector('.todo-icons'),
  todoContent = document.querySelector('.todo-content'),
  label = todoContent.querySelector('h3'),
  newTodo = todoContent.querySelector('#new-todo'),
  newTodoBtn = todoContent.querySelector('.save'),
  todoList = todoContent.querySelector('.todo-list'),
  clearBtn = todoContent.querySelector('.clear'),
  todoContainer = document.querySelector('.todo-container-background');

const createTodo = (lang) => {
    label.textContent = TODO[lang]['label'];
    newTodoBtn.textContent = TODO[lang]['save'];
    clearBtn.textContent = TODO[lang]['clear'];
    newTodo.setAttribute('placeholder', TODO[lang]['placeholder'])
}

const onPageLoated = ()=> {
  const listenDeleteTodo = (btnDelete) =>{
    btnDelete.addEventListener("click", (evt) => {
      btnDelete.parentElement.remove();
      evt.stopPropagation();
      localStorage.setItem("todoList", todoList.innerHTML);
    });
  }
    
  const createTodoItem = (value) => {
    const li = document.createElement('li');
    li.textContent = value;

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');    
    li.prepend(input);

    const btn = document.createElement('button');
    btn.classList.add('footer-icons', 'delete-icons')
    li.append(btn);

    todoList.append(li);
    newTodo.value = '';
    listenDeleteTodo(btn);
  }

  const onClickTodo = (evt) => {
    evt.target.checked ? evt.target.parentElement.classList.add('checked')
      : evt.target.parentElement.classList.remove('checked');
  }

  todoList.addEventListener("click", onClickTodo);

  todoBtn.addEventListener('click', () => {
    todoContainer.classList.remove('hide');
    todoContainer.classList.add('show');
  })

  todoContainer.addEventListener('click', (evt) => {
    if (evt.target == todoContainer) {
      todoContainer.classList.add('hide');
      todoContainer.classList.remove('show');
    }  
  })

  newTodoBtn.addEventListener('click', () => {
    if (newTodo.value.length > 0) {
      createTodoItem(newTodo.value);
      localStorage.setItem("todoList", todoList.innerHTML);
    }
  })

  newTodo.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter && newTodo.value.length > 0) {
      createTodoItem(newTodo.value)
      localStorage.setItem("todoList", todoList.innerHTML);
    }
  });

  clearBtn.addEventListener('click', () => {
    todoList.textContent = '';
    localStorage.removeItem('todoList', todoList.innerHTML);
  })

  function loadTodo() {
    const data = localStorage.getItem('todoList');
    if (data) {
      todoList.innerHTML = data;
    }
    const btnsDelete = document.querySelectorAll(".delete-icons");
    for (const btn of btnsDelete) {
      listenDeleteTodo(btn);
    }
  }

  loadTodo();
}

document.addEventListener("DOMContentLoaded", onPageLoated);

export { onPageLoated, createTodo};