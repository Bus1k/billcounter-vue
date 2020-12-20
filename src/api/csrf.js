import connection from "./connection";

export default {
    getCookie() {
        return connection.get("/csrf-cookie");
    }
};