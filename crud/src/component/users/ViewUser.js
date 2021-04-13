import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useHistory, useParams, Link} from 'react-router-dom';

const ViewUser = () => {
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })
    const {id} = useParams();

    useEffect(()=> {
        loadUser()
    },[])

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/users/${id}`)
    setUser(res.data);
    }
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">Back to Home</Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">Name: {user.username}</li>
                <li className="list-group-item">Name: {user.email}</li>
                <li className="list-group-item">Name: {user.phone}</li>
                <li className="list-group-item">Name: {user.website}</li>
            </ul>
        </div>
    )
}

export default ViewUser;