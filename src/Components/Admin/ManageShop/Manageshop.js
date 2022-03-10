import React, { useState } from 'react';

const Manageshop = () => {
    const [shop,setShop]=useState([]);
    // useEffect(()=>{
        
        
    // },[])
    console.log(shop);
    return (
        <div className='m-5'>
            <h2 className='text-white'>manage all shop</h2>

            {/* {
                shop.map( shop => <div key={shop._id}>
                     <div className='d-flex '>
                         <div ><Image src={shop.img} width="250px" height="170px"></Image></div>
                         <div>
                             <h1> {shop.cycle_name}</h1>
                         </div>
                         <Button>Delete</Button>
                     </div>

                     </div>)
            } */}
        </div>
    );
};

export default Manageshop;