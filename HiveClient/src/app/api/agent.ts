import axios, { AxiosError, AxiosResponse } from "axios";
import { Activity } from "../models/activity";
import { User, UserFormValues } from "../models/user";
import { toast } from "react-toastify";
import { store } from '../stores/store.ts'

// Function to introduce a delay using Promises
const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

// Configuring the base URL for Axios requests
axios.defaults.baseURL = "http://localhost:5000/api";

// Axios request interceptor to include the authorization token in the headers
axios.interceptors.request.use(config => {
  const token = store.commonStore.token;
  if(token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Axios response interceptor to introduce a delay and handle common HTTP errors
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

// Function to extract the response data from an Axios response
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// Object containing common HTTP request methods using Axios
const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

// Object containing methods for interacting with 'Activities' API
const Activities = {
  list: () => requests.get<Activity[]>("/activities"),
  details: (id: string) => requests.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) => requests.post<void>("/activities", activity),
  update: (activity: Activity) =>
    requests.put<void>(`/activities/${activity.id}`, activity),
  delete: (id: string) => requests.del<void>(`/activities/${id}`),
};

// Object containing methods for interacting with 'Account' API
const Account = {
  current: () => requests.get<User>("/account"),
  login: (user: UserFormValues) => requests.post<User>("/account/login", user),
  register: (user: UserFormValues) =>
    requests.post<User>("/account/register", user),
};

// Main agent object combining 'Activities' and 'Account' objects
const agent = {
  Activities,
  Account,
};

export default agent;
