import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent.ts";
import { Profile } from "../models/profile.ts";
import { store } from "./store.ts";

/**
 * MobX store for managing user profiles.
 * @class ProfileStore
 */
export default class ProfileStore {
  profile: Profile | null = null;
  loadingProfile = false;
  loading = false;
  uploading = false;
  followings: Profile[] = [];
  loadingFollowings = false;

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

  updateFollowing = async (username: string) => {
    this.loading = true;
    try {
      await agent.Profiles.updateFollowing(username);
      store.activityStore.updateAttendeeFollowing(username);
      runInAction(() => {
        if (this.profile) {
          if (this.profile.username === username) {
            this.profile.following = !this.profile.following;
            this.profile.following
              ? this.profile.followersCount++
              : this.profile.followersCount--;
          } else if (this.profile.username === store.userStore.user?.username) {
            // Update followingCount for the current user
            this.profile.following
              ? this.profile.followingCount++
              : this.profile.followingCount--;
          }
        }
        // Update followings array
        this.followings.forEach((profile) => {
          if (profile.username === username) {
            profile.following = !profile.following;
            profile.following
              ? profile.followersCount++
              : profile.followersCount--;
          }
        });
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => (this.loading = false));
    }
  };
  

  loadFollowings = async (predicate: string) => {
    this.loadingFollowings = true;
    try {
      const followings = await agent.Profiles.listFollowings(
        this.profile!.username,
        predicate
      );
      runInAction(() => {
        this.followings = followings;
        this.loadingFollowings = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => (this.loadingFollowings = false));
    }
  };
}
