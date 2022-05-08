import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';



const AddItem = () => {
    
    const [user]  =useAuthState(auth)

    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data,e)=>{
        console.log(data);
        e.target.reset(); 
         {/* react hot toast  */}
        toast.success('Item added successfully!')

        
        const url =`https://secret-scrubland-28960.herokuapp.com/inventory`
        fetch(url,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))


    }
    return (
        <div className='ps-1 mx-5 my-5' style={{height:'60vh'}}>
        
        {/* react hot toast  */}
         <div><Toaster/></div>

      {/* react form hook  */}
      
      <form   onSubmit={handleSubmit(onSubmit)}>
      <input style={{width:'75%'}} value={user?.email} readOnly {...register("email", { required: true})} /> <br />
      <input style={{width:'75%'}} placeholder='name' {...register("name", { required: true})} /> <br />
      <input style={{width:'75%'}} placeholder='image url' {...register("img")} /> <br />
      <input  style={{width:'75%'}}  placeholder='price' type='number' {...register("price" , { required: true})} /> <br />
      <textarea  style={{width:'75%'}} placeholder='description' {...register("description", { required: true})} /> <br />
      <input  style={{width:'75%'}} placeholder='supplier' {...register("supplier", { required: true})} /> <br />
      <input  style={{width:'75%'}} placeholder='quantity' type="number" {...register("quantity" , { required: true})} /> <br />  <br />
      <input className='btn btn-danger me-3' type="submit" />
      <Link to='/manage-inventory'><button className='btn btn-primary'>Manage Inventories</button></Link>

    </form>
        </div>
    );
};

export default AddItem;