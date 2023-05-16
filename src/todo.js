import trashImgSrc from '../assets/trash-can-regular.svg';

export default class TodoTasks {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    this.taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  AddTodo = () => {
    const { description } = this;
    const { completed } = this;
    const { index } = this;
    this.taskList.push({ description, completed, index });
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  showTodoList = () => {
    this.taskList.sort((a, b) => a.index - b.index);

    const list = document.querySelector('.list');
    list.innerHTML = '';

    for (let i = 0; i < this.taskList.length; i += 1) {
      const listItem = document.createElement('li');
      listItem.className = 'hbb';
      listItem.classList.add('added-task');
      listItem.id = `${i}`;
      listItem.innerHTML = `<input type="checkbox" class="check${i}" name="" id="" value="">
            <input type="text" class="content content${i}" name="" id="${i}" value ="${this.taskList[i].description}">
            <button id="trash-btn"><img id="trash-can" src="${trashImgSrc}" alt="trash icon"></button>`;
      list.appendChild(listItem);
      const checkbox = document.querySelector(`.check${i}`);
      this.isCompletedAndChecked(checkbox, i);
    }

    const tasks = document.querySelectorAll('.added-task');
    const taskTrashBtns = document.querySelectorAll('#trash-btn');
    this.removeTask(tasks, taskTrashBtns);

    const taskDescriptions = document.querySelectorAll('.content');
    this.saveOnChangeTask(taskDescriptions);
  }

  isCompletedAndChecked = (checkbox, i) => {
    if (this.taskList[i].completed) {
      checkbox.checked = true;
      document.querySelector(`.content${i}`).classList.add('completed');
    }

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        document.querySelector(`.content${i}`).classList.add('completed');
        this.taskList[i].completed = true;
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
      } else {
        document.querySelector(`.content${i}`).classList.remove('completed');
        this.taskList[i].completed = false;
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
      }
    });
  }

  removeTask = (tasks, taskTrashBtns) => {
    for (let i = 0; i < tasks.length; i += 1) {
      taskTrashBtns[i].addEventListener('click', () => {
        this.taskList.splice(tasks[i].getAttribute('id'), 1);
        this.taskList.sort((a, b) => a.index - b.index);
        this.resetIndex();
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
        this.showTodoList();
      });
    }
  }

  saveOnChangeTask = (taskDescriptions) => {
    taskDescriptions.forEach((t) => {
      t.addEventListener('change', () => {
        this.taskList[t.getAttribute('id')].description = t.value;
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
      });
    });
  }

  getLocalStorage = () => this.taskList;

  clearAllCompleted = () => {
    this.taskList = this.taskList.filter((task) => !task.completed);
    this.taskList.sort((a, b) => a.index - b.index);
    this.resetIndex();
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
    this.showTodoList();
  }

  resetIndex = () => {
    for (let i = 0; i < this.taskList.length; i += 1) {
      this.taskList[i].index = i;
    }
  }
}