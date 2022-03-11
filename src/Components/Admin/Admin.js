import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Addshop from './Addshop/Addshop';
import './Admin.css';
import ManageReview from './ManageReview/ManageReview';
import Manageshop from './ManageShop/Manageshop';
const Admin = () => {
    return (
        <div>
             <div className='admin '>
          <div className='text-start add_nav bg-secondary '>
              <Link to='/admin/addshop' className='link text-white'>Add Cycle Shop </Link>
              <Link to='/admin/manageShop' className='link text-white' >Manage Shop Data </Link>
              <Link to='/admin/manageReview' className='link text-white' >Manage Review Data </Link>
              
              </div>
              <div className="disply-view">
                 <Routes>
                     <Route path='addshop' element={<Addshop/>}/>
                     <Route path='manageShop' element={<Manageshop/>}/>
                     <Route path='manageReview' element={<ManageReview/>}/>
                 </Routes>
                  
                  </div>

            
        </div>
        </div>
    );
};

export default Admin;