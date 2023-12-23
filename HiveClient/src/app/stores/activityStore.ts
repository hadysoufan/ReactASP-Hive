import { makeAutoObservable } from "mobx";
import { Activity } from "../models/activity";
import agent from "../api/agent.ts";

/**
 * MobX store for managing activities.
 * @class ActivityStore
 */
class ActivityStore {
  activities: Activity[] = [];
  selectedActivity: Activity | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Asynchronously loads activities from the backend.
   * @memberof ActivityStore
   * @async
   * @function
   */
  loadActivities = async () => {
    this.setLoadingInitial(true);
    try {
      const activities = await agent.Activities.list();
      activities.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
        this.activities.push(activity);
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
    this.selectedActivity = this.activities.find((a) => a.id === id);
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
}

export default ActivityStore;
