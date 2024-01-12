/**
 * Interface representing a post object.
 * @interface Post
 * @property {string} id - The unique identifier for the post.
 * @property {string} image - The URL of the image associated with the post.
 * @property {string} date - The date when the post was created.
 * @property {string} description - The description or caption of the post.
 */
export interface Post {
  id: string;
  image: string;
  date: string;
  description: string;
  ownerName: string;
}
