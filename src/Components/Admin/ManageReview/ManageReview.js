import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ManageReview = () => {
    const [review,setReview]=useState([])
    useEffect(()=>{
        fetch('https://evening-ocean-40382.herokuapp.com/allReview')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])

const handleDeleteReview=(id)=>{
    const url = `https://cycle-shop-server-sabbirhosssen.vercel.app/allReview/${id}`
    fetch(url, {
        method:'DELETE'
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        if (data.deletedCount) {
            alert('deleted')
            const remmaining = review.filter(shop=>shop._id !== id)
            setReview(remmaining)
            
        }
    })
    console.log('hi');
}
    return (
        <div>
            <h2 className='text-white pt-4'>All Manage Review Data</h2>
            {
                review.map( review => <div key={review._id} className="d-block m-5 ">
                     <div className='d-flex  justify-content-space-between   rounded-3 bg-secondary  w-100 overflow-hidden'>
                         <div className='text-white p-5 text-start'>
                         <h4 className='fs-3'>Name : {review.cycle_name}</h4>
                             <h2 className='fs-6'> Image url: {review.img}</h2>
                             <h2 className='fs-6'> review : {review.review}</h2>
                             
                             <Button className='bg-success border-0 mb-2' onClick={()=> handleDeleteReview(review._id)}>Delete</Button>
                         </div>
                        
                     </div>

                     </div>)
            }

        </div>
    );
};

export default ManageReview;