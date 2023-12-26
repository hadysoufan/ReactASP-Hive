import { Profile } from "./profile";

/**
 * Interface representing an activity object.
 * @interface Activity
 * @property {string} id - The unique identifier for the activity.
 * @property {string} title - The title of the activity.
 * @property {string} date - The date of the activity.
 * @property {string} description - The description of the activity.
 * @property {string} category - The category of the activity.
 * @property {string} city - The city where the activity takes place.
 * @property {string} venue - The venue or location of the activity.
 * @property {string} hostUsername - The username of the host for the activity.
 * @property {boolean} isCancelled - Indicates whether the activity is cancelled.
 * @property {boolean} isGoing - Indicates whether the current user is going to the activity.
 * @property {boolean} isHost - Indicates whether the current user is the host of the activity.
 * @property {Profile} host - The profile of the host (if available).
 * @property {Profile[]} attendees - An array of profiles representing attendees of the activity.
 */
export interface Activity {
  id: string;
  title: string;
  date: Date | null;
  description: string;
  category: string;
  city: string;
  venue: string;
  hostUsername: string;
  isCancelled: boolean;
  isGoing: boolean;
  isHost: boolean;
  host?: Profile;
  attendees: Profile[];
}

/**
 * Class representing an activity object.
 * @class
 */
export class Activity {
  /**
   * Creates an instance of the Activity class.
   * @param {ActivityFormValues} init - The initial values for the activity.
   */
  constructor(init?: ActivityFormValues) {
    Object.assign(this, init);
  }
}

/**
 * Class representing the form values for creating or editing an activity.
 * @class
 */
export class ActivityFormValues {
  id?: string = undefined;
  title: string = "";
  category: string = "";
  description: string = "";
  date: Date | null = null;
  city: string = "";
  venue: string = "";

  constructor(activity?: ActivityFormValues) {
    if (activity) {
      this.id = activity.id;
      this.title = activity.title;
      this.category = activity.category;
      this.description = activity.description;
      this.date = activity.date;
      this.venue = activity.venue;
      this.city = activity.city;
    }
  }
}
