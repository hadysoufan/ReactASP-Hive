import axios, { AxiosError, AxiosResponse } from "axios";
import { Activity } from "../models/activity";
import { User, UserFormValues } from "../models/user";
import { toast } from "react-toastify";
import { store } from "../stores/store.ts";
import { Post } from "../models/post.ts";

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
axios.interceptors.request.use((config) => {
  const token = store.commonStore.token;
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/**
 * Axios response interceptor to introduce a delay and handle common HTTP errors.
 */
axios.interceptors.response.use(async (response) => {
  return sleep(500)
    .then(() => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
});

// , (error: AxiosError) => {
//   const { data, status } = error.response!;
//   switch (status) {
//     case 400:
//       toast.error('Bad Request');
//       break;
//     case 401:
//       toast.error('Unauthorized');
//       break;
//     case 403:
//       toast.error('Forbidden');
//       break;
//     case 404:
//       toast.error('Not Found');
//       break;
//     case 500:
//       toast.error('Server Error');
//       break;
//   }
//   return Promise.reject(error)

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
  get: <T>(url: string): Promise<T> => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}): Promise<T> =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}): Promise<T> =>
    axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string): Promise<T> => axios.delete<T>(url).then(responseBody),
};

/**
 * Object containing methods for interacting with 'Activities' API.
 */
const Activities = {
  list: (): Promise<Activity[]> => requests.get<Activity[]>("/activities"),
  details: (id: string): Promise<Activity> =>
    requests.get<Activity>(`/activities/${id}`),
  create: (activity: Activity): Promise<void> =>
    requests.post<void>("/activities", activity),
  update: (activity: Activity): Promise<void> =>
    requests.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string): Promise<void> =>
    requests.del<void>(`/activities/${id}`),
};

/**
 * Object containing methods for interacting with 'Account' API.
 */
const Account = {
  current: (): Promise<User> => requests.get<User>("/account"),
  login: (user: UserFormValues): Promise<User> =>
    requests.post<User>("/account/login", user),
  register: (user: UserFormValues): Promise<User> =>
    requests.post<User>("/account/register", user),
};

/**
 * Object containing methods for interacting with 'Post' API.
 */
const Posts = {
  list: (): Promise<Post[]> => requests.get<Post[]>("/post"),
  details: (id: string): Promise<Post> => requests.get<Post>(`/post/${id}`),
  create: (post: Post): Promise<void> => requests.post<void>("/post", post),
  update: (post: Post): Promise<void> =>
    requests.put<void>(`/post/${post.id}`, post),
  delete: (id: string): Promise<void> => requests.del<void>(`/post/${id}`),
};

/**
 * Main agent object for all objects.
 */
const agent = {
  Activities,
  Account,
  Posts,
};

export default agent;
