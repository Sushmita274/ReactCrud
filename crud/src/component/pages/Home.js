import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Home = () => {

    const [users, setUser] = useState([]);

    useEffect
        (() => {
            loadusers();
        }, []);

    const loadusers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`)
        loadusers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table table-success table-stripped border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user, index) => (
                               <tr>
                                   <th scope="row">{index + 1}</th>
                                   <td>{user.name}</td>
                                   <td>{user.username}</td>
                                   <td>{user.email}</td>
                                   <td>
                                       <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                       <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                       <Link className="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</Link>
                                   </td>
                               </tr>
                           ))
                       }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;