import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Shops from './Shops';

const Shop = () => {
    const [shops,setShop]=useState([]);
    useEffect(()=>{
        fetch('/shop.json')
        .then(res=>res.json())
        .then(data=>setShop(data))
    },[])
    const shop =shops.slice(6)
    return (
        <div>
            <h3>shop</h3>
            <Row xs={2} md={3} className="g-4 p-5 h-100   m-0">
                {
                    shop.map(shop=><Shops key={shop.key} shop={shop}/>)
                }
                </Row>
{/* {
        shop?.map(shop=>
            <ShopData
           key={shop?.id}
            book={shop}
            />)
    } */}
        </div>
    );
};

export default Shop;