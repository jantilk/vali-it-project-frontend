import http from "../http-common";

class ServiceDevice {
    createDevice(data) {
        return http.post("/device", data);
    }

    deviceByClientId(clientId) {
        return http.get("/device/" + clientId)
    }

    searchAnyParam(anyParam) {
        return http.get("/device", {params: {"query": anyParam}});
    }

    searchDevice(clientLike, productLike, serialNumberLike) {
        return http.get("devicelike", {params: {clientLike, productLike, serialNumberLike}});
    }
}

export default new ServiceDevice();