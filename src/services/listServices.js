import axios from "axios";

const LIST_BASE_URL = import.meta.env.VITE_API_URL + '/api';

export const getMovieLists = () => axios.get(LIST_BASE_URL + '/movie');
export const getMovieDetails = (id) => axios.get(`${LIST_BASE_URL}/movie${id}`);

export const getHotelLists = () => axios.get(LIST_BASE_URL + '/hotel');
export const getHotelDetails = (id) => axios.get(`${LIST_BASE_URL}/hotel${id}`);

export const getRestaurantLists = () => axios.get(LIST_BASE_URL + '/restaurant');
export const getRestaurantDetails = (id) => axios.get(`${LIST_BASE_URL}/restaurant${id}`);