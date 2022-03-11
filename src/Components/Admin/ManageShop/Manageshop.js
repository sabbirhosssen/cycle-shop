import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';

const Manageshop = () => {
    const [shop,setShop]=useState([]);
    useEffect(()=>{
        fetch('https://evening-ocean-40382.herokuapp.com/allCycle')
        .then(res=>res.json())
        .then(data=>setShop(data))
        
    },[])
    // console.log(shop);
    const handleDelete=(id)=>{
        const url = `https://evening-ocean-40382.herokuapp.com/allCycle/${id}`
        fetch(url, {
            method:'DELETE'
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            if (data.deletedCount) {
                alert('deleted')
                const remmaining = shop.filter(shop=>shop._id !== id)
                setShop(remmaining)
                
            }
        })
    }

    return (
        <div className='m-5'>
            <h2 className='text-white'>Manage All Shop</h2>

            {
                shop.map( shop => <div key={shop._id} className="d-block m-5 ">
                     <div className='d-flex  justify-content-space-between   rounded-3 bg-secondary  w-100 overflow-hidden'>
                         <div ><Image src={shop.img} width="45%" height="100%" className='rounded-3 text-start'></Image></div>
                         <div className='text-white mx-auto'>
                             <h2 className='fs-5'> Product Id: {shop._id}</h2>
                             <h1> {shop.cycle_name}</h1>
                             <Button onClick={()=> handleDelete(shop._id)}>Delete</Button>
                         </div>
                        
                     </div>

                     </div>)
            }
        </div>
    );
};

export default Manageshop;