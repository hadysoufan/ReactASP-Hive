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
 */
export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
}
