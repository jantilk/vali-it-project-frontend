import http from "../http-common";

class ServiceWorkOrder {
    create(data, consumableAmount, consumableName2, consumableAmount2, consumableName3, consumableAmount3) {
        return http.post("/createWO", data, {params: {"consumableAmount":consumableAmount, "consumable2":consumableName2,
                "consumableAmount2":consumableAmount2, "consumable3":consumableName3, "consumableAmount3":consumableAmount3}});
    }

    createMobileWO(data, token) {
        return http.post("device/mobilewo", data, {
            params: data,
            headers: {
                'Authorization': "Bearer " + token
            }
        });
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

    // findWOspecificId(workOrderId) {
    //     return http.get("/workOrderById", {params: {"id":workOrderId}})
    // }

    searchWorkOrderSimultaneous(client, deviceName, product, technician, status){
        return http.get("/workOrderSimultaneousSearch", {params: {client, deviceName, product, technician, status}})
    }

    findAllWo(token){
        return http.get("workOrderAll", {
            params: {},
            headers: {
                'Authorization': "Bearer " + token
            }
        });
    }

    changeStatus(workOrderId){
        http.put("/updateWorkOrderStatus", null, {params: {"workOrderId":workOrderId}})
    }

    changeWorkOrderJobDescription(workOrderId, newJobDescription){
        http.put("/updateWorkOrderJobDescription", null, {params: {"workOrderId":workOrderId,"newWorkOrderJobDescription":newJobDescription}})
    }



    // findWorkOrderConsumable(workOrderId){
    //     return http.get("/workOrderById", {params: {"id":workOrderId}})
    // }


}

export default new ServiceWorkOrder();