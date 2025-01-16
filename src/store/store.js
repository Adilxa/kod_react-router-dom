import { action, makeAutoObservable } from "mobx";

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  get isEven() {
    return this.count % 2 === 0;
  }
}

const counterStore = new CounterStore();

export default counterStore;
