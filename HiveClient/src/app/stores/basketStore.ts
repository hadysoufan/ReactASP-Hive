import { makeAutoObservable, action } from "mobx";
import { createContext, useContext } from "react";
import { Basket } from "../models/basket";

interface StoreContextValue {
  basket: Basket | null;
  setBasket: (basket: Basket) => void;
  removeItem: (productId: number, quantity: number) => void;
}

export const StoreContext = createContext<StoreContextValue | undefined>(
  undefined
);

export function useStoreContext() {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw Error("Oops - we do not seem to be inside the provider");
  }

  return context;
}

export default class BasketStore {
  basket: Basket | null = null;

  constructor() {
    makeAutoObservable(this, {
      setBasket: action,
      removeItem: action,
    });
  }

  setBasket = (basket: Basket) => {
    this.basket = basket;
  };

  removeItem = (productId: number, quantity: number) => {
    if (!this.basket) return;

    const items = [...this.basket.items];
    const itemIndex = items.findIndex((i) => i.productId === productId);
    if (itemIndex >= 0) {
      items[itemIndex].quantity -= quantity;
      if (items[itemIndex].quantity === 0) items.splice(itemIndex, 1);
      this.setBasket({ ...this.basket, items });
    }
  };
}
