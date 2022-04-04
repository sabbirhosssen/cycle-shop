import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Reviews from './Reviews';

const Review = () => {
    const [reviews,setReview]=useState([]);
    useEffect(()=>{
        fetch('https://evening-ocean-40382.herokuapp.com/allReview')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    
    return (
        <div>
            <h1 className='text-white'> Review</h1>
            <Row xs={1} md={3} className="g-3 p-5 h-100  m-0 border-0 rounded">
                {
                    reviews.map(reviews=><Reviews key={reviews._id} reviews={reviews}/>)
                }

                </Row>
        </div>
    );
};

export default Review;