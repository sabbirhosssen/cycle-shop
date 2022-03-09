import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Allshops from './Allshops';

const Allshop = () => {

    const [shop,setShop]=useState([])
    useEffect(()=>{
        fetch('/shop.json')
        .then(res=>res.json())
        .then(data=>setShop(data))
    },[])
    console.log(shop);
    return (
        <div>
              <h3>All Shop</h3>
            <Row xs={2} md={3} className="g-4 p-5 h-100   m-0">
                {
                    shop.map(shop=><Allshops key={shop.key} shop={shop}/>)
                }
                </Row>
        </div>
    );
};

export default Allshop;