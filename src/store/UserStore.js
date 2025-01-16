const { makeAutoObservable } = require("mobx");

class UserStore {
  name = "";
  isLoggedIn = false;

  constructor() {
    makeAutoObservable(this);
  }

  setName(name) {
    this.name = name;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.name = "";
  }
}

const userStore = new UserStore();

export default userStore;
