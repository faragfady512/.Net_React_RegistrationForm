import axios from "axios";
import { Console } from "console";
import User from "./User";


// Repository class for handling API operations

class UserRepository {


    // get a list of users from the API to show it in table in user page 

    async getUsers(): Promise<User[]> {
       
        const response = await axios.get("https://localhost:44331/api/User");
        console.log(response.data);
        return response.data;
    }


    // Adds a new user to the post api in registration page

    async addUser(user: User): Promise<User> {
        try {
            const response = await axios.post("https://localhost:44331/api/User", user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            console.error('Error adding user:', error);
            throw error; 
        }
    }


    // Edits an existing user in the put api in edit page

    async editUser(user: User, userId:string): Promise<User> {
        try {
            
            const response = await axios.put(`https://localhost:44331/api/User/${userId}`, user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            console.error('Error editing user:', error);
            throw error;
        }
    }





}

export default UserRepository;