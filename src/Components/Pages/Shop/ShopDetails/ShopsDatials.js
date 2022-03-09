import React from 'react';
import { useParams } from 'react-router-dom';

const ShopsDatials = () => {
    const params =useParams();
    console.log(params);
    return (
        <div>
            <h3>hello</h3>
        </div>
    );
};

export default ShopsDatials;