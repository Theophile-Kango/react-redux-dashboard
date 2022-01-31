
import http from "../http-common";

class UserDataService {

    getAll() {
        return http.get("/data");
    }
  
  
    create(data) {
        return http.post("/data", data);
    }

    update(id, data) {
        return http.put(`/data/${id}`, data);
    }

    delete(id) {
        return http.delete(`/data/${id}`);
    }

}

export default new UserDataService();