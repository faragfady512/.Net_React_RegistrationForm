
// Define an interface 'User' to represent the structure of a user object.
// It includes optional 'id' (string), 'name' (string), 'email' (string),
// 'phoneNumber' (string), and 'age' (number) properties.


interface User {

    id?: string;
    name: string;
    email: string;
    phoneNumber: string;
    age: number;
}

export default User;