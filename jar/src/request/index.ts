import axios from "axios";

const service = axios.create({
    baseURL: "/api",
    timeout: 5000,
    headers: {
        "Context-Type": "application/json; charset=utf-8"
    }
});

// Token for user system in the future.
service.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        config.headers = {
            ...config.headers,
            token
        }
    }
    return config;
});

service.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => {
        console.error(err);
        return Promise.reject(err);
    });

export default service;