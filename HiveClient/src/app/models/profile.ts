import { Photo } from "./photos";
import { User } from "./user";

/**
 * Interface representing a user profile.
 * @interface Profile
 * @property {string} username - The username of the user.
 * @property {string} displayName - The display name of the user.
 * @property {string | undefined} image - The URL of the user's profile image (optional).
 * @property {string | undefined} bio - The user's biography or description (optional).
 * @property {Photo[] | undefined} photos - An array of photos associated with the user (optional).
 */
export interface Profile {
  username: string;
  displayName: string;
  image?: string;
  bio?: string;
  followersCount: number;
  followingCount: number;
  following: boolean;
  photos?: Photo[];
}

/**
 * Class representing a user profile.
 * @class
 */
export class Profile implements Profile {
  /**
   * Creates an instance of the Profile class based on a User object.
   * @constructor
   * @param {User} user - The User object from which to create the profile.
   */
  constructor(user: User) {
    this.username = user.username;
    this.displayName = user.displayName;
    this.image = user.image;
  }
}

/**
 * Interface representing a photo associated with a user profile.
 * @interface Photo
 * @property {string} id - The unique identifier for the photo.
 * @property {string} url - The URL of the photo.
 * @property {boolean} isMain - Indicates whether the photo is the main profile picture.
 */
// export interface Photo {
//   id: string;
//   url: string;
//   isMain: boolean;
// }
