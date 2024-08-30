import axios from "axios";

const ACCOUNT_BASE_URL = import.meta.env.VITE_API_URL;

console.log(ACCOUNT_BASE_URL);

export const handleLogin = ({id, password}) => axios.post(ACCOUNT_BASE_URL + '/login', {
        username: id,
        password: password,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true,
    });

export const handleSignUP = (submit) => axios.post(ACCOUNT_BASE_URL + '/joinProc',
    submit, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    });