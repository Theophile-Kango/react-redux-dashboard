import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/users";

const NewUser = () => {
    const initialTutorialState = {
        name: "",
        email: ""
    };

    const [user, setUser] = useState(initialTutorialState);
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUser = () => {
        const { name, email } = user;
    
        dispatch(createUser(name, email))
          .then(data => {
            setUser({
              name: data.name,
              email: data.email
            });
            setSubmitted(true);
    
            console.log(data);
          })
          .catch(e => {
            console.log(e);
          });
    };

    const newUser = () => {
        setUser(initialTutorialState);
        setSubmitted(false);
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
                            required={true} 
                            id="inputName" 
                            value={user.name}
                            name="name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control w-75" 
                            required={true} 
                            id="inputEmail" 
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <a type="cancel" className="btn btn-secondary" style={{marginRight: "20px"}} href="/">cancel</a>
                        <button type="submit" className="btn btn-primary" onClick={saveUser} >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
};

export default NewUser;
