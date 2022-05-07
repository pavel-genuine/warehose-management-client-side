
import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SignUp.css'


const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const navigate = useNavigate()




    const handleEmail = (e) => {

        setEmail(e.target.value)
    }
    const handlePassword = (e) => {

        setPassword(e.target.value)
    }

    const handleCreateUser = (e) => {

        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
        console.log(error);


    }

    if (user || user1) {
        navigate('/')

    }

    return (
        <div className=' d-flex flex-column my-5  align-items-center justify-content-center'>
            <Form onSubmit={handleCreateUser} className='signup' >

                <Form.Group className="mb-3 bg-grey " controlId="formBasicText">
                    <Form.Control style={{ backgroundColor: '#f6f3f3', border: 0, padding: '12px', fontSize: '18px' }} required type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmail} required style={{ backgroundColor: '#f6f3f3', border: 0, padding: '12px', fontSize: '18px' }} type="email" name='email' placeholder="Email" />
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePassword} required style={{ backgroundColor: '#f6f3f3', border: 0, padding: '12px', fontSize: '18px' }} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control style={{ backgroundColor: '#f6f3f3', border: 0, padding: '12px', fontSize: '18px' }} required type="password" placeholder="Confirm  Password" />
                </Form.Group>
                <input className="bg-dark border-0 text-white w-100 rounded text-center fs-5 " style={{ height: '50px' }} type="submit" value="Sign Up" />
                <p className='text-danger mt-3' >Already Have an account ?  <Link className='text-decoration-none ' to='/signin'>Sign In</Link></p>
                <p>{error ? error.message : ''}</p>
            </Form>



            <div>
                <input onClick={() => signInWithGoogle()} className="bg-dark border-0 text-white w-100 rounded text-center fs-5 px-5 my-3 " style={{ height: '40px' }} type="button" value="Google Sign In" />

            </div>

        </div>




    );
};

export default SignUp;