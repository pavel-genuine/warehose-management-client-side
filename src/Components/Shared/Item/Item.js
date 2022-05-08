import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const {_id,name,img,description,supplier, price,quantity}=props.item

    const navigate=useNavigate() 

    const updateItem =(_id)=>{
        navigate(`/inventory/${_id}`)
    }

    return (
        <div className=' col-md-4 shadow my-2'>
            <img style={{width:'100%'}} src={img} alt="" />
            <h5>
                {supplier}
            </h5>
            <p>
            {name} 
            </p>
            <p title={description}>{description.slice(0,200)}...</p>

            <p>
            Price : tk. {price}
            </p>
            <p>
             Quantity: {quantity} pcs
            </p>
            <button onClick={()=>updateItem(_id)} className='btn btn-success' >update</button>
        </div>
    );
};

export default Item;