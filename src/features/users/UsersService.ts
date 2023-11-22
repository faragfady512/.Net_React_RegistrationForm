import UserRepository from "./UserRepository";
import User from "./User";


// Service class for managing user-related operations
class UsersService {

    // Instance of the UserRepository to interact with the API
    private userRepository: UserRepository;


    // Constructor to initialize the UserRepository
    constructor() {
        this.userRepository = new UserRepository();
    }


    // get a list of users from the get API
    async getUsers(): Promise<User[]> {
        return this.userRepository.getUsers();
    }


    // Adds a new user to the post API
    async addUser(user: User): Promise<User> {
        return this.userRepository.addUser(user);
    }


    // Edits an existing user in the put API 
    async editUser(user: User, userId:string): Promise<User> {
        return this.userRepository.editUser(user, userId);
    }


}

export default UsersService;