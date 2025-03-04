import { makeAutoObservable } from "mobx";

class UserViewModel {
  user;

  constructor(user) {
    this.user = user;
    makeAutoObservable(this);
  }

  updateName(newName) {
    this.user.name = newName;
  }
}

export default UserViewModel;
