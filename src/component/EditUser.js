import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateUser } from '../actions/users';
import UserDataService from '../services/userService';

const EditUser = (props) => {
  const initialTutorialState = {
    name: '',
    email: '',
  };

  const [currentUser, setCurrentUser] = useState(initialTutorialState);
  const history = useHistory();

  const dispatch = useDispatch();

  const getUser = (id) => {
    UserDataService.get(id)
      .then((response) => {
        setCurrentUser(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUser(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const updateContent = (e) => {
    e.preventDefault();
    dispatch(updateUser(currentUser.id, currentUser))
      .then((response) => {
        console.log(response);
        history.push('/dashboard');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="p-2 table-responsive w-75">
      <div className="card">
        <div className="card-header">
          Form
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3 d-flex justify-content-between">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control w-75"
                required
                id="inputName"
                value={currentUser.name}
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div className="d-flex justify-content-between">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input
                type="email"
                className="form-control w-75"
                required
                id="inputEmail"
                name="email"
                value={currentUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="d-flex justify-content-end mt-3">
              <a type="cancel" className="btn btn-secondary" style={{ marginRight: '20px' }} href="/">cancel</a>
              <button type="submit" className="btn btn-primary" onClick={updateContent}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
