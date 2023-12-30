import { createContext, useContext } from "react";
import ActivityStore from "./activityStore.ts";
import UserStore from "./userStore.ts";
import CommonStore from "./commonStore.ts";
import ModalStore from "./modalStore.ts";
import ProfileStore from "./profileStore.ts";
import PostStore from "./postStore.ts";
import CommentStore from "./commentStore.ts";
import PhotoStore from "./photoStore.ts";

/**
 * Interface representing the combined stores available in the application.
 * @interface Store
 * @property {ActivityStore} activityStore - The MobX store managing activities.
 * @property {CommonStore} commonStore - The MobX store managing common application state.
 * @property {UserStore} userStore - The MobX store managing user-related state.
 */
interface Store {
  activityStore: ActivityStore;
  commonStore: CommonStore;
  userStore: UserStore;
  modalStore: ModalStore;
  profileStore: ProfileStore;
  postStore: PostStore;
  commentStore: CommentStore;
  photoStore: PhotoStore;
}

/**
 * Object containing instances of MobX stores.
 * @const store
 * @type {Store}
 */
export const store: Store = {
  activityStore: new ActivityStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  modalStore: new ModalStore(),
  profileStore: new ProfileStore(),
  postStore: new PostStore(),
  commentStore: new CommentStore(),
  photoStore: new PhotoStore(),
};

/**
 * React context for providing access to MobX stores throughout the application.
 * @const StoreContext
 * @type {React.Context<Store>}
 */
export const StoreContext = createContext(store);

/**
 * Custom hook for accessing the MobX stores within a functional component.
 * @function useStore
 * @returns {Store} The combined MobX stores.
 */
export function useStore() {
  return useContext(StoreContext);
}
