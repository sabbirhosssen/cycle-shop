import React from 'react';
import Bannar from './Bannar/Bannar';
import Review from './Review/Review';
import Shop from './Shop/Shop';

const Home = () => {
    return (
        <div>
            <Bannar/>  
            <Shop/>
            <Review/>
         
        </div>
    );
};

export default Home;