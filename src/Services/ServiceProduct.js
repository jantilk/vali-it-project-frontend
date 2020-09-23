import http from "../http-common";

class ServiceProduct {
    createProduct(data) {
        return http.post("/product", data);
    }
}

export default new ServiceProduct();