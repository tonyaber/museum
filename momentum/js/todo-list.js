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

  
const createTodoItem = (value) => {
  const li = document.createElement('li');
  li.textContent = value;
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.addEventListener('click', (evt) => {
    if (evt.target.checked) {
      li.style.textDecoration = 'line-through';
    } else {
      li.style.textDecoration = 'none';
    }
  })
  li.prepend(input);
  const btn = document.createElement('button');
  btn.classList.add('footer-icons', 'delete-icons')
  li.append(btn);
  todoList.append(li);
  newTodo.value = '';
  btn.addEventListener("click", () => {
    btn.parentElement.remove();
  });
}

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
    createTodoItem(newTodo.value)
  }
})

newTodo.addEventListener("keypress", (keyPressed) => {
  const keyEnter = 13;
  if (keyPressed.which == keyEnter && newTodo.value.length > 0) {
    createTodoItem(newTodo.value)
  }
});

clearBtn.addEventListener('click', () => {
  todoList.textContent = '';
})

export { createTodo };