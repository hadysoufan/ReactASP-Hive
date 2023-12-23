/**
 * Interface representing a user object.
 * @interface User
 * @property {string} username - The username of the user.
 * @property {string} displayName - The display name of the user.
 * @property {string} token - The authentication token associated with the user.
 * @property {string | undefined} image - (Optional) URL of the user's profile image.
 */
export interface User {
    username: string;
    displayName: string;
    token: string;
    image?: string;
  }
  
  /**
   * Interface representing the form values for user-related operations.
   * @interface UserFormValues
   * @property {string} email - The email address of the user.
   * @property {string} password - The password associated with the user.
   * @property {string | undefined} displayName - (Optional) The display name for the user.
   * @property {string | undefined} username - (Optional) The username chosen by the user.
   */
  export interface UserFormValues {
    email: string;
    password: string;
    displayName?: string;
    username?: string;
  }
  