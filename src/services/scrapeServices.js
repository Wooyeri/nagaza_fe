import axios from "axios";

const LIKE_BASE_URL = import.meta.env.VITE_API_URL + '/api/scrap';

export const getScrapeList = (category, token) => axios.get(`${LIKE_BASE_URL}/list?${category}`, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    },
});

export const saveScrape = (category, itemId, token) => axios.post(`${LIKE_BASE_URL}/toggle`, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    },
    body: {
        itemId,
        category
    }
});

export const getIsScraped = (category, itemId, token) => axios.get(`${LIKE_BASE_URL}/toggle`, {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    },
    body: {
        itemId,
        category
    }
});