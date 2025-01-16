const { makeAutoObservable } = require("mobx");

class ThemeStore {
  theme = "dark";

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
  }
}

const themeStore = new ThemeStore();

export default themeStore;
