import axios, { AxiosError, AxiosResponse } from "axios";
import { Activity, ActivityFormValues } from "../models/activity";
import { User, UserFormValues } from "../models/user";
import { store } from "../stores/store.ts";
import { Profile } from "../models/profile.ts";
import { Product } from "../models/products.ts";
import { toast } from "react-toastify";
import { Photo, PhotoFormValues } from "../models/photos.ts";
import { Basket } from "../models/basket.ts";
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
axios.defaults.withCredentials = true;

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
axios.interceptors.response.use(
  async (response) => {
    await sleep(1000);
    return response;
  },
  (error: AxiosError) => {
    const { status } = error.response!;
    switch (status) {
      case 400:
        toast.error("bad request");
        break;
      case 401:
        toast.error("unauthorized");
        break;
      case 403:
        toast.error("forbidden");
        break;
      case 404:
        toast.error("not found");
        break;
      case 500:
        toast.error("server error");
        break;
    }
    return Promise.reject(error);
  }
);

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
  create: (activity: ActivityFormValues): Promise<void> =>
    requests.post<void>("/activities", activity),
  update: (activity: ActivityFormValues): Promise<void> =>
    requests.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string): Promise<void> =>
    requests.del<void>(`/activities/${id}`),
  attend: (id: string) => requests.post<void>(`/activities/${id}/attend`, {}),
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

const Photos = {
  list: (): Promise<Photo[]> => requests.get<Photo[]>("/photo"),
  details: (id: string): Promise<Photo> => requests.get<Photo>(`/photo/${id}`),
  delete: (id: string): Promise<void> => requests.del<void>(`/photo/${id}`),
  update: (photo: PhotoFormValues): Promise<void> =>
    requests.put<void>(`/photo/${photo.id}`, photo),
    create: (photo: PhotoFormValues): Promise<void> =>
    requests.post<void>("/photo", photo),
};

const Products = {
  list: (): Promise<Product[]> => requests.get<Product[]>("/products"),
  details: (id: string): Promise<Product> =>
    requests.get<Product>(`/products/${id}`),
};

const Baskets = {
  get: (): Promise<Basket[]> => requests.get<Basket[]>('basket'),
  addItem: (productId: number, quantity = 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
  removeItem: (productId: number, quantity = 1) => requests.del(`basket?productId=${productId}&quantity=${quantity}`),
}

/**
 * Object containing methods for interacting with 'Photo' API.
 */
const Profiles = {
  get: (username: string) => requests.get<Profile>(`/profile/${username}`),
  uploadPhoto: (file: Blob) => {
    let formData = new FormData();
    formData.append("File", file);
    return axios.post<Photo>("photo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  updateFollowing: (username: string) =>
    requests.post(`/follow/${username}`, {}),
  listFollowings: (username: string, predicate: string) =>
    requests.get<Profile[]>(`/follow/${username}?predicate=${predicate}`),
};

/**
 * Main agent object for all objects.
 */
const agent = {
  Activities,
  Account,
  Profiles,
  Products,
  Photos,
  Baskets
};

export default agent;
