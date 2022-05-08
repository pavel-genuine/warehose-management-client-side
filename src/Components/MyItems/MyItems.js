import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useItems from '../Shared/useItems/useItems';

const MyItems = () => {
    
    const [user] =useAuthState(auth)

    const [myItems, setMyItems] =useState([])

    
    const [items, setItems] = useItems()

    const navigate=useNavigate() 



    const handleDeleteOne = id =>{
        const confirmation = window.confirm('Are you sure to delete?');
        if(confirmation){
            const url = `https://secret-scrubland-28960.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
               
            }
            )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainingItems = myItems?.filter(item => item?._id !== id);
                setMyItems(remainingItems);
            })
        }
    }

    useEffect(()=>{
        
        const email =user?.email
        const url = `https://secret-scrubland-28960.herokuapp.com/user-items?email=${email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyItems(data))
    },[user])

    return (
        <div className='row w-75 mx-auto ' style={{height:'80vh'}} >
            <p className='m-5'>My items length : {myItems.length}</p>
            {
               
               myItems?.map(item=><div className='h-50 col-md-6 shadow my-2' key={item._id}>
                    <img style={{width:'15%'}} src={item?.img} alt="" />
                    <h5>{item?.supplier}</h5>
                    <p>{item?.name}</p>
                    <p>Price : tk. {item?.price}</p>
                    <p>Quantity : {item?.quantity} pcs</p>
                    
                    <button className='btn btn-danger' onClick={()=>handleDeleteOne(item?._id)}>Delete</button>

                   </div> )

           }
        </div>
    );
};

export default MyItems;