import React from 'react';
import img from '../../image/img4.avif'
import './Banner.css'

const Banner = () => {
    return (
        <div style={{position:"relative"}} className='banner'>
           <h1 className='shadow rounded' style={{backgroundColor:"rgba(255, 255, 255, 0.701", position:'absolute', bottom:'45%', right:"20%", padding:'5px'}} >
               Welcome to <span style={{color:'orange',backgroundColor:'black'}}>Gadget Arena</span> Inventory Management</h1>
           <img  src={img} alt="" />         
        </div>
        
    );
};

export default Banner;