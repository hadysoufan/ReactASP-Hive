import { makeAutoObservable, runInAction } from "mobx";
import { Activity, ActivityFormValues } from "../models/activity.ts";
import agent from "../api/agent.ts";
import { format } from "date-fns";
import { store } from "./store.ts";
import { Profile } from "../models/profile.ts";

/**
 * MobX store for managing activities.
 * @class ActivityStore
 */
class ActivityStore {
  activityRegistry = new Map<string, Activity>();
  selectedActivity: Activity | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Get activities sorted by date.
   * @returns {Activity[]} - Array of activities sorted by date.
   */
  get activitiesByDate() {
    return Array.from(this.activityRegistry.values()).sort(
      (a, b) => a.date!.getTime() - b.date!.getTime()
    );
  }

  /**
   * Get activities grouped by date.
   * @returns {[string, Activity[]][]} - Array of key-value pairs representing grouped activities.
   */
  get groupedActivities() {
    return Object.entries(
      this.activitiesByDate.reduce((activities, activity) => {
        const date = format(activity.date!, "dd MMM yyyy");
        activities[date] = activities[date]
          ? [...activities[date], activity]
          : [activity];
        return activities;
      }, {} as { [ket: string]: Activity[] })
    );
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
        this.setActivity(activity);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  /**
   * Asynchronously loads a single activity by its ID.
   * If the activity is not in the registry, it fetches it from the backend.
   * @memberof ActivityStore
   * @async
   * @param {string} id - The ID of the activity to be loaded.
   * @returns {Promise<Activity | undefined>} - The loaded activity or undefined if not found.
   */
  loadActivity = async (id: string) => {
    let activity = this.getActivity(id);
    if (activity) {
      this.selectedActivity = activity;
      return activity;
    } else {
      this.setLoadingInitial(true);
      try {
        activity = await agent.Activities.details(id);
        this.setActivity(activity);
        runInAction(() => (this.selectedActivity = activity));
        this.setLoadingInitial(false);
        return activity;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  };

  /**
   * Retrieves an activity from the registry by its ID.
   * @memberof ActivityStore
   * @private
   * @param {string} id - The ID of the activity to be retrieved.
   * @returns {Activity | undefined} - The activity with the specified ID or undefined if not found.
   */
  private getActivity = (id: string) => {
    return this.activityRegistry.get(id);
  };

  /**
   * Sets and updates properties of an activity in the registry.
   * Populates additional information such as attendance status and host details.
   * @memberof ActivityStore
   * @private
   * @param {Activity} activity - The activity object to be set in the registry.
   */
  private setActivity = (activity: Activity) => {
    const user = store.userStore.user;
    if (user) {
      activity.isGoing = activity.attendees!.some(
        (a) => a.username === user.username
      );
      activity.isHost = activity.hostUsername === user.username;
      activity.host = activity.attendees?.find(
        (x) => x.username === activity.hostUsername
      );
    }
    activity.date = new Date(activity.date!);
    this.activityRegistry.set(activity.id, activity);
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
   * Asynchronously creates a new activity.
   * @memberof ActivityStore
   * @async
   * @param {Activity} activity - The activity object to be created.
   */
  createActivity = async (activity: ActivityFormValues) => {
    const user = store.userStore.user;
    const attendee = new Profile(user!);
    try {
      await agent.Activities.create(activity);
      const newActivity = new Activity(activity);
      newActivity.hostUsername = user!.username;
      newActivity.attendees = [attendee];
      this.setActivity(newActivity);
      runInAction(() => {
        this.selectedActivity = newActivity;
      });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Asynchronously updates an existing activity.
   * @memberof ActivityStore
   * @async
   * @param {Activity} activity - The updated activity object.
   */
  updateActivity = async (activity: ActivityFormValues) => {
    try {
      await agent.Activities.update(activity);
      runInAction(() => {
        if (activity.id) {
          let updatedActivity = {
            ...this.getActivity(activity.id),
            ...activity,
          };
          this.activityRegistry.set(activity.id, updatedActivity as Activity);
          this.selectedActivity = updatedActivity as Activity;
        }
      });
    } catch (error) {
      console.log(error);
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

  /**
   * Asynchronously updates the attendance status for the selected activity.
   * @memberof ActivityStore
   * @async
   */
  updateAttendance = async () => {
    const user = store.userStore.user;
    this.loading = true;
    try {
      await agent.Activities.attend(this.selectedActivity!.id);
      runInAction(() => {
        if (this.selectedActivity?.isGoing) {
          this.selectedActivity.attendees =
            this.selectedActivity.attendees?.filter(
              (a) => a.username !== user?.username
            );
          this.selectedActivity.isGoing = false;
        } else {
          const attendee = new Profile(user!);
          this.selectedActivity?.attendees?.push(attendee);
          this.selectedActivity!.isGoing = true;
        }
        this.activityRegistry.set(
          this.selectedActivity!.id,
          this.selectedActivity!
        );
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  /**
   * Asynchronously toggles the cancellation status for the selected activity.
   * @memberof ActivityStore
   * @async
   */
  cancelActivityToggle = async () => {
    this.loading = true;
    try {
      await agent.Activities.attend(this.selectedActivity!.id);
      runInAction(() => {
        this.selectedActivity!.isCancelled =
          !this.selectedActivity?.isCancelled;
        this.activityRegistry.set(
          this.selectedActivity!.id,
          this.selectedActivity!
        );
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => (this.loading = false));
    }
  };

  /**
   * Clear the currently selected activity.
   */
  clearSelectedActivity = () => {
    this.selectedActivity = undefined;
  };

  updateAttendeeFollowing = (username: string) => {
    this.activityRegistry.forEach((activity) => {
      activity.attendees.forEach((attendee) => {
        if (attendee.username === username) {
          attendee.following
            ? attendee.followersCount--
            : attendee.followersCount++;
          attendee.following = !attendee.following;
        }
      });
    });
  };
}

export default ActivityStore;
