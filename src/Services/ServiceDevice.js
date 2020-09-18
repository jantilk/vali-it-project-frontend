import http from "../http-common";

class ServiceDevice {
    createDevice(data){
        return http.post("/device", data);
    }
    // getAll() {
    //     return http.get("/device")
    // }
    searchAnyParam(anyParam){
        return http.get("/device", {params: {"query": anyParam}});
    }
}

export default new ServiceDevice();