/**
 * Interface representing a chat comment.
 * @interface ChatComment
 * @property {number} id - The unique identifier for the chat comment.
 * @property {any} createdAt - The date and time when the chat comment was created.
 * @property {string} body - The content or text of the chat comment.
 * @property {string} username - The username of the user who posted the chat comment.
 * @property {string} displayName - The display name of the user who posted the chat comment.
 * @property {string} image - The URL or path to the image associated with the user who posted the chat comment.
 */
export interface ChatComment {
    id: number;
    createdAt: any;
    body: string;
    username: string;
    displayName: string;
    image: string;
}
