import * as Yup from 'yup';

// Validation schema using Yup for form inputs
const UserValidationSchema = Yup.object({

    
    // Name field validation
    name: Yup.string().required('Name is required'),

    // Email field validation
    email: Yup.string().email('Invalid email').required('Email is required'),

    // Phone number field validation
    phoneNumber: Yup.string()
        .matches(/^[0-9+\s()-]+$/, 'Invalid phone number') // Match the specified pattern to phone numbers pattern 
        .required('Phone is required'),

    // Age field validation
    age: Yup.number()
        .positive('Age must be positive') // Ensure the age is a positive number
        .integer('Age must be an integer') // Ensure the age is an integer
        .min(16, 'Age must be at least 16') // Minimum age allowed is 16
        .max(90, 'Age must be at most 90') // Maximum age allowed is 90
        .required('Age is required'),
});


export default UserValidationSchema;
