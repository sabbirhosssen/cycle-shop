import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Shops from './Shops';

const Shop = () => {
    const [shops,setShop]=useState([]);
    useEffect(()=>{
        fetch('https://cycle-shop-server-sabbirhosssen.vercel.app/allCycle')
        .then(res=>res.json())
        .then(data=>setShop(data))
    },[])
    const shop =shops.slice(0,6)
    return (
        <div className='mt-5 p-5'>
            <h2 className='text-white fs-1'> Lets Go Cycle Shopping</h2>
            <Row xs={1} md={3} className="g-4 p-5 h-100  m-5 m-0 border-0 rounded">
                {
                    shop.map(shop=><Shops key={shop._id} shop={shop}/>)
                }
                </Row>

        </div>
    );
};

export default Shop;