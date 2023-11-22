import React from "react";
import { Link } from "react-router-dom";
import User from "../features/users/User";

// Props for UserTable component
interface UserTableProps {
    users: User[];
}

// UserTable component displaying a table of users
const UserTable: React.FC<UserTableProps> = ({ users }) => {
    
    return (
        
            <table className="table table-striped ">

            { /* Table header */}
            <thead className = "table-warning">
                <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Age</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>

            { /* Table body with user data */}
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>

                        
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.age}</td>
                        <td>  <Link className="btn btn-outline-primary" to={`/EditPage/${user.id}`}>Edit</Link></td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;