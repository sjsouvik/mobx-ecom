import { makeAutoObservable, autorun, runInAction } from "mobx";

import { isProductInCart } from "../helper/utils";
import { Product } from "../pages/Home/Home";

const fakeFetch = () => {
  const success = true;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!success) {
        reject("Oops! failed to add to cart. Please try after sometime.");
      }

      resolve(["apple", "orange"]);
    }, 0.5 * 1000);
  });
};

class CartStore {
  cart: Product[] = [];

  constructor() {
    // makeObservable(this, {
    //   cart: observable,
    //   addToCart: action,
    //   removeFromCart: action,
    //   length: computed,
    //   totalPrice: computed
    // });

    makeAutoObservable(this);
  }

  async addToCart(product: Product) {
    try {
      const data = await fakeFetch();

      runInAction(() => {
        if (!isProductInCart(this.cart, product.id)) {
          this.cart.push(product);
        }
      });

      if (data) {
        console.log("Added to cart successfully", product.title);
      }
    } catch (error) {
      console.error(error);
    }
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter((item) => item.id !== productId);
  }

  get length() {
    return this.cart.length;
  }

  get totalPrice() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
}

const cartStore = new CartStore();

export default cartStore;

autorun(() => {
  console.log("No of items in cart -", cartStore.length);
});
