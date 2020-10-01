import http from "../http-common";

class ServiceProduct {
    createProduct(data, token) {
        return http.post("/product", data, {
            headers: {
                'Authorization': "Bearer " + token
            }});
    }
}

export default new ServiceProduct();