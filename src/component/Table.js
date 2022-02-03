import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, retrieveUsers } from '../actions/users';

const Table = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveUsers());
  }, []);

  const removeUser = () => {
    dispatch(deleteUser(currentUser.id))
      .then(() => {
        props.history.push('/dashboard');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="p-2 table-responsive border border-secondary">
      <div className="d-flex justify-content-between m-3">
        <h3>User list</h3>
        <Link className="btn btn-primary" to="/new-user">Add new</Link>
      </div>

      <table className="table border">
        <thead className="table-light">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th className="text-center" scope="col">Edit</th>
            <th className="text-center" scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address && user.address.city}</td>
              <td className="text-center"><Link to={`/edit-user/${user.id}`} className="btn btn-warning">Edit</Link></td>
              <td className="text-center"><button className="btn btn-danger">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
