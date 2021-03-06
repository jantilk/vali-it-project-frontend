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
}

export default new ServiceDevice();