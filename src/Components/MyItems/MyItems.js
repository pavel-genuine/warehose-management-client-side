import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    
    const [user] =useAuthState(auth)

    const [myItems, setMyItems] =useState([])

    useEffect(()=>{
        
        const email =user?.email
        const url = `http://localhost:5000/user-items?email=${email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyItems(data))
    },[user])

    return (
        <div className='row w-75 mx-auto ' style={{height:'80vh'}} >
            <p className='m-5'>My items length : {myItems.length}</p>
            {
               
               myItems?.map(item=><div className='h-50 col-md-6 shadow my-2' key={item._id}>
                    
                    <h5>{item?.supplier}</h5>
                    <p>{item?.name}</p>
                    <p>Price : tk. {item?.price}</p>
                    <p>Quantity : {item?.quantity} pcs</p>

                   </div> )

           }
        </div>
    );
};

export default MyItems;