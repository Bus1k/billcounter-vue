import axios from "axios";

const instance = axios.create({
    baseURL: 'http://billcounter-api.test/api/'
});

instance.defaults.withCredentials = true;

export default instance;