import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveUsers } from '../actions/users';

const Dashboard = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveUsers());
  }, []);

  return (
    <div className="container mt-2  border border-secondary pb-2">
        <h1>Dashboard</h1>
            <div className="p-2 table-responsive border border-secondary">
                <div className="d-flex justify-content-between m-3">
                    <h3>User list</h3>
                    <button className="btn btn-primary">Add new</button>
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
                                <td>{user.address.city}</td>
                                <td className="text-center"><button className="btn btn-warning">Edit</button></td>
                                <td className="text-center"><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  );
};

export default Dashboard;
