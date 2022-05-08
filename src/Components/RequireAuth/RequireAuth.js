
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {

    const [user,loading]=useAuthState(auth)

    const location = useLocation()


    if(loading){
        return <div style={{margin:'200px 0 40vh 700px'}}>
            <Spinner animation="grow" />
            <Spinner style={{margin:'0 20px 0 20px '}} animation="grow" />
            <Spinner animation="grow" />
        </div>
    }
    if(!user){
          
        // redirecting the location 
        return <Navigate to='/sign-in' state={{from:location}} replace ></Navigate>

    } 


    return children
};

export default RequireAuth;
