import axios from 'axios';

const YOUR_APP_ID = 'your-own-id';
const YOUR_APP_KEY = 'your-own-key';

const server = axios.create({ baseURL: `https://api.edamam.com/`, mode: 'no-cors' });

export const API = async (query, parameters, offset) =>
    await server.get(
        `search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=${offset[0]}&to=${offset[1]}${parameters}`
    );
