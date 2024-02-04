import axios from 'axios';

export const pokemonApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});