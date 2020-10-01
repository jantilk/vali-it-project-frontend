import http from "../http-common";

class ServiceDevice {
    createDevice(data, token) {
        return http.post("/device", null, {
            params: data,
            headers: {
                'Authorization': "Bearer " + token
            }});
    }


    searchAnyParam(anyParam, token) {
        return http.get("/device", {
            params: {"query": anyParam},
            headers: {
                'Authorization': "Bearer " + token
            }});
    }

    searchDeviceNamelike(queryString, token) {
        return http.get("device/namelike", {
            params: {queryString},
            headers: {
                'Authorization': "Bearer " + token
            }});
    }

    deviceByDeviceName(deviceName, token) {
        return http.get("/devicename", {
            params: {"query": deviceName},
            headers: {
                'Authorization': "Bearer " + token
            }});

        searchDevice(clientLike, productLike, serialNumberLike, token)
        {
            return http.get("devicelike", {
                params: {clientLike, productLike, serialNumberLike},
                headers: {
                    'Authorization': "Bearer " + token
                }});
        }
    }
}
export default new ServiceDevice();