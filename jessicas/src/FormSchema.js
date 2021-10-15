import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required('name is required').min(5, 'name needs to be at least 5 characters long'),
    email: yup.string().required('email is required').min(5, 'email needs to be at least 5 characters long'),
    password: yup.string().required('password is required').min(5, 'password needs to be at least 5 characters long'),
    terms: yup.boolean().oneOf([true], 'you need to agree to sign your life away')
})