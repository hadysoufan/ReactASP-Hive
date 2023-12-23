import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/serverError";

/**
 * MobX store for managing common application state.
 * @class CommonStore
 */
export default class CommonStore {
  error: ServerError | null = null;
  token: string | null = localStorage.getItem("jwt");
  appLoaded = false;

  constructor() {
    makeAutoObservable(this);

    /**
     * Reaction to changes in the 'token' property.
     * Updates the local storage with the new token value.
     */
    reaction(
      () => this.token,
      (token) => {
        if (token) {
          localStorage.setItem("jwt", token);
        } else {
          localStorage.removeItem("jwt");
        }
      }
    );
  }

  /**
   * Sets the server error for the application.
   * @memberof CommonStore
   * @param {ServerError} error - The server error object.
   */
  setServerError = (error: ServerError) => {
    this.error = error;
  };

  /**
   * Sets the authentication token.
   * @memberof CommonStore
   * @param {string | null} token - The authentication token.
   */
  setToken = (token: string | null) => {
    this.token = token;
  };

  /**
   * Sets the 'appLoaded' flag to indicate that the application has finished loading.
   * @memberof CommonStore
   */
  setAppLoaded = () => {
    this.appLoaded = true;
  };
}
