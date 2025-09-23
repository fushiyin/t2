import axios from "axios";
import store from "@/store/store";
import { clearUser, setUser } from "@/store/userSlice";

let baseURL = "";
try {
    baseURL = import.meta?.env?.VITE_API_BASE_URL || import.meta?.env?.REACT_APP_API_URL || "";
} catch {
    baseURL = "";
}

const api = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Helper to set or remove Authorization header
api.setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
};

// Logout helper: call backend to clear session/refresh cookie then clear client state
api.logout = async () => {
    try {
        await api.post("/api/auth/logout");
    } catch {
        // ignore
    }
    store.dispatch(clearUser());
    api.setAuthToken(null);
};

// Refresh client (no interceptors) to avoid recursion
const refreshClient = axios.create({ baseURL, withCredentials: true });

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (!originalRequest) return Promise.reject(error);

        const status = error.response ? error.response.status : null;

        if (status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        api.setAuthToken(token);
                        return api(originalRequest);
                    })
                    .catch((err) => Promise.reject(err));
            }

            isRefreshing = true;

            try {
                const res = await refreshClient.post("/api/auth/refresh");
                const newToken = res.data?.accessToken || res.data?.token || null;
                if (newToken) {
                    // set token for future requests
                    api.setAuthToken(newToken);
                    // if backend returned user, update redux
                    if (res.data?.user) {
                        store.dispatch(setUser(res.data.user));
                    }
                    processQueue(null, newToken);
                    return api(originalRequest);
                }
                // no token -> force logout
                processQueue(new Error("No refresh token"), null);
                store.dispatch(clearUser());
                api.setAuthToken(null);
                return Promise.reject(error);
            } catch (err) {
                processQueue(err, null);
                store.dispatch(clearUser());
                api.setAuthToken(null);
                return Promise.reject(err);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    },
);

export default api;
