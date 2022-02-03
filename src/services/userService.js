import http from '../http-common';

const getAll = () => http.get('/data');

const create = (data) => http.post('/data', data);

const update = (id, data) => http.put(`/data/${id}`, data);

const remove = (id) => http.delete(`/data/${id}`);

const get = (id) => http.get(`/data/${id}`);

export default {
  getAll,
  create,
  update,
  remove,
  get,
};
