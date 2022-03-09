import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Navbar/Header';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login/Login';
import Shop from './Components/Pages/Shop/Shop';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App ">
      <AuthProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/login' element={<Login/>} />
   
      </Routes>
       <Footer/>
      </AuthProvider>
      
    </div>
  );
}

export default App;
