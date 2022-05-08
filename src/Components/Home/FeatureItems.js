import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Item from '../Shared/Item/Item';
import useItems from '../Shared/useItems/useItems';


const FeatureItems = () => {

    // useItems custom hook 
    const [items, setItems]=useItems([])

    if(items?.length===0){
        return <div style={{margin:'200px 0 40vh 700px'}}>
            <Spinner animation="grow" />
            <Spinner style={{margin:'0 20px 0 20px '}} animation="grow" />
            <Spinner animation="grow" />
        </div>
    }
  
    return (
        <div className='w-75 mx-auto my-3'>
            <div className=' mx-auto row'>
                {}
                {
                items?.map(item=><Item item={item} key={item._id}  ></Item>).slice(0,6)
                }
            </div>
            <div>
                <Link to='/manage-inventory'><button className='btn btn-primary'>Manage Inventories</button></Link>
            </div>
        </div>
    );
};

export default FeatureItems;