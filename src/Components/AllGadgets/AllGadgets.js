import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Item from '../Shared/Item/Item';
import useItems from '../Shared/useItems/useItems';

const AllGadgets = () => {

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
                const remainingItems = items?.filter(item => item?._id !== id);
                setItems(remainingItems);
            })
        }
    }

    return (
        <div className='w-75 mx-auto row'>
           {
               
               items?.map(item=><div className=' col-md-6 shadow my-2' key={item._id}>
                   {/* <Item item={item} key={item._id}  ></Item> */}
                    
                    <h5>{item?.supplier}</h5>
                    <p>{item?.name}</p>
                    <p>Price : tk. {item?.price}</p>
                    <p>Quantity : {item?.quantity} pcs</p>
                    <button onClick={()=>navigate(`/update/${item?._id}`)} className='btn btn-success' >update</button>

                   <button className='btn btn-danger' onClick={()=>handleDeleteOne(item?._id)}>Delete</button>
                   </div> )

           } <br />
          <button style={{width:'25%', height:'25%', margin:'30px'}} className='btn btn-primary mb-5'onClick={()=>navigate(`/add-item`)}>Add Item</button>

           
        </div>
    );
};

export default AllGadgets;