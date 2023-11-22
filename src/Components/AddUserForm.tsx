
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import React, { useState } from 'react';
import UsersService from "../features/users/UsersService";
import Swal from 'sweetalert2';
import UserValidationSchema from "../Validations/UserValidationSchema";
import Users from "../features/users/User";

// Define the user form component in regestiration page for adding a new user

const AddUserForm: React.FC = () => {

    // Use React Hook Form for managing the form state and validation

    const { register, handleSubmit, formState: { errors } } = useForm<Users>({
        resolver: yupResolver(UserValidationSchema),
    });


    // Local state for managing user input

    const [user, setUser] = useState({
        id: 0,
        name: '',
        email: '',
        phoneNumber: '',
        age: 0,
    });

     // Handle changes in input fields

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Update the user state based on the input changes

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Handle form submission
    const onSubmit: SubmitHandler<Users> = async (data) => {

        // Create an instance of the UsersService to interact with the API
        const userService = new UsersService();

        try {
            // Attempt to add the user using the UsersService
            await userService.addUser(data);

             // If post successful, show a success alert using sweetalert
            Swal.fire({
                title: 'Registration Done',
                icon: 'success',
                confirmButtonText: 'OK',
            });
            console.log('User added successfully');
        } catch (error) {
            // If an error occurs, show an error alert using sweetalert
            Swal.fire({
                title: 'Registration Failed',
                text: 'An error occurred while adding the user.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
           
            console.error('Error adding user:', error);
        }
    };

    //  the form with input fields and submission button to post data to api 
    return (
        <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                    {/* Input field for Name */}
                    <input
                        type="text"
                        id="name"

                        {...register('name')}
                        value={user.name}
                        onChange={handleChange}
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Name"
                        required
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                    {/* Input field for Email */}
                    <input
                        type="email"
                        id="email"

                        {...register('email')}
                        value={user.email}
                        onChange={handleChange}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
            </div>
            

            <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lg me-3 fa-phone"></i>
                <div className="form-outline flex-fill mb-0">

                    {/* Input field for Phone Number */}

                    <input
                        type="tel"
                        id="phoneNumber"

                        {...register('phoneNumber')}
                        value={user.phoneNumber}
                        onChange={handleChange}
                        className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                        placeholder="Phone"
                        required
                    />
                    {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber.message}</div>}
                </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-arrow-down-1-9 fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">

                    {/* Input field for Age */}

                    <input
                        type="number"
                        id="age"

                        {...register('age')}
                        value={user.age}
                        onChange={handleChange}
                        className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                        placeholder="Age"
                        required
                    />
                    {errors.age && <div className="invalid-feedback">{errors.age.message}</div>}
                </div>
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">

                {/* Registration Button to submit data */}

                <button type="submit" className="btn btn-primary btn-lg">
                    Register
                </button>
            </div>
        </form>
    );
};

export default AddUserForm;

