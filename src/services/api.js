// Importing Axios library for making HTTP requests
import axios from 'axios';

// Setting the base URL for the API
const BASE_URL = 'http://127.0.0.1:8000/';

// Creating an Axios instance with the base URL
export const api = axios.create({
    baseURL: BASE_URL,
});
