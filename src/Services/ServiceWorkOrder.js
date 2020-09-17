import http from "../http-common";

class ServiceWorkOrder {
    create(data) {
        return http.post("/createWO", data);
    }
    // getAll() {
    //     return http.get("/device")
    // }
}

export default new ServiceWorkOrder();