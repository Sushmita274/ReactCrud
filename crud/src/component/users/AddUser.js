import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();
    const [ user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:""
    })

    const {name, username, email, phone} = user;

    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit = async e => {
        e.preventDefault()
        await axios.post("http://localhost:3001/users", user);
        history.push("/")
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add a User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                         type="text"
                         className="form-control form-control-lg"
                         placeholder="Enter your name"
                         name="name"
                         value={name}
                         onChange = {e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                         type="text"
                         className="form-control form-control-lg"
                         placeholder="Enter your user name"
                         name="username"
                         value={username}
                         onChange = {e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                         type="email"
                         className="form-control form-control-lg"
                         placeholder="Enter your email-address"
                         name="email"
                         value={email}
                         onChange = {e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                         type="text"
                         className="form-control form-control-lg"
                         placeholder="Enter your phone number"
                         name="phone"
                         value={phone}
                         onChange = {e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add a User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;