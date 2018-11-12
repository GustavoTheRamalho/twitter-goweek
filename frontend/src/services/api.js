import axios from 'axios';

const api = axios.create({
    baseURL: 'https://twitter-goweek.herokuapp.com/'
});

export default api;