import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ShopsDatials = () => {
    const params =useParams();
    // console.log(params.shopId);
    const navigate =useNavigate();
    const [cycle, setCycle]=useState([])
    useEffect(()=>{
        fetch(`https://cycle-shop-server-sabbirhosssen.vercel.app/allCycle/${params.Id}`)
        .then(res=>res.json())
        .then(data=>setCycle(data))
    },[])
    // console.log(cycle);
    const handleOrderClick =()=>{
        const rediret_ui =`/ordernow/${cycle._id}`
        navigate(rediret_ui)
        
    }
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

                   <Link to={`/ordernow/${cycle._id}`}  className=''> <button onClick={()=>handleOrderClick(cycle._id)}  className='border-0 text-white btn btn-outline-black bg-success mb-1 mx-auto mt-3' >Buy Now</button> </Link>
                </div>
                
            </div>
             <div className='text-white m-5 '>
                 <h1 className='text-start text-success'>Description : <Link to={`/shop/${params.shopId}/description`  } className="text-duretion-none text-success">  Reivews
                </Link></h1> 
                 {cycle.description}
             </div>

        
            
            </div>
       
    );
};

export default ShopsDatials;