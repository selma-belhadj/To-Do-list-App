const display = (taskLists, tasksContainer) => {
  const sortedTodos = taskLists.list.sort((a, b) => a.index - b.index);
  tasksContainer.innerHTML = '';
  let todosHtml = '';
  sortedTodos.forEach((todo) => {
    todosHtml += `  <div class="todo-item">
                              <div>
                                  <input id="${todo.id}" type="checkbox" class="todo-check" />
                                  <input id="${todo.index}" type="text" class="todo-edit" value="${todo.description}" />
                              </div>
                              <button id="${todo.index}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                          </div>
          `;
  });

  tasksContainer.innerHTML = todosHtml;

  // remove todo
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      taskLists.RemoveTask(Number(e.target.parentNode.id));
      element.remove();
    });
  });

  // edit todo
  const todosContent = document.querySelectorAll('.todo-edit');
  todosContent.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      taskLists.EditTask(Number(e.target.id), e.target.value);
    });
  });
};
export default display;
