import http from "../http-common";

class ServiceTechnician {

    searchTechnicianNamelike(queryString) {
        return http.get("technician/namelike", {params: {queryString}});
    }
}

export default new ServiceTechnician();