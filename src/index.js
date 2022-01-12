import './style.css';

const tasklist = [{
  description: 'task 1',
  completed: true,
  index: 1,
}, {
  description: 'task 2',
  completed: false,
  index: 2,
}, {
  description: 'task 3',
  completed: true,
  index: 3,
}, {
  description: 'task 4',
  completed: true,
  index: 4,
}];

const render = (tasks) => {
  const tasksListSorted = tasks.sort((a, b) => a.index - b.index);
  const tasksContainer = document.querySelector('.tasks-container');
  let todosHtml = '';
  tasksListSorted.forEach((todo) => {
    todosHtml += ` <div class="todo-item">
        <input type="checkbox" class="checkmark" /><span> ${todo.description}</span>
    </div>`;
  });
  tasksContainer.innerHTML = todosHtml;
};

render(tasklist);
