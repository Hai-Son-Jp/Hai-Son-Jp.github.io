var todoList = [];

function renderTodoList() {
    let html = '';
    if (todoList.length === 0) {
        html = 'Danh sách công việc trống';
    } else {
        for (let i = 0; i < todoList.length; i++) {
            const task = todoList[i];
            html += `
            <li id="task_${task.id}">
                <input type="checkbox" onclick="toggleCompleted(${task.id})" ${task.status ? 'checked' : ''}>
                <span class="title_${task.id} ${task.status ? 'active' : ''}">${task.title}</span>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </li>
        `;
        }
    }
    document.getElementById('taskList').innerHTML = html;
}

//Add button
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTaskTitle = taskInput.value.trim();
    if (newTaskTitle === '') {
        alert('Vui lòng nhập công việc!');
        return;
    }
    const newTask = {
        id: todoList.length + 1,
        title: newTaskTitle,
        status: false,
    };
    todoList.push(newTask);
    renderTodoList();
    taskInput.value = '';
}

// Lắng nghe sự kiện nút Enter trong ô input
function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}
const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keypress', handleEnterKeyPress);

//Delete button
function deleteTask(taskId) {
    const index = todoList.findIndex((task) => task.id === taskId);
    if (index === -1) {
        return;
    }
    todoList.splice(index, 1);
    renderTodoList();
}

//Edit button
function editTask(taskId) {
    const task = todoList.find((task) => task.id === taskId);
    if (!task) {
        return;
    }
    const newTitle = window.prompt('Nhập tiêu đề mới cho công việc:', task.title);
    if (newTitle === null) {
        return;
    }
    task.title = newTitle.trim();
    renderTodoList();
}

// Checkbox function
function toggleCompleted(taskId) {
    const task = todoList.find((task) => task.id === taskId);
    if (!task) {
        return;
    }
    task.status = !task.status;
    const taskElement = document.getElementById(`task_${taskId}`);
    if (taskElement) {
        const checkbox = taskElement.querySelector('input[type="checkbox"]');
        const span = taskElement.querySelector('span');
        if (task.status) {
            checkbox.checked = true;
            span.classList.add('active');
        } else {
            checkbox.checked = false;
            span.classList.remove('active');
        }
    }
}
