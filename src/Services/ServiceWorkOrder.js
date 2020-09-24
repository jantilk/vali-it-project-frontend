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

    findWOspecificId(workOrderId) {
        return http.get("/workOrderById", {params: {"id":workOrderId}})
    }

    searchWorkOrderSimultaneous(client, serialNumber, product, technician, status){
        return http.get("/workOrderSimultaneousSearch", {params: {client, "device":serialNumber, product, technician, status}})
    }

    findAllWo(){
        return http.get("/workOrderAll")
    }



    // findWorkOrderConsumable(workOrderId){
    //     return http.get("/workOrderById", {params: {"id":workOrderId}})
    // }


}

export default new ServiceWorkOrder();