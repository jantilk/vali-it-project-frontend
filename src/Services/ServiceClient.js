import http from "../http-common";

class ServiceClient {
    create(data) {
        return http.post("/client", data);
    }

    clientByName(nameLike) {
        return http.get("clientlike", {params: {nameLike}})
    }

    devicesByClientName(deviceLike) {
        return http.get("devicelike", {params: {deviceLike}})
    }
}

export default new ServiceClient();