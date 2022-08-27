import axios from 'axios';
import { authToken } from './auth';

axios.interceptors.request.use(function (config) {
    let newConfig = { ...config };
    newConfig.headers.authToken = authToken();
    return newConfig;
  }, function (error) {
    return Promise.reject(error);
  });

// Response interceptor
axios.interceptors.response.use(function (response) {
    return response;
  }, (error) => {
    return (error.response);
  });

export default axios;