import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { retrieveUsers } from "../actions/users";

const Dashboard = (props) => {

    const { users } = props;

    useEffect(() => {
        retrieveUsers();
    },[users]);

    console.log(users)

    const initialState = {
        currentUser: null,
        currentIndex: -1
    }

    const [state, setState] = useState(initialState);

    const setActiveUser = (user, index) => {
        setState({
            currentUser: user,
            currentIndex: index
        });
    }

    return (<>
        <h1>Dashboard</h1>
        {users && users.map(user => (
            <p key={user.id}>{user.name}</p>
        ))}
    </>);
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

export default connect(mapStateToProps, { retrieveUsers })(Dashboard);
