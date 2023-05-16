import TodoTasks from './todo.js';
import './style.css';

import refresh from '../assets/rotate-solid.svg';
import arrowD from '../assets/arrow-turn-down-left.png';

const refreshImg = document.getElementById('refresh');
const arrowImg = document.getElementById('arrow-d-l');

refreshImg.src = refresh;
arrowImg.src = arrowD;

const todoForm = document.querySelector('#task-form');
const clearList = document.querySelector('.btn');

const todos = new TodoTasks();
if (todos.getLocalStorage().length > 0) {
  todos.showTodoList();
}

['keypress', 'submit'].forEach((item) => {
  todoForm.addEventListener(item, (event) => {
    if (event.key === 'Enter' || event.type === 'submit') {
      event.preventDefault();
      const tDescrip = document.querySelector('.new-item').value;
      const newTask = new TodoTasks(tDescrip, false, (new TodoTasks()).getLocalStorage().length);
      newTask.AddTodo();
      newTask.showTodoList();
      todoForm.reset();
    }
  });
});

clearList.addEventListener('click', () => (new TodoTasks()).clearAllCompleted());