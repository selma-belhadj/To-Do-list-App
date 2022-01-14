export default class Tasks {
  constructor() {
    this.list = localStorage.getItem('tasks-container') ? JSON.parse(localStorage.getItem('tasks-container')) : [];
  }

  addTask(task) {
    this.list.push(task);
    localStorage.setItem('tasks-container', JSON.stringify(this.list));
  }

  RemoveTask(index) {
    this.list = this.list.filter((task) => task.index !== index);
    this.list = this.list.map((t) => {
      if (t.index > index) {
        t.index -= 1;
      }
      return t;
    });
    localStorage.setItem('tasks-container', JSON.stringify(this.list));
  }

  EditTask(taskID, taskDescription) {
    const newData = this.list.map((todo) => {
      if (todo.index === taskID) {
        return { ...todo, description: taskDescription };
      }
      return todo;
    });
    localStorage.setItem('tasks-container', JSON.stringify(newData));
  }

  SortTasks(oldIndex, newIndex) {
    this.list[oldIndex - 1].index = newIndex;
    localStorage.setItem('tasks-container', JSON.stringify(this.list));
  }
}