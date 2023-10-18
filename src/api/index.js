import axios from "axios";

const api = axios.create({
    baseURL: "https://652f7b510b8d8ddac0b289ae.mockapi.io/cyber/",
});

export default api;