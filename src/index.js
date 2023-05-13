import './style.css';
import refresh from  '../assets/rotate-solid.svg';

const refreshImg = document.getElementById("refresh");
refreshImg.src = refresh;

const todo_tasks = [
  {
    description: "wash the dishes",
    completed: false,
    index: 0
  },
  {
    description: "complete To-do list project",
    completed: false,
    index: 2
  },
  {
    description: "do the daily coding challenges",
    completed: false,
    index: 1
  }
];

todo_tasks.sort((a,b)=>{
  return a.index - b.index;
});

const setTodoList = (todo_tasks) => {
  console.log('before:',todo_tasks);
  const list = document.querySelector(".list");

  todo_tasks.forEach((task)=>{
    let listItem = document.createElement('li');
    listItem.className = "hbb";
    listItem.innerText = task.description;
    list.appendChild(listItem);
  })

};

setTodoList(todo_tasks);