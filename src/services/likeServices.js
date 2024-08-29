import axios from "axios";

const LIKE_BASE_URL = import.meta.env.VITE_API_URL + '/api';

export const getLikeList = (category, token) => axios.get(`${LIKE_BASE_URL}/${category}/likes`, {
    headers: {Authorization: `Bearer ${token}`}
});

export const saveLike = (userId, category, itemId) => axios.post(`${LIKE_BASE_URL}/${category}/like/${itemId}?userId=${userId}`, {
    //headers: { 'Content-Type': 'application/json' },
});

export const getIsLiked = (userId, category, itemId) => axios.get(`${LIKE_BASE_URL}/${category}/like/${itemId}?userId=${userId}`, {
    //headers: { 'Content-Type': 'application/json' },
});