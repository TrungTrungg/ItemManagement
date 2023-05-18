import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:3000/',
});

export default httpRequest;
