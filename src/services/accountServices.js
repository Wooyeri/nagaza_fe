import axios from "axios";

const ACCOUNT_BASE_URL = import.meta.env.VITE_API_URL;

export const handleLogin = ({id, password}) => axios.post('/login', {
        username: id,
        password: password,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true
    });