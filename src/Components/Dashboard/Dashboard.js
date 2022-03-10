import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Addshop from './Addshop/Addshop';
import './Dashboard.css';
const Dashboard = () => {
    return (
        <div className='dashboard'>
          <div className='text-start add_nav'>
              <Link to='/dashboard/addshop' className='link'>Add Cycle Shop </Link>
              <Link to='/dashboard/hello' className='link'>Hello </Link>
              <Link to='/dashboard/hi' className='link'>Hi</Link>
              
              </div>
              <div className="disply-view">
                 <Routes>
                     <Route path='addshop' element={<Addshop/>}/>
                     <Route path='hello' element={<h1>hello</h1>}/>
                     <Route path='hi' element={<h1>hi</h1>}/>
                 </Routes>
                  
                  </div>

            
        </div>
    );
};

export default Dashboard;