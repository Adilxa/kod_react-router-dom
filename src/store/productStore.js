import { makeAutoObservable } from "mobx";

class ProductStore {
  products = [
    {
      id: 1,
      name: "Banana",
      price: 1.2,
      quantity: 10,
    },
    {
      id: 2,
      name: "Apple",
      price: 1,
      quantity: 20,
    },
    {
      id: 3,
      name: "Cherry",
      price: 2.2,
      quantity: 100,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  increment(id) {
    const product = this.products.find(p => p.id === id);
    if (product) product.quantity += 1;
  }

  decriment(id) {
    const product = this.products.find(p => p.id === id);
    if (product && product.quantity > 0) {
      product.quantity -= 1;
    }
  }
}

const productStore = new ProductStore();

export default productStore;
