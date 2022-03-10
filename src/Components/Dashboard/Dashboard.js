import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Dashboard.css';
import MyOrder from './MyOrder/MyOrder';
import Pay from './Pay/Pay';
import ReviewNow from './ReviewNow/ReviewNow';
const Dashboard = () => {
    const {user}=useAuth();
    return (
       
        <div className='dashboard'>
          <div className='text-start add_nav bg-secondary'>
              
              <Link to='/dashboard/myorder' className='link'>My Orders </Link>
              <Link to='/dashboard/review' className='link'>Reviews  </Link>
              <Link to='/dashboard/pay' className='link'>Pay </Link>
              {user?.email ?
                 <Link as={Link} to="/admin/addshop" className='link'>Admin</Link>:<Outlet/>
               }
              </div>
              <div className="disply-view">
                 <Routes>
                     <Route path='myorder' element={<MyOrder/>}/>
                     <Route path='review' element={<ReviewNow/>}/>
                     <Route path='pay' element={<Pay/>}/>
                 </Routes>
                  
                  </div>

            
        </div>
    );
};

export default Dashboard;