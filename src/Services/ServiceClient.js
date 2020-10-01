import http from "../http-common";

class ServiceClient {
    create(data, token) {
        return http.post("/client", data, {
            headers: {
                'Authorization': "Bearer " + token
            }});
    }

    findClientByName(queryString, token) {
        return http.get("client/namelike", {
            params: {queryString},
            headers: {
                'Authorization': "Bearer " + token
            }});
    }
}

export default new ServiceClient();