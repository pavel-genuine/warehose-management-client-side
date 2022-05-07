import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
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
                                <CustomLink to="/all-products">All Items</CustomLink>
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
                          
                            <li className="nav-item me-2">
                                <CustomLink to="sign-up">SignUp</CustomLink>
                            </li>
                            /
                            <li className="nav-item ms-2">
                                <CustomLink to="/sign-in">SignIn</CustomLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                   
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