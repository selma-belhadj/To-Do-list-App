const display = (taskLists, tasksContainer) => {
  const sortedTodos = taskLists.list.sort((a, b) => a.index - b.index);
  tasksContainer.innerHTML = '';
  let todosHtml = '';
  sortedTodos.forEach((todo) => {
    const checkedTodo = todo.completed ? 'checked' : '';
    const checkClass = todo.completed ? 'checked' : '';
    todosHtml += `  <div class="todo-item">
                              <div>
                                  <input id="${todo.id}" type="checkbox" class="todo-check" ${checkedTodo} />
                                  <input id="${todo.id}" type="text" class="todo-edit" ${checkClass} value="${todo.description}" />
                              </div>
                              <button id="${todo.id}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                          </div>
          `;
  });

  tasksContainer.innerHTML = todosHtml;

  // remove todo
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      element.remove();
      taskLists.RemoveTask(e.target.parentNode.id);
    });
  });

  // edit todo
  const todosContent = document.querySelectorAll('.todo-edit');
  todosContent.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      taskLists.EditTask(e.target.id, e.target.value);
    });
  });

  // Complete Todo
  const taskCheck = document.querySelectorAll('.todo-check');
  taskCheck.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      const { id } = e.target;
      taskLists.CompleteTask(id, e.target.checked);
      e.target.parentNode.lastElementChild.classList.toggle('checked');
    });
  });
};
export default display;
