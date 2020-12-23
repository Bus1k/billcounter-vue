import axios from "../api/connection";
import csrf from "../api/csrf";

export default {
    async getAll() {
        await csrf.getCookie();

        return axios.get("/bill/all");
    },
};
