import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Addshop from './Addshop/Addshop';
import './Admin.css';
const Admin = () => {
    return (
        <div>
             <div className='admin'>
          <div className='text-start add_nav'>
              <Link to='/admin/addshop' className='link'>Add Cycle Shop </Link>
              <Link to='/admin/addOrder' className='link'>Add Mange All Order </Link>
              <Link to='/admin/hi' className='link'>Hi</Link>
              
              </div>
              <div className="disply-view">
                 <Routes>
                     <Route path='addshop' element={<Addshop/>}/>
                     <Route path='addOrder' element={<h1>hello</h1>}/>
                     <Route path='hi' element={<h1>hi</h1>}/>
                 </Routes>
                  
                  </div>

            
        </div>
        </div>
    );
};

export default Admin;