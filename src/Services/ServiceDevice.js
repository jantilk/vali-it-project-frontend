import http from "../http-common";

class ServiceDevice {
    createDevice(data){
        return http.post("/device", data);
    }
    // getAll() {
    //     return http.get("/device")
    // }
}

export default new ServiceDevice();