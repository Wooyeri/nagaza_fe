import axios from "axios";

const LIKE_BASE_URL = import.meta.env.VITE_API_URL + '/api';

export const getScrapeList = (category, token) => axios.get(`${LIKE_BASE_URL}/${category}/scraps`, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    },
});

export const saveScrape = (category, itemId, token) => axios.post(`${LIKE_BASE_URL}/${category}/scrap/${itemId}`, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    },
});

export const getIsScraped = (category, itemId, token) => axios.get(`${LIKE_BASE_URL}/${category}/scrap/${itemId}`, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    },
});