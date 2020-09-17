import http from "../http-common";

class FrontDataService {
    create(data) {
        return http.post("/client", data);
    }
    getAll() {
        return http.get("/client")
    }
}

export default new FrontDataService();