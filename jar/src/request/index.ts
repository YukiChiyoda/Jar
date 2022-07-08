import axios from "axios";

const service = axios.create({
    baseURL: "http://localhost:233/api",
    timeout: 5000,
    headers: {
        "Context-Type": "application/json; charset=utf-8"
    }
});

// Token for user system in the future.
service.interceptors.request.use((config) => {
    config.headers = config.headers || {};
    if (localStorage.getItem("token")) {
        config.headers.token = localStorage.getItem("token") || ""
    }
    return config;
});

service.interceptors.response.use((res) => {
    const httpStatusCode: number = res.data.code;
    if (httpStatusCode != 200) {
        return Promise.reject(res.data);
    }
    return res.data;
}, (err) => {
    console.error(err);
});

export default service;