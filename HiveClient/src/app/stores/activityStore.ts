import { makeAutoObservable, runInAction } from "mobx";
import { Activity } from "../models/activity";
import agent from "../api/agent.ts";
import { v4 as uuid } from "uuid";

/**
 * MobX store for managing activities.
 * @class ActivityStore
 */
class ActivityStore {
  activityRegistry = new Map<string, Activity>();
  selectedActivity: Activity | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get activitiesByDate() {
    return Array.from(this.activityRegistry.values()).sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
  }

  /**
   * Asynchronously loads activities from the backend.
   * @memberof ActivityStore
   * @async
   * @function
   */
  loadActivities = async () => {
    try {
      const activities = await agent.Activities.list();
      activities.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
        this.activityRegistry.set(activity.id, activity);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  /**
   * Sets the loadingInitial state.
   * @memberof ActivityStore
   * @param {boolean} state - The new loadingInitial state.
   */
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  /**
   * Selects an activity by its ID.
   * @memberof ActivityStore
   * @param {string} id - The ID of the activity to be selected.
   */
  selectActivity = (id: string) => {
    this.selectedActivity = this.activityRegistry.get(id);
  };

  /**
   * Cancels the selection of the currently selected activity.
   * @memberof ActivityStore
   */
  cancelSelectedActivity = () => {
    this.selectedActivity = undefined;
  };

  /**
   * Opens the activity form for either editing an existing activity or creating a new one.
   * @memberof ActivityStore
   * @param {string | undefined} id - The ID of the activity to be edited, or undefined for creating a new activity.
   */
  openForm = (id?: string) => {
    id ? this.selectActivity(id) : this.cancelSelectedActivity();
    this.editMode = true;
  };

  /**
   * Closes the activity form.
   * @memberof ActivityStore
   */
  closeForm = () => {
    this.editMode = false;
  };

  /**
   * Asynchronously creates a new activity.
   * @memberof ActivityStore
   * @async
   * @param {Activity} activity - The activity object to be created.
   */
  createActivity = async (activity: Activity) => {
    this.loading = true;
    activity.id = uuid();
    try {
      await agent.Activities.create(activity);
      runInAction(() => {
        this.activityRegistry.set(activity.id, activity);
        this.selectedActivity = activity;
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
   * Asynchronously updates an existing activity.
   * @memberof ActivityStore
   * @async
   * @param {Activity} activity - The updated activity object.
   */
  updateActivity = async (activity: Activity) => {
    this.loading = true;
    try {
      await agent.Activities.update(activity);
      runInAction(() => {
        this.activityRegistry.set(activity.id, activity);
        this.selectedActivity = activity;
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
   * Asynchronously deletes an activity by its ID.
   * @memberof ActivityStore
   * @async
   * @param {string} id - The ID of the activity to be deleted.
   */
  deleteActivity = async (id: string) => {
    this.loading = true;
    try {
      await agent.Activities.delete(id);
      runInAction(() => {
        this.activityRegistry.delete(id);
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

export default ActivityStore;
