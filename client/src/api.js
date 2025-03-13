import axios from "axios";
axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

export default api;

// "react-alert": "^7.0.3",
// "react-alert-template-basic": "^1.0.2",