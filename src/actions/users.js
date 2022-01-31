import {
  CREATE_USER,
  RETRIEVE_USERS,
  UPDATE_USER,
  DELETE_USER,
} from './types';

import UserDataService from '../services/user.service';

export const createUser = (name, email) => async (dispatch) => {
  try {
    const res = await UserDataService.create({ name, email });
    dispatch({
      type: CREATE_USER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveUsers = () => async (dispatch) => {
  try {
    const res = await UserDataService.getAll();

    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return err;
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await UserDataService.update(id, data);

    dispatch({
      type: UPDATE_USER,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await UserDataService.delete(id);

    dispatch({
      type: DELETE_USER,
      payload: { id },
    });
    return false;
  } catch (err) {
    return err;
  }
};
