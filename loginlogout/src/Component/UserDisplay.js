import React from 'react';
import {Link} from 'react-router-dom';

const UserDisplay = (props) => {

    const renderTable = ({userdata}) => {
        if(userdata){
            return userdata.map((item) => {
                return(
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div>
            <center><h3>Users</h3></center>
            <Link to="/profile" className="btn btn-primary">Profile</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default UserDisplay;