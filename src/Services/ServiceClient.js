import http from "../http-common";

class ServiceClient {
    create(data) {
        return http.post("/client", data);
    }

    clientByName(nameLike) {
        return http.get("clientlike", {params: {nameLike}});
    }

    searchDevice(clientLike, productLike, serialNumberLike) {
        return http.get("devicelike", {params: {clientLike, productLike, serialNumberLike}});
    }
}

export default new ServiceClient();