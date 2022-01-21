/**
 * @jest-environment jsdom
 */
import Tasks from '../tasks.js';

document.body.innerHTML = `
<div class="container">
<h1 class="title">Today's To Do</h1>
<form>
    <input class="input-todo" type="text" placeholder="Add to your List..." autofocus />
    <button class="add-btn" type="submit">
        <i class="fas fa-location-arrow"></i>
    </button>
</form>
<div class="tasks-container">
    <!-- Add Todos Automatically --> 
</div>
<div class="clear">
    <a class="clear-btn">Clear All</a>
</div>
</div>

     `;

describe('add and remove', () => {
  window.localStorage = Storage.prototype;
  test('Add task', () => {
    const todoList = new Tasks();
    const newTodo = {
      id: 'id123',
      description: 'task1',
      completed: false,
      index: 1,
    };
    const newTodo2 = {
      id: 'id12sdad3',
      description: 'task2',
      completed: false,
      index: 2,
    };
    todoList.addTask(newTodo);
    expect(todoList.list).toHaveLength(1);
    todoList.addTask(newTodo2);
    expect(todoList.list).toHaveLength(2);
    expect(todoList.list[1].description).toBe('task2');
  });
  test('remove task', () => {
    const todoList = new Tasks();
    const newTodo = {
      id: 'id4d5sa',
      description: 'task3',
      completed: false,
      index: 3,
    };
    todoList.addTask(newTodo);
    todoList.RemoveTask(newTodo.id);
    expect(todoList.list[1].description).toBe('task2');
    expect(todoList.list).toHaveLength(2);
  });
});