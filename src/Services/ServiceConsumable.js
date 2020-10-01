import http from "../http-common";

class ServiceConsumable {
    createConsumable(data, token) {
        console.log(token);
        return http.post("/consumable", data, {
            headers: {
            'Authorization': "Bearer " + token
            }});
    }
}

export default new ServiceConsumable();