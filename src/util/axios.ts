import Axios, {InternalAxiosRequestConfig} from "axios";
import {API_URL} from "../config/config.ts";
import qs from "qs"
import {useAuthStore} from "../store/auth.ts";

const axios = Axios.create({
    baseURL: API_URL,
    paramsSerializer: {
        serialize: (params) => qs.stringify(params, { allowDots: true, arrayFormat: "repeat" }),
    },
});

const authInterceptor = (
    config: InternalAxiosRequestConfig,
) : InternalAxiosRequestConfig => {
    const token = useAuthStore.getState().authToken;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
}


axios.interceptors.request.use(authInterceptor);

axios.interceptors.response.use(
    (res) => res.data,
);

export default axios;