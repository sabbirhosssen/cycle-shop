import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addshop from './Components/Addshop.js/Addshop';
import Footer from './Components/Footer/Footer';
import Header from './Components/Navbar/Header';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login/Login';
import News from './Components/Pages/News/News';
import Allshop from './Components/Pages/Shop/Allshop';
import ShopsDatials from './Components/Pages/Shop/ShopDetails/ShopsDatials';
// import ShopsDetails from './Components/Pages/Shop/ShopDetails/ShopsDetails';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App ">
      <AuthProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Allshop/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/addshop' element={<Addshop/>}/>
        <Route path='/login' element={<Login/>} />

        <Route path='/:shopId' element={<ShopsDatials/>} />
   
      </Routes>
       <Footer/>
      </AuthProvider>
      
    </div>
  );
}

export default App;
