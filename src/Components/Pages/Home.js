import React from 'react';
import Bannar from './Bannar/Bannar';
import News from './News/News';
import Review from './Review/Review';
import Shop from './Shop/Shop6/Shop';
import Wallpaer from './WallPaper/Wallpaer';


const Home = () => {
    return (
        <div>
            <Bannar/>
            
            <Shop/>
            
            <Wallpaer/>
            <News/>
            <Review/>
         
        </div>
    );
};

export default Home;