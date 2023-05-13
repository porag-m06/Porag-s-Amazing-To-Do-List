import './style.css';
import refresh from '../assets/rotate-solid.svg';

const refreshImg = document.getElementById('refresh');
refreshImg.src = refresh;

const todoTasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'complete To-do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'do the daily coding challenges',
    completed: false,
    index: 1,
  },
];

todoTasks.sort((a, b) => a.index - b.index);

const setTodoList = (todoTasks) => {
  const list = document.querySelector('.list');
  todoTasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'hbb';
    listItem.innerText = task.description;
    list.appendChild(listItem);
  });
};

setTodoList(todoTasks);