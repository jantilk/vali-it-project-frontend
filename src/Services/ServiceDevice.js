import http from "../http-common";

class ServiceDevice {
    createDevice(data) {
        return http.post("/device", null, {params: data});
    }

    deviceByClientId(clientId) {
        return http.get("/device/" + clientId)
    }

    searchAnyParam(anyParam) {
        return http.get("/device", {params: {"query": anyParam}});
    }

    searchDeviceNamelike(queryString) {
        return http.get("device/namelike", {params: {queryString}});
    }

    deviceByDeviceName(deviceName) {
        return http.get("/devicename", {params: {"query": deviceName}});

        searchDevice(clientLike, productLike, serialNumberLike)
        {
            return http.get("devicelike", {params: {clientLike, productLike, serialNumberLike}});
        }
    }
}
export default new ServiceDevice();