import http from "../http-common";

class FrontDataService {
    create(data) {
        return http.post("/client", data);
    }

    getAll() {
        return http.get("/client")
    }

    findByName(name) {
        return http.get("clientlike",
            {
                params: {name}
            }
        )
    }
}

export default new FrontDataService();