import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ubUtLA4hXi5B3wEn3KiIL-b97J2e2P9NDr4DpLn0EhM'
    }    
});