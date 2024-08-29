import axios from "axios";

const LIKE_BASE_URL = import.meta.env.VITE_API_URL + '/api';

export const getLikeList = (category, token) => axios.get(`${LIKE_BASE_URL}/${category}/likes`, {
    headers: {Authorization: `Bearer ${token}`},
});

export const saveLike = (category, itemId, token) => axios.post(`${LIKE_BASE_URL}/${category}/like/${itemId}`, {
    headers: {Authorization: `Bearer ${token}`},
});

export const getIsLiked = (category, itemId, token) => axios.get(`${LIKE_BASE_URL}/${category}/like/${itemId}`, {
    headers: {Authorization: `Bearer ${token}`},
});