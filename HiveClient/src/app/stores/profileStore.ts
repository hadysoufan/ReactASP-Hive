import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent.ts";
import { Profile } from "../models/profile.ts";
import { store } from "./store.ts";

/**
 * MobX store for managing user profiles.
 * @class ProfileStore
 */
export default class ProfileStore {
  /**
   * The currently loaded user profile or null if not loaded.
   * @memberof ProfileStore
   * @type {Profile | null}
   */
  profile: Profile | null = null;

  /**
   * Indicates whether the user profile is currently being loaded.
   * @memberof ProfileStore
   * @type {boolean}
   */
  loadingProfile = false;

  uploading = false;

  /**
   * Creates an instance of the ProfileStore.
   * Initializes MobX auto-observable functionality for reactive updates.
   * @memberof ProfileStore
   * @constructor
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Checks if the currently loaded profile belongs to the current user.
   * @memberof ProfileStore
   * @type {boolean}
   */
  get isCurrentUser() {
    if (store.userStore.user && this.profile) {
      return store.userStore.user.username === this.profile.username;
    }
    return false;
  }

  /**
   * Asynchronously loads a user profile by the specified username.
   * @memberof ProfileStore
   * @async
   * @param {string} username - The username of the profile to be loaded.
   */
  loadProfile = async (username: string): Promise<void> => {
    this.loadingProfile = true;
    try {
      const profile = await agent.Profiles.get(username);

      runInAction(() => {
        this.profile = profile;
        this.loadingProfile = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => (this.loadingProfile = false));
    }
  };

   /**
   * Uploads a photo to the user's profile.
   * @memberof ProfileStore
   * @async
   * @param {Blob} file - The image file to be uploaded.
   */
  uploadPhoto = async (file: Blob) => {
    this.uploading = true;
    try {
      const repsonse = await agent.Profiles.uploadPhoto(file);
      const photo = repsonse.data;
      runInAction(() => {
        if (this.profile) {
          this.profile.photos?.push(photo);
          if (photo.isMain && store.userStore.user) {
            store.userStore.setImage(photo.url);
            this.profile.image = photo.url;
          }
        }
        this.uploading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => (this.uploading = false));
    }
  };
}
