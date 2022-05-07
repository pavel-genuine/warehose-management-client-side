import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {

    const [user] =useAuthState(auth)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                   <div className='row w-100'>
                 <div className='col-md-4'>
                 <Link className="navbar-brand" to="/">Gadget Arena</Link>
                    <button style={{marginLeft:'150px'}}  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span  className="navbar-toggler-icon"></span>
                    </button>
                 </div>
                   <div className='col-md-6'>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                          
                          <li className="nav-item me-4">
                                <CustomLink to="/">Home</CustomLink>
                            </li>
                            <li className="nav-item me-4">
                                <CustomLink to="/manage-inventory">Manage Inventory</CustomLink>
                            </li>
                            <li className="nav-item me-4">
                                <CustomLink to="/add-item">Add Item</CustomLink>
                            </li>
                            <li className="nav-item me-4">
                                <CustomLink to="/my-items">My Items</CustomLink>
                            </li>
                            <li className="nav-item me-4">
                                <CustomLink to="/blogs">Blogs</CustomLink>
                            </li>
                             
                             {
                                 user ? "" :
                                 <li className="nav-item me-2">
                                 <CustomLink to="sign-up">SignUp</CustomLink>
                             </li>}
                             {
                                 user ? "": <li className='mx-2'>/</li>
                             }
                             { user?  "" : 
                             <li className="nav-item ">
                                 <CustomLink to="/sign-in">SignIn</CustomLink>
                             </li>
                             }
                               
                            <li className="nav-item dropdown">

{
    user ? <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'black', color: 'white', borderRadius: '30px', padding: '10px', marginLeft: '10px' }}>
        {user?.email}
    </span> : ''
}

<ul className="dropdown-menu" aria-labelledby="navbarDropdown">


    <button style={{ border: '0', backgroundColor: 'black', color: 'white', width: '100%' }} onClick={() => signOut(auth)} >Sign Out</button>



</ul>
</li>
                        

                        </ul>

                    </div>
                   </div>
                   </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;