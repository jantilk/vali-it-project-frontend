import http from "../http-common";

class ServiceTechnician {

    searchTechnicianNamelike(queryString) {
        return http.get("technician/namelike", {params: {queryString}});
    }

    loginTechnician(username, password) {
        return http.post("/technician/logIn", username, password);
    }
}

export default new ServiceTechnician();