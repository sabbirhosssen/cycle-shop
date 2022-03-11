import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const MyOrder = () => {
    const [order , setOrder]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allOrder')
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    const handleDeleteOrder =(id)=>{
        const url = `http://localhost:5000/allOrder/${id}`
        fetch(url, {
            method:'DELETE'
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            if (data.deletedCount) {
                alert('deleted')
                const remmaining = order.filter(shop=>shop._id !== id)
                setOrder(remmaining)
                
            }
        })
        console.log("hi");
    }
    return (
        <div>
            <h2 className='text-white fs-1  pt-5'> My All Order</h2>

            {
                order.map( order => <div key={order._id} className="d-block m-5 ">
                     <div className='d-flex  justify-content-space-between   rounded-3 bg-secondary  w-100 overflow-hidden'>
                         <div className='text-white p-5 text-start'>
                         <h4 className='fs-3'>Name : {order.name}</h4>
                         <h4 className='fs-4'> Email :{order.email}</h4>
                         <h4 className='fs-4'> Number :{order.Number}</h4>
                         <h4 className='fs-5'> Address :{order.address}</h4>
                             <h2 className='fs-6'> Product Id: {order.Id_product}</h2>
                             <h2 className='fs-6'> Time : {order.createdAt}</h2>
                             
                             <Button className='bg-success border-0 mb-2' onClick={()=> handleDeleteOrder(order._id)}>Delete</Button>
                         </div>
                        
                     </div>

                     </div>)
            }
        </div>
    );
};

export default MyOrder;