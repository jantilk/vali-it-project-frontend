import http from "../http-common";

class ServiceDevice {
    createDevice(data) {
        return http.post("/device", data);
    }

    deviceByClient(name) {
        return http.get("/client/" + name)
    }

    searchAnyParam(anyParam) {
        return http.get("/device", {params: {"query": anyParam}});
    }
}

export default new ServiceDevice();