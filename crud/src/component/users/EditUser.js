import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
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

    useEffect(()=>{
        loadUser()
    },[])

    const onSubmit = async e => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/users/${id}`, user);
        history.push("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        // console.log(result)
        setUser(result.data)
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
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
                    <button className="btn btn-primary btn-block">Update User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;