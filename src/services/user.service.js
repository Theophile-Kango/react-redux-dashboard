import http from '../http-common';

class UserDataService {
  static getAll() {
    return http.get('/data');
  }

  static create(data) {
    return http.post('/data', data);
  }

  static update(id, data) {
    return http.put(`/data/${id}`, data);
  }

  static delete(id) {
    return http.delete(`/data/${id}`);
  }
}

export default new UserDataService();
