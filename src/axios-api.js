import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://billcounter-api.test/api'
});

export default instance;