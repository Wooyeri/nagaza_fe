import axios from "axios";

const LIST_BASE_URL = import.meta.env.VITE_API_URL + '/api';

export const getMovieLists = (token) => axios.get('/api/movie', {headers: {Authorization: `Bearer ${token}`}});
export const getMovieDetails = (token, id) => axios.get(`/api/movie/${id}`, {headers: {Authorization: `Bearer ${token}`}});

export const getHotelLists = (token) => axios.get('/api/hotel', {headers: {Authorization: `Bearer ${token}`}});
export const getHotelDetails = (token, id) => axios.get(`/api/hotel/${id}`, {headers: {Authorization: `Bearer ${token}`}});

export const getRestaurantLists = (token) => axios.get('/api/restaurant', {headers: {Authorization: `Bearer ${token}`}});
export const getRestaurantDetails = (token, id) => axios.get(`/api/restaurant/${id}`, {headers: {Authorization: `Bearer ${token}`}});