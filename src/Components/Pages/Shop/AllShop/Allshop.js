import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Allshops from './Allshops';

const Allshop = () => {

    const [shop,setShop]=useState([])
    useEffect(()=>{
        fetch('https://cycle-shop-server-sabbirhosssen.vercel.app/allCycle')
        .then(res=>res.json())
        .then(data=>setShop(data))
    },[])
    // console.log(shop);
    return (
        <div className='pt-5'>
              <h2 className='text-white '>All Shop</h2>
            <Row xs={2} md={4} className="g-4 p-5 h-100   m-0">
                {
                    shop.map(shop=><Allshops key={shop._id} shop={shop}/>)
                }
                </Row>
        </div>
    );
};

export default Allshop;