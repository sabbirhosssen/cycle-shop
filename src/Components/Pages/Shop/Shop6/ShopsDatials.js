import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ShopsDatials = () => {
    const params =useParams();
    // console.log(params.shopId);
    
    const [cycle, setCycle]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/allCycle/${params.shopId}`)
        .then(res=>res.json())
        .then(data=>setCycle(data))
    },[])
    // console.log(cycle);
    return (
        <div>

            <div className='d-flex m-5  justify-content-center'>
                <div>
                    <Image src={cycle.img} width='100%' height="320"></Image>
                </div>
                <div className='ms-5  ps-5 text-start'>
                   <h5 className='text-success'> Product ID :{cycle._id}</h5>
                   <h3 className='text-success'>Name : {cycle.cycle_name} </h3>
                   <h3 className='text-success'>Size : {cycle.size} </h3>
                   <h3 className='text-success'>Type : {cycle.type} </h3>
                   <h3 className='text-success'>Price : {cycle.price} </h3>

                   <Link to='/h'  className=''> <button  className='border-0 text-white btn btn-outline-black bg-success mb-1 mx-auto mt-3' >Add To Cart</button> </Link>
                </div>
            </div>
            {/* <h3>hello </h3> onClick={()=>handleClickShops(_id)}*/}
        </div>
    );
};

export default ShopsDatials;