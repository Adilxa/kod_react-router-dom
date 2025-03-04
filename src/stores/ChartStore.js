import { makeAutoObservable } from "mobx";

class ChartStore {
  data = [
    {
      name: "page a",
      uv: 3400,
      pv: 1000,
    },
    {
      name: "page b",
      uv: 3000,
      pv: 2000,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  updateData(newData) {
    this.data = newData;
  }
}

const chartStore = new ChartStore();

export default chartStore;
