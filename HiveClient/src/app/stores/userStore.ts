import { makeAutoObservable, runInAction } from "mobx";
import { User, UserFormValues } from "../models/user";
import agent from "../api/agent.ts";
import { store } from "../stores/store.ts";
import { Router } from "react-router-dom";

/**
 * MobX store for managing user-related state.
 * @class UserStore
 */
export default class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Indicates whether a user is currently logged in.
   * @memberof UserStore
   * @type {boolean}
   */
  get isLoggedIn() {
    return !!this.user;
  }

  /**
   * Asynchronously logs in a user with the provided credentials.
   * @memberof UserStore
   * @async
   * @function
   * @param {UserFormValues} creds - The user's login credentials.
   */
  login = async (creds: UserFormValues) => {
    try {
      const user = await agent.Account.login(creds);      
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
    } catch (error) {
      throw error;
    }
  };

  /**
   * Asynchronously registers a new user with the provided credentials.
   * @memberof UserStore
   * @async
   * @function
   * @param {UserFormValues} creds - The user's registration information.
   */
  register = async (creds: UserFormValues) => {
    try {
      const user = await agent.Account.register(creds);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
    } catch (error) {
      throw error;
    }
  };

  /**
   * Logs out the currently logged-in user.
   * @memberof UserStore
   * @function
   */
  logout = () => {
    store.commonStore.setToken(null);
    this.user = null;
  };

  /**
   * Asynchronously retrieves the current user's information.
   * @memberof UserStore
   * @async
   * @function
   */
  getUser = async () => {
    try {
      const user = await agent.Account.current();
      runInAction(() => (this.user = user));
    } catch (error) {
      console.log(error);
    }
  };
}
