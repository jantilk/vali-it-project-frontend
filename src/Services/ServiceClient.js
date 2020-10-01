import http from "../http-common";

class ServiceClient {
    create(data) {
        return http.post("/client", data);
    }

    findClientByName(queryString) {
        return http.get("/client/namelike", {params: {queryString}});
    }
}

export default new ServiceClient();