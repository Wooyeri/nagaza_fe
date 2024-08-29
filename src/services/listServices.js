import axios from "axios";

const LIST_BASE_URL = import.meta.env.VITE_API_URL + '/api';

export const getMovieLists = (token) => axios.get(LIST_BASE_URL + '/movie', {headers: {Authorization: `Bearer ${token}`}});
export const getMovieDetails = (token, id) => axios.get(LIST_BASE_URL + `/movie/${id}`, {headers: {Authorization: `Bearer ${token}`}});

export const getHotelLists = (token) => axios.get(LIST_BASE_URL + '/hotel', {headers: {Authorization: `Bearer ${token}`}});
export const getHotelDetails = (token, id) => axios.get(LIST_BASE_URL + `/hotel/${id}`, {headers: {Authorization: `Bearer ${token}`}});

export const getRestaurantLists = (token) => axios.get(LIST_BASE_URL + '/restaurant', {headers: {Authorization: `Bearer ${token}`}});
export const getRestaurantDetails = (token, id) => axios.get(LIST_BASE_URL + `/restaurant/${id}`, {headers: {Authorization: `Bearer ${token}`}});