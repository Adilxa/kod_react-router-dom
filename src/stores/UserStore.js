import {makeAutoObservable} from "mobx";

class UserStore {
    users = [];
    loading = true;

    constructor() {
        makeAutoObservable(this);
        this.fetchUsers()
    }

    async fetchUsers() {
        try {
            const response = await
                fetch('https://jsonplaceholder.typicode.com/users');
            this.users = await response.json()
        } catch (error) {
            alert("Failed to fetch users");
        } finally {
            this.loading = false;
        }
    }

}

const userStore = new UserStore();
export default userStore;