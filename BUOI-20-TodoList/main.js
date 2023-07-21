const todoList = [
    {
        id: 1,
        title: 'Làm việc nhà',
        status: true,
    },
    {
        id: 2,
        title: 'Nhậu',
        status: false,
    },
    {
        id: 3,
        title: 'Chơi Game',
        status: true,
    },
];

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

const renderTodoList = () => {
    taskList.innerHTML = ''; //Xóa hết nội dung trước khi render
    // Th1 không có todo trong danh sách
    if (todoList.length === 0) {
        taskList.insertAdjacentHTML('afterbegin', '<li>Danh sách công việc trống</li>');
        return;
    }

    // Th2 có todo trong danh sách
    let html = '';
    todoList.forEach((t) => {
        html += `
        <li>
            <input type="checkbox" ${t.status ? 'checked' : ''}>
            <span class="${t.status ? 'active' : ''}">${t.title}</span>
            <button>Edit</button>
            <button>Delete</button>
        </li>
        `;
    });
    taskList.innerHTML = html;
};

function editTask(taskElement, taskSpan) {
    const newTaskText = prompt('Edit task:', taskSpan.innerText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.innerText = newTaskText;
    }
}

function deleteTask(taskElement) {
    if (confirm('Are you sure you want to delete this task?')) {
        taskElement.remove();
    }
}
