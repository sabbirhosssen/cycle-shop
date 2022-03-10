import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Addshop from './Addshop/Addshop';
import './Admin.css';
import Manageshop from './ManageShop/Manageshop';
const Admin = () => {
    return (
        <div>
             <div className='admin'>
          <div className='text-start add_nav'>
              <Link to='/admin/addshop' className='link'>Add Cycle Shop </Link>
              <Link to='/admin/manageShop' className='link'>Manage Shop Data </Link>
              <Link to='/admin/hi' className='link'>Hi</Link>
              
              </div>
              <div className="disply-view">
                 <Routes>
                     <Route path='addshop' element={<Addshop/>}/>
                     <Route path='manageShop' element={<Manageshop/>}/>
                     <Route path='hi' element={<h1>hi</h1>}/>
                 </Routes>
                  
                  </div>

            
        </div>
        </div>
    );
};

export default Admin;