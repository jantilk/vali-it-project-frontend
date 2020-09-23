import http from "../http-common";

class ServiceConsumable {
    createConsumable(data) {
        return http.post("/consumable", data);
    }
}

export default new ServiceConsumable();