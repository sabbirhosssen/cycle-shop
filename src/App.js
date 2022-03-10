import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Header from './Components/Navbar/Header';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login/Login';
import News from './Components/Pages/News/News';
import Allshop from './Components/Pages/Shop/AllShop/Allshop';
import OrderNow from './Components/Pages/Shop/OrderNow';
import ShopsDatials from './Components/Pages/Shop/Shop6/ShopsDatials';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App ">
      
      <AuthProvider>
      <Header/>
      {/* <PrivateRoute></PrivateRoute> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={
          
        <Allshop/>
        }/>
        <Route path='/news' element={<News/> }/>

       
        <Route path='/login' element={<Login/>} />

        <Route path='shop/:Id' element={<ShopsDatials/>} />
        <Route path='/ordernow/:Id' element={<OrderNow/>}></Route>
       
        <Route path='/admin/*' element={<Admin/>} />
        <Route path='/dashboard/*' element={<Dashboard/>} />
         
        
   
      </Routes>
       <Footer/>
      </AuthProvider>
      
    </div>
  );
}

export default App;
