//import './style.css';
//import refresh from '../assets/rotate-solid.svg';
//import arrowD from '../assets/arrow-turn-down-left.png'
//import trashT from '../assets/trash-can-regular.svg'
import TodoTasks from "./todo.js"

// const refreshImg = document.getElementById('refresh');
// refreshImg.src = refresh;
// const arrowImg = document.getElementById('arrow-d-l');
// arrowImg.src = arrowD;
// const trashImg = document.getElementById('arrow-d-l');
// trashImg.src = trashT;

const todoForm = document.querySelector('#task-form');
const clearList = document.querySelector('.btn');

const todos = new TodoTasks();
if (todos.getLocalStorage().length > 0) {
  todos.showTodoList();
}


["keypress", "submit"].forEach((item) => {
  todoForm.addEventListener(item, (event) => {
    if (event.key === "Enter" || event.type === "submit") {
      //todoFormlistener(event);
      event.preventDefault();
      const taskDescription = document.querySelector('.new-item').value;
      const newTask = new TodoTasks(taskDescription, false, (new TodoTasks()).getLocalStorage().length);
      newTask.AddTodo();
      newTask.showTodoList();
      todoForm.reset();
    }
  })
});


clearList.addEventListener('click', () => (new TodoTasks()).emptyList());

