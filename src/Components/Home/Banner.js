import React from 'react';
import img from '../../image/img4.avif'
import './Banner.css'

const Banner = () => {
    return (
        <div style={{position:"relative"}} className='banner'>
           <h1 className='shadow rounded w-50 text-center' style={{backgroundColor:"rgba(255, 255, 255, 0.701", position:'absolute', top:'30%', left:"27%", padding:'5px'}} >
               Welcome to Inventory Management System of <span style={{color:'orange',backgroundColor:'black',padding:'0 5px 0 5px',fontWeight:'lighter'}}>Gadget Arena</span></h1>
           <img  src={img} alt="" />         
        </div>
        
    );
};

export default Banner;