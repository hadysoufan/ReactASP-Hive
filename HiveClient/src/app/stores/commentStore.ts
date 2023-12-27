import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import { ChatComment } from "../models/comment.ts";
import { makeAutoObservable, runInAction } from "mobx";
import { store } from "./store.ts";

/**
 * MobX store for managing comments using SignalR for real-time updates.
 * @class CommentStore
 */
export default class CommentStore {
  /**
   * Array containing chat comments.
   * @type {ChatComment[]}
   */
  comments: ChatComment[] = [];

  /**
   * SignalR hub connection for real-time communication.
   * @type {HubConnection | null}
   */
  hubConnection: HubConnection | null = null;

  /**
   * Constructs an instance of the CommentStore.
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Creates a SignalR hub connection for the specified activity.
   * @param {string} activityId - The unique identifier of the activity.
   */
  createHubConnection = (activityId: string) => {
    if (store.activityStore.selectedActivity) {
      this.hubConnection = new HubConnectionBuilder()
        .withUrl("http://localhost:5000/chat?activityId=" + activityId, {
          accessTokenFactory: () => store.userStore.user?.token!,
        })
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();

      this.hubConnection
        .start()
        .catch((error) =>
          console.log("Error establishing the connection: ", error)
        );

      this.hubConnection.on("LoadComments", (comments: ChatComment[]) => {
        runInAction(() => {
          comments.forEach((comment) => {
            comment.createdAt = new Date(comment.createdAt + 'Z');
          });
          this.comments = comments;
        });
      });

      this.hubConnection.on("ReceiveComment", (comment: ChatComment) => {
        runInAction(() => {
          comment.createdAt = new Date(comment.createdAt);
          this.comments.unshift(comment);
        });
      });
    }
  };

  /**
   * Stops the SignalR hub connection.
   */
  stopHubConnection = () => {
    this.hubConnection
      ?.stop()
      .catch((error) => console.log("Error stopping connection: ", error));
  };

  /**
   * Clears the comments array and stops the hub connection.
   */
  clearComments = () => {
    this.comments = [];
    this.stopHubConnection();
  };

  /**
   * Adds a new comment using the SignalR hub connection.
   * @param {any} values - The comment values to be sent.
   */
  addComment = async (values: any) => {
    values.activityId = store.activityStore.selectedActivity?.id;
    try {
      await this.hubConnection?.invoke("SendComment", values);
    } catch (error) {
      console.log(error);
    }
  };
}
