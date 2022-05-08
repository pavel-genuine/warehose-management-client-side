import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../firebase.init';


const ContactUs = () => {

    const [user] = useAuthState(auth)

    const { register, handleSubmit } = useForm();


    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
        toast.success('Submitted successfully!')

    }


    return (
        <div  className=' ps-1 ms-5 my-5' style={{ height: '60vh' }}>

            <div><Toaster /></div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className='text-primary'>Give Your Feedback</h4>
                <input style={{ width: '75%' }} placeholder='first name' {...register("first-name", { required: true })} /> <br />
                <input style={{ width: '75%' }} placeholder='last nmae' {...register("last-name")} /> <br />
                {user ?
                    <div>
                        <input style={{ width: '75%' }} value={user?.email} {...register("email", { required: true })} /> <br />

                    </div>
                     :
                    <div>
                        <input style={{ width: '75%' }} placeholder='email' {...register("last-name")} /> <br />

                    </div>}
                <textarea style={{ width: '75%' }} placeholder='feedback...' {...register("feedback", { required: true })} /> <br />
                <input className='btn btn-danger mt-3' type="submit" />

            </form>
            <address className='mt-5'>
                <h5>Address :</h5>
                <h6>
                    House : 19 A,
                    Road : Soanrgoan Janapad,
                    Sector : 07,
                </h6>
                <h6>
                    Uttara, Dhaka-1230, Banagladesh
                </h6>
                <h6>
                    Cell : 017777777777777
                </h6>
                <h6>
                    Email : feedback@gadgetarena.com
                </h6>
            </address>
        </div>
    );
};

export default ContactUs;