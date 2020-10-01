import http from "../http-common";

class ServiceDevice {
    createDevice(data) {
        return http.post("/device", null, {params: data});
    }

    searchDeviceByClientId(clientId) {
        return http.get("/device/" + clientId)
    }

    searchDeviceAnyParam(anyParam) {
        return http.get("/device", {params: {"query": anyParam}});
    }

    searchDeviceNamelike(queryString) {
        return http.get("/device/namelike", {params: {queryString}});
    }

    searchDeviceMultilike(clientLike, productLike, serialNumberLike) {
        return http.get("/device/multilike", {params: {clientLike, productLike, serialNumberLike}});
    }
}
export default new ServiceDevice();