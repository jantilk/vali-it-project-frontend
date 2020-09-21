import http from "../http-common";

class ServiceClient {
    create(data) {
        return http.post("/client", data);
    }

    clientByName(nameLike) {
        return http.get("clientlike", {params: {nameLike}})
    }

    devicesByClientName(deviceLike, productLike, serialNumberLike) {
        if (deviceLike != "" || productLike != "" || serialNumberLike == "") {
            return http.get("devicelike", {params: {deviceLike, productLike, serialNumberLike}})
        } else {
            return "";
        }
    }
}

export default new ServiceClient();