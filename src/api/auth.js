import axios from "../api/connection";
import csrf from "../api/csrf";

export default {
    async login(form) {
        await csrf.getCookie();

        return axios.post("/user/login", form);
    },

    async create(form) {
        await csrf.getCookie();

        return axios.post("/user/register", form);
    },

    async logout() {
        await csrf.getCookie();

        return axios.post("/user/logout");
    },

    async test() {
        await csrf.getCookie();

        return axios.get("/test");
    },
};
