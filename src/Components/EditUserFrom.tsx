
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import UsersService from "../features/users/UsersService";
import Swal from 'sweetalert2';
import UserValidationSchema from "../Validations/UserValidationSchema";
import Users from "../features/users/User";
import { useParams } from 'react-router';


// Define the props for EditUserForm component user id takes from paramters in EditPage

interface EditUserFormProps {
    userId?: string; 
}


// Define EditUserForm as a functional component

const EditUserForm: React.FC<EditUserFormProps> = ({ userId = '' }) => {

    // Use react-hook-form for managing form state and validation

    const { register, handleSubmit, formState: { errors } } = useForm<Users>({
        resolver: yupResolver(UserValidationSchema),
    });


    // Local state to manage the user data

    const [user, setUser] = useState<Users>({
        id: String(userId),  //userid send from paramters
        name: '',
        email: '',
        phoneNumber: '',
        age: 0,
    });


        // Handle changes in input fields

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setUser((prevUser) => ({ // Update the user state based on the input changes
                ...prevUser,
                [name]: value,
            }));
        };


         // Handle form submission

    const onSubmit: SubmitHandler<Users> = async (data) => {

             // Create an instance of the UsersService to interact with the API
        const userService = new UsersService();

            

            try {
                console.log('Editing user:', data);

                console.log(userId)
                // Attempt to edit the user using the UsersService and the 'userId' from the route
                await userService.editUser(data, userId);


                // Show a success alert using sweetalert
                Swal.fire({
                    title: 'Edit Done',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });

                console.log('User edited successfully');
            } catch (error: any) {

                // Show a error alert using sweetalert

                Swal.fire({
                    title: 'Edit Failed',
                    text: 'An error occurred while editing the user.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });

                console.error('Error editing user:', error.response?.status, error.response?.data);
            }
        };



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

                {/* Edit Button to Edit data */}

                <button type="submit" className="  btn btn-outline-dark btn-lg">
                    Edit
                </button>
            </div>
        </form>
    );
};

export default EditUserForm;

