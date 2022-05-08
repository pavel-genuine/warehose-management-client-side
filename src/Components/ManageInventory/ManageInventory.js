import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Item from '../Shared/Item/Item';
import useItems from '../Shared/useItems/useItems';

const ManageInventory = () => {

    const [items, setItems] = useItems()
    const [user] =useAuthState(auth)
    const navigate=useNavigate() 

    if(items?.length===0){
        return <div style={{margin:'200px 0 40vh 700px'}}>
            <Spinner animation="grow" />
            <Spinner style={{margin:'0 20px 0 20px '}} animation="grow" />
            <Spinner animation="grow" />
        </div>
    }


    const handleDeleteOne = id =>{
        if(user){
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
                const remainingItems = items?.filter(item => item?._id !== id);
                setItems(remainingItems);
            })
        }}

        else{
            navigate("/sign-in")
        }
    }

    return (
        <div className='w-75 mx-auto row'>
           {
               
               items?.map(item=><div className=' col-md-6 shadow my-2' key={item._id}>
                    
                    <h5>{item?.supplier}</h5>
                    <p>{item?.name}</p>
                    <p>Price : tk. {item?.price}</p>
                    <p>Quantity : {item?.quantity} pcs</p>
                    <button onClick={()=>navigate(`/inventory/${item?._id}`)} className='btn btn-success' >update</button>

                   <button className='btn btn-danger' onClick={()=>handleDeleteOne(item?._id)}>Delete</button>
                   </div> )

           } <br />
          <button style={{width:'25%', height:'25%', margin:'30px'}} className='btn btn-primary mb-5'onClick={()=>navigate(`/add-item`)}>Add Item</button>

           
        </div>
    );
};

export default ManageInventory;