import React from 'react';
import { useParams } from 'react-router-dom';

const AllShopDetails = () => {
    const a =useParams();
    console.log(a);
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default AllShopDetails;