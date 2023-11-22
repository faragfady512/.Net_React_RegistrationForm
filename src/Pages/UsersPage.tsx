
import React, { useState, useEffect } from "react";
import UsersService from "../features/users/UsersService";
import User from "../features/users/User";
import UserTable from "../Components/UserTable";


// UsersPage component to display a table of users
const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const usersService = new UsersService();

     // Fetch users data on component mount
    useEffect(() => {
        usersService.getUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <div>
            {/* UserTable component to display users */}
            <UserTable users={users}/>
        </div>
    );
};

export default UsersPage;