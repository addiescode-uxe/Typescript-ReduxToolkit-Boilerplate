import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { BASE_URL_CONFIG } from '../config/baseUrl';

export const apiInstance = axios.create({
  baseURL: BASE_URL_CONFIG,
  timeout: 100000,
});

export const BASE_URL = BASE_URL_CONFIG;

export const request = <T>(
  config: AxiosRequestConfig,
  onSuccess: (value: AxiosResponse<T>) => void,
  onError: (reason: any) => void
) => {
  const client = apiInstance;
  return client(config).then(onSuccess).catch(onError);
};
