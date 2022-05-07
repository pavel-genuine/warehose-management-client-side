import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Shared/Item/Item';
import useItems from '../Shared/useItems/useItems';


const FeatureItems = () => {

    const [items, setItems]=useItems()
  
    return (
        <div className='w-75 mx-auto my-3'>
            <div className=' mx-auto row'>
                {}
                {
                items?.map(item=><Item item={item} key={item._id}  ></Item>).slice(0,6)
                }
            </div>
            <div>
                <Link to='all-products'><button className='btn btn-primary'>All Items</button></Link>
            </div>
        </div>
    );
};

export default FeatureItems;