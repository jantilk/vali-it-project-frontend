import http from "../http-common";

class ServiceWorkOrder {
    create(data) {
        return http.post("/createWO", data);
    }
    // getAll() {
    //     return http.get("/device")
    // }
    getAll() {
        return http.get("/getAllWorkOrders")
    }
}

export default new ServiceWorkOrder();