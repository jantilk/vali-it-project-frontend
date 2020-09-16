import http from "../http-common";

class FrontDataService {
    create(data) {
        return http.post("/client", data);
    }
    getAll() {
        return http.get("/device")
    }
}

export default new FrontDataService();