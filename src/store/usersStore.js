import { makeAutoObservable, runInAction } from "mobx";

class UserStore {
  users = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUsers() {
    this.loading = true;
    try {
      const data = await mockApi.fetchUsers();
      runInAction(() => {
        this.users = data;
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e;
        this.loading = false;
      });
    }
  }
}

const userStore = new UserStore(); // Create a single instance
export default userStore;

export const mockApi = {
  fetchUsers: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
      { id: 3, name: "Tom Johnson", email: "tom.johnson@example.com" },
    ];
  },
};
