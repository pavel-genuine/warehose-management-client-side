import { async } from '@firebase/util';
import axios from 'axios';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignIn.css'
// import {signInWithEmailAndPassword} from "firebase/auth";

const SignIn = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] =useState('')
    const [error5,setError5] =useState('')

    let [
        signInWithEmailAndPassword1,
        user,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, loading, error2] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(auth);


    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError5(errorMessage)
    });

  
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // if (user || user1) {
    //     // navigate(from, { replace: true });
    // }




    const handleEmail = (e) => {

        setEmail(e.target.value)
    }
    const handlePassword = (e) => {

        setPassword(e.target.value)
    }

    const handleSignInUser = async e => {

        e.preventDefault()
        await signInWithEmailAndPassword1(email, password)
        setError(error5)

        const {data} = await axios.post('http://localhost:5000/sign-in', {email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });

    }



    return (
        <div style={{height:'60vh'}} className=' d-flex flex-column my-5  align-items-center justify-content-center'>
            <div><Toaster/></div>
            <Form onSubmit={handleSignInUser} className="signin" >

                <Form.Group className="mb-3" controlId="formBasicEmail1">
                    <Form.Control onBlur={handleEmail} required style={{ backgroundColor: '#f6f3f3', border: 0, padding: '12px', fontSize: '18px' }} type="email" name='email' placeholder="Email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Control onBlur={handlePassword} required style={{ backgroundColor: '#f6f3f3', border: 0, padding: '12px', fontSize: '18px' }} type="password" placeholder="Password" />
                </Form.Group>

                <input className=" border-2 w-100 rounded text-center fs-5 " style={{ height: '50px',backgroundColor:'orange', color:'black' }} type="submit" value="Sign In" />
                <p className='text-danger mt-3' >Don't Have an account ?  <Link  className='text-decoration-none ' to='/signup'>Sign up</Link></p>
                  {error ?<p className='text-danger mt-3' >{error}</p> : ''}
                <div>
                    <span className='text-danger' >Forgot Password ?</span>
                    <button className='border-0 ms-2 bg-white text-primary'
                        onClick={async () => {
                            await sendPasswordResetEmail(email);
                            // alert('Sent email');
                            toast.success('Email sent successfully!')
                        }}>Reset Password</button>
                </div>
            </Form>



            <div>
                <input onClick={() => signInWithGoogle()} className="border-2 w-100 rounded text-center fs-5 px-5 my-3 " style={{ height: '40px', backgroundColor:'orange', color:'black' }} type="button" value="Google Sign In" />

            </div>

        </div>


    );
}

export default SignIn;