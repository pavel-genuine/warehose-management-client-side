import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {

    const { id } = useParams()

    const [item, setItem] = useState()

    const [addedQuantity, setAddedQuantity] = useState()

    useEffect(() => {
        fetch(`https://secret-scrubland-28960.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])


    const [quantity, setQuantity] = useState();

    const deliveredHandle = () => {

        setQuantity(--item.quantity)

        const url = `https://secret-scrubland-28960.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
               
            })
    }

    const addQuantity = (e) => {
        setAddedQuantity(e.target.value)
        console.log(e.target.value)

    }
    
    const handleAddQuantity = () => {

        item.quantity = parseInt(item?.quantity)+ parseInt(addedQuantity)
        setQuantity(item.quantity)

        const url = `https://secret-scrubland-28960.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
               
            })

    }


    return (
        <div className=' w-50 mx-auto' >
            <img  style={{width:'35%'}} src={item?.img} alt="" />
            <h5>{item?.supplier}</h5>
            <p>{item?.name}</p> 
            <p>{item?.description}</p>
            <p>Price : tk. {item?.price} </p>
            <p>Quantity : { item?.quantity>0 ? item?.quantity :0}</p> 
            <p>Availability : { item?.quantity>0 ? 'In Stock': 'Stock Out'} </p>
            <button onClick={()=>deliveredHandle()} className='btn btn-success'>Delivered</button>

            <br /> <br />
            <input onBlur={addQuantity} type="number" name="quantity" id="" />
            <button className='btn btn-primary ms-2' onClick={() => handleAddQuantity()} >Add Quantity</button> <br /> <br />
        </div>
    );
};

export default UpdateItem;