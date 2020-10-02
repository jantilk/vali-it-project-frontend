import http from "../http-common";

class ServiceTechnician {

    searchTechnicianNamelike(queryString, token) {
        return http.get("technician/namelike", {
            params: {queryString},
            headers: {
                'Authorization': "Bearer " + token
            }
        });
    }

    loginTechnician(username, password) {
        return http.post("/technician/logIn", username, password);
    }
}

export default new ServiceTechnician();