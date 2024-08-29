import axios from "axios";

const LIKE_BASE_URL = import.meta.env.VITE_API_URL + '/api';

export const getLikeLists = (token) => axios.get(LIKE_BASE_URL + '/like', {
    headers: { Authorization: `Bearer ${token}` },
});