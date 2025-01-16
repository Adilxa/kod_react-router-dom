import { makeAutoObservable } from "mobx";

class TodoListStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask(title) {
    this.tasks.push({
      id: Date.now(),
      title: title,
      completed: false,
    });
  }

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id != id);
  }

  toggleTask(id) {
    const task = this.tasks.find(task => task.id == id);
    if (task) {
      task.completed = !task.completed;
    }
  }
}

const todoStore = new TodoListStore();

export default todoStore;
