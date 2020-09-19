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

    findByQuery(anyParamWO) {
        return http.get("/workOrder", {params: {"query":anyParamWO}})
    }

    findNotDone(statusParamWO) {
        return http.get("/workOrderStatus", {params: {"status":statusParamWO}})
    }

    findWOspecificId(id) {
        return http.get("/workOrderById", {params: {"id":id}})
    }


}

export default new ServiceWorkOrder();