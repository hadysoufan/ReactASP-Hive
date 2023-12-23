/**
 * Interface representing a server error object.
 * @interface ServerError
 * @property {number} statusCode - The HTTP status code associated with the error.
 * @property {string} message - A brief message describing the error.
 * @property {string} details - Additional details or information about the error.
 */
export interface ServerError {
    statusCode: number;
    message: string;
    details: string;
  }
  