import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white p-5 w-100 mt-5 row footer'>
            <div className='col-md-7 gratitude ' >
                <h5>
                    Gadget Arena
                </h5>
                <p className=' mt-4 text-secondary'>
                    <small>
                        Copy right 2022 &#169; Gadget Arena all rights reserved.
                    </small>
                </p>
            
            </div>


            <div className='col-md-4 row' >
                <div className='col-md-4 col-sm-12 border-end border-secondary'>
                    <h6 className='text-secondary '>Book now</h6>
                    <h6>Gadgets</h6>
                    <h6> Best Seller</h6>

                </div>

                <div className='col-md-5 col-sm-12 border-end border-secondary'>
                    <h6 className='text-secondary'>Subscribe now</h6>
                    <h6>Newsletter</h6>
                    <h6>Promotional offers</h6>
                </div>
                <div className='col-md-3 col-sm-12 '>
                    <h6 className='text-secondary'>Socials</h6>
                    <h6>Twitter</h6>
                    <h6>Instagram</h6>
                </div>

            </div>
        </div>
    );
};

export default Footer;