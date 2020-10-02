import http from "../http-common";

class ServiceWorkOrder {
    create(data, consumableAmount, consumableName2, consumableAmount2, consumableName3, consumableAmount3, token) {
        return http.post("/createWO", data, {
            params: {"consumableAmount":consumableAmount, "consumable2":consumableName2,
                "consumableAmount2":consumableAmount2, "consumable3":consumableName3, "consumableAmount3":consumableAmount3
            },
            headers: {
                'Authorization': "Bearer " + token
            }});
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

    findByQuery(anyParamWO, token) {
        return http.get("/workOrder", {
            params: {"query":anyParamWO},
            headers: {
                'Authorization': "Bearer " + token
            }
        })
    }

    findNotDone(statusParamWO, token) {
        return http.get("/workOrderStatus", {
            params: {"status":statusParamWO},

            headers: {
                'Authorization': "Bearer " + token
            }})
    }

    // findWOspecificId(workOrderId) {
    //     return http.get("/workOrderById", {params: {"id":workOrderId}})
    // }

    searchWorkOrderSimultaneous(client, deviceName, product, technician, status, token){
        return http.get("/workOrderSimultaneousSearch", {
            params: {client, deviceName, product, technician, status},
            headers: {
                'Authorization': "Bearer " + token
            }})
    }

    findAllWo(token){
        return http.get("workOrderAll", {
            params: {},
            headers: {
                'Authorization': "Bearer " + token
            }
        });
    }

    changeStatus(workOrderId, token){
        http.put("/updateWorkOrderStatus", null, {
            params: {"workOrderId":workOrderId},
            headers: {
                'Authorization': "Bearer " + token
            }})
    }

    changeWorkOrderJobDescription(workOrderId, newJobDescription, token){
        http.put("/updateWorkOrderJobDescription", null, {
            params: {"workOrderId":workOrderId,"newWorkOrderJobDescription":newJobDescription},
            headers: {
                'Authorization': "Bearer " + token
            }})
    }



    // findWorkOrderConsumable(workOrderId){
    //     return http.get("/workOrderById", {params: {"id":workOrderId}})
    // }


}

export default new ServiceWorkOrder();