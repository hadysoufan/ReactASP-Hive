import { makeAutoObservable, runInAction } from "mobx";
import { Post } from "../models/post.ts";
import agent from "../api/agent.ts";
import { v4 as uuid } from "uuid";

/**
 * MobX store for managing posts.
 * @class PostStore
 */
export default class PostStore {
  /**
   * Map containing posts with their unique identifiers.
   * @type {Map<string, Post>}
   */
  postRegistry = new Map<string, Post>();

  /**
   * The currently selected post in the store.
   * @type {Post | undefined}
   */
  selectedPost: Post | undefined = undefined;

  /**
   * Flag indicating whether the store is in edit mode.
   * @type {boolean}
   */
  editMode = false;

  /**
   * Flag indicating whether data is currently being loaded.
   * @type {boolean}
   */
  loading = false;

  /**
   * Flag indicating whether initial data loading is in progress.
   * @type {boolean}
   */
  loadingInitial = false;

  /**
   * Constructs an instance of the PostStore.
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Get posts sorted by date.
   * @returns {Post[]} - Array of posts sorted by date.
   */
  get postsByDate() {
    return Array.from(this.postRegistry.values()).sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
  }

  /**
   * Loads all posts from the server.
   */
  loadPosts = async () => {
    this.setLoadingInitial(true);
    try {
      const posts = await agent.Posts.list();
      posts.forEach((post) => {
        this.setPost(post);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  /**
   * Loads a specific post by its unique identifier.
   * @param {string} id - The unique identifier of the post.
   * @returns {Post | undefined} - The loaded post, if found.
   */
  loadPost = async (id: string) => {
    let post = this.getPost(id);
    if (post) {
      this.selectedPost = post;
      return post;
    } else {
      this.setLoadingInitial(true);
      try {
        post = await agent.Posts.details(id);
        this.setPost(post);
        runInAction(() => (this.selectedPost = post));
        this.setLoadingInitial(false);
        return post;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };

  /**
   * Gets a post from the registry by its unique identifier.
   * @param {string} id - The unique identifier of the post.
   * @returns {Post | undefined} - The post, if found.
   */
  private getPost = (id: string) => {
    return this.postRegistry.get(id);
  };

  /**
   * Sets a post in the registry, adjusting its date format.
   * @param {Post} post - The post to be set in the registry.
   */
  private setPost = (post: Post) => {
    post.date = post.date.split("T")[0];
    this.postRegistry.set(post.id, post);
  };

  /**
   * Sets the loadingInitial state.
   * @param {boolean} state - The loadingInitial state to be set.
   */
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  /**
   * Creates a new post on the server.
   * @param {Post} post - The post to be created.
   */
  createPost = async (post: Post) => {
    this.loading = true;
    post.id = uuid();
    try {
      await agent.Posts.create(post);
      runInAction(() => {
        this.postRegistry.set(post.id, post);
        this.selectedPost = post;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  /**
   * Updates an existing post on the server.
   * @param {Post} post - The post to be updated.
   */
  updatePost = async (post: Post) => {
    this.loading = true;
    try {
      await agent.Posts.update(post);
      runInAction(() => {
        this.postRegistry.set(post.id, post);
        this.selectedPost = post;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  /**
   * Deletes a post from the server by its unique identifier.
   * @param {string} id - The unique identifier of the post to be deleted.
   */
  deletePost = async (id: string) => {
    this.loading = true;
    try {
      await agent.Posts.delete(id);
      runInAction(() => {
        this.postRegistry.delete(id);
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
