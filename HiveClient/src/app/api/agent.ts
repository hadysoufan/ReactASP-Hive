import axios, { AxiosError, AxiosResponse } from "axios";
import { Activity } from "../models/activity";
import { User, UserFormValues } from "../models/user";
import { toast } from "react-toastify";
import { store } from '../stores/store.ts'

/**
 * Function to introduce a delay using Promises.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Promise<void>} A Promise that resolves after the specified delay.
 */
const sleep = (delay: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

// Configuring the base URL for Axios requests
axios.defaults.baseURL = "http://localhost:5000/api";

/**
 * Axios request interceptor to include the authorization token in the headers.
 */
axios.interceptors.request.use(config => {
  const token = store.commonStore.token;
  if(token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/**
 * Axios response interceptor to introduce a delay and handle common HTTP errors.
 */
axios.interceptors.response.use(async (response) => {
  await sleep(1000);
  return response;
}, (error: AxiosError) => {
  const { data, status } = error.response!;
  switch (status) {
    case 400:
      toast.error('Bad Request');
      break;
    case 401:
      toast.error('Unauthorized');
      break;
    case 403:
      toast.error('Forbidden');
      break;
    case 404:
      toast.error('Not Found');
      break;
    case 500:
      toast.error('Server Error');
      break;
  }
  return Promise.reject(error);
});

/**
 * Function to extract the response data from an Axios response.
 * @template T - The type of the response data.
 * @param {AxiosResponse<T>} response - The Axios response.
 * @returns {T} The extracted response data.
 */
const responseBody = <T>(response: AxiosResponse<T>): T => response.data;

/**
 * Object containing common HTTP request methods using Axios.
 */
const requests = {
  /**
   * Sends a GET request to the specified URL.
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the GET request to.
   * @returns {Promise<T>} A Promise that resolves with the response data.
   */
  get: <T>(url: string): Promise<T> => axios.get<T>(url).then(responseBody),

  /**
   * Sends a POST request to the specified URL.
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the POST request to.
   * @param {Object} body - The request body.
   * @returns {Promise<T>} A Promise that resolves with the response data.
   */
  post: <T>(url: string, body: {}): Promise<T> =>
    axios.post<T>(url, body).then(responseBody),

  /**
   * Sends a PUT request to the specified URL.
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the PUT request to.
   * @param {Object} body - The request body.
   * @returns {Promise<T>} A Promise that resolves with the response data.
   */
  put: <T>(url: string, body: {}): Promise<T> =>
    axios.put<T>(url, body).then(responseBody),

  /**
   * Sends a DELETE request to the specified URL.
   * @template T - The type of the response data.
   * @param {string} url - The URL to send the DELETE request to.
   * @returns {Promise<T>} A Promise that resolves with the response data.
   */
  del: <T>(url: string): Promise<T> =>
    axios.delete<T>(url).then(responseBody),
};

/**
 * Object containing methods for interacting with 'Activities' API.
 */
const Activities = {
  /**
   * Retrieves a list of activities.
   * @returns {Promise<Activity[]>} A Promise that resolves with the list of activities.
   */
  list: (): Promise<Activity[]> => requests.get<Activity[]>("/activities"),

  /**
   * Retrieves details of a specific activity.
   * @param {string} id - The ID of the activity.
   * @returns {Promise<Activity>} A Promise that resolves with the activity details.
   */
  details: (id: string): Promise<Activity> => requests.get<Activity>(`/activities/${id}`),

  /**
   * Creates a new activity.
   * @param {Activity} activity - The activity to be created.
   * @returns {Promise<void>} A Promise that resolves when the activity is created.
   */
  create: (activity: Activity): Promise<void> => requests.post<void>("/activities", activity),

  /**
   * Updates an existing activity.
   * @param {Activity} activity - The updated activity.
   * @returns {Promise<void>} A Promise that resolves when the activity is updated.
   */
  update: (activity: Activity): Promise<void> =>
    requests.put<void>(`/activities/${activity.id}`, activity),

  /**
   * Deletes a specific activity.
   * @param {string} id - The ID of the activity to be deleted.
   * @returns {Promise<void>} A Promise that resolves when the activity is deleted.
   */
  delete: (id: string): Promise<void> => requests.del<void>(`/activities/${id}`),
};

/**
 * Object containing methods for interacting with 'Account' API.
 */
const Account = {
  /**
   * Retrieves the current user's account information.
   * @returns {Promise<User>} A Promise that resolves with the current user's account information.
   */
  current: (): Promise<User> => requests.get<User>("/account"),

  /**
   * Logs in a user with the provided credentials.
   * @param {UserFormValues} user - The user's login credentials.
   * @returns {Promise<User>} A Promise that resolves with the logged-in user's information.
   */
  login: (user: UserFormValues): Promise<User> => requests.post<User>("/account/login", user),

  /**
   * Registers a new user.
   * @param {UserFormValues} user - The user's registration information.
   * @returns {Promise<User>} A Promise that resolves with the registered user's information.
   */
  register: (user: UserFormValues): Promise<User> =>
    requests.post<User>("/account/register", user),
};

/**
 * Main agent object for all objects.
 */
const agent = {
  Activities,
  Account,
};

export default agent;
