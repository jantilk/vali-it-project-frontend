import http from "../http-common";

class FrontDataService {
    create(data) {
        return http.post("/client", data);
    }

    getAll() {
        return http.get("/client")
    }

    clientByName(nameLike) {
        return http.get("clientlike", {params: {nameLike}})
    }
}

export default new FrontDataService();