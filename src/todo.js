export default class TodoTasks {
    constructor(description, completed, index) {
        this.description = description;
        this.completed = completed;
        this.index = index;
        this.taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    AddTodo = () => {
        const description = this.description;
        const completed = this.completed;
        const index = this.index;
        this.taskList.push({ description, completed, index });
        localStorage.setItem('tasks', JSON.stringify(this.taskList))
    }

    showTodoList = () => {
        this.taskList.sort((a, b) => a.index - b.index);

        const list = document.querySelector('.list');
        list.innerHTML = '';

        for (let i = 0; i < this.taskList.length; i += 1) {
            const listItem = document.createElement('li');
            listItem.className = 'hbb';
            listItem.classList.add('added-task');
            listItem.id = `${i}`
            listItem.innerHTML = `<input type="checkbox" class="check${i}" name="" id="" value="">
            <input type="text" class="content content${i}" name="" id="${i}" value ="${this.taskList[i].description}">
            <button id="trash-btn"><img id="trash-can" src='../assets/trash-can-regular.svg' alt="trash icon"></button>`;            
            list.appendChild(listItem);
            
            const checkbox = document.querySelector(`.check${i}`);
            checkbox.addEventListener('change',()=>{
                if(checkbox.checked){
                    document.querySelector(`.content${i}`).classList.add('completed');
                }else{
                    document.querySelector(`.content${i}`).classList.remove('completed');
                }
            })
        };

        const tasks = document.querySelectorAll('.added-task');
        const taskTrashBtns = document.querySelectorAll('#trash-btn');
        this.removeTask(tasks, taskTrashBtns);

        const taskDescriptions = document.querySelectorAll('.content');
        this.saveOnChangeTask(taskDescriptions);
    }

    removeTask = (tasks, taskTrashBtns) => {
        for (let i = 0; i < tasks.length; i += 1) {
            taskTrashBtns[i].addEventListener('click', () => {
                this.taskList.splice(tasks[i].getAttribute('id'), 1);
                this.taskList.sort((a, b) => a.index - b.index);
                this.resetIndex();
                localStorage.setItem('tasks', JSON.stringify(this.taskList));
                this.showTodoList();
            })
        };
    }

    saveOnChangeTask = (taskDescriptions)=>{
        taskDescriptions.forEach(t => {
            t.addEventListener('change',()=>{
                this.taskList[t.getAttribute('id')].description = t.value;
                localStorage.setItem('tasks', JSON.stringify(this.taskList));
            })
        });
    }

    getLocalStorage = () => this.taskList;

    emptyList = () => {
        this.taskList = [];
        localStorage.setItem('tasks', JSON.stringify(this.taskList));
        this.showTodoList();
    }

    resetIndex = ()=>{
        for(let i = 0; i< this.taskList.length; i+=1){
            this.taskList[i].index = i;
        }
    }
}