import http from "../http-common";

class ServiceClient {
    create(data, token) {
        return http.post("/client", data, {
            headers: {
                'Authorization': "Bearer " + token
            }});
    }

    clientByName(nameLike, token) {
        return http.get("clientlike", {
            params: {nameLike},
            headers: {
                'Authorization': "Bearer " + token
            }});
    }

    searchDevice(clientLike, productLike, serialNumberLike, token) {
        return http.get("devicelike", {
            params: {clientLike, productLike, serialNumberLike},
            headers: {'Authorization': "Bearer " + token}
        });
    }
}

export default new ServiceClient();