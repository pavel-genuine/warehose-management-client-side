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

        setQuantity(item.quantity--)

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

        item.quantity += parseInt(addedQuantity)
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
        <div className='mx-5'>
            <img style={{width:'15%'}} src={item?.img} alt="" />  <br />
            {item?.name} <br />
            {item?.price} <br />
            {item?.quantity} <br />
            <button onClick={()=>deliveredHandle()} className='btn btn-success'>Delivered</button>

            <br />
            <input onBlur={addQuantity} type="number" name="quantity" id="" />
            <button className='btn btn-primary' onClick={() => handleAddQuantity()} >Add Quantity</button>
        </div>
    );
};

export default UpdateItem;