import axios, { AxiosError, AxiosResponse } from "axios";
import { authRequest } from "./interceptors/interceptor.authRequest";
import { errorResponse } from "./interceptors/interceptor.errorResponse";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
});

const onResponse = (res: AxiosResponse): AxiosResponse => res;
const onRequestError = (err: AxiosError): Promise<AxiosError> =>
  Promise.reject(err);

api.interceptors.request.use(authRequest, onRequestError);
api.interceptors.response.use(onResponse, errorResponse);
