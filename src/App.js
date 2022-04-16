import { Route, Routes } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import Particles from 'react-tsparticles';
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
import PrivateRoute from './Components/Private/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
function App() {
  const particlesInit = (div) => {
        console.log(div);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (div) => {
        console.log(div);
      };
  return (
    <div className="App ">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 600,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            // value: "#282c34",
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            // color: "#282c34",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
       <ScrollToTop smooth color="rgb(0, 128, 0)" />
      <AuthProvider>
      <Header/>
      {/* <PrivateRoute></PrivateRoute> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shop' element={
          
        <Allshop/>
        }/>
        <Route path='/news' element={<News/>}/>

      
        <Route path='/login' element={<Login/>} />

        <Route path='shop/:Id' element={<ShopsDatials/>} />
        <Route path='/ordernow/:Id' element={
          <PrivateRoute>
            <OrderNow/>
          </PrivateRoute>
        }></Route>
       
        <Route path='/admin/*' element={<Admin/>} />
        <Route path='/dashboard/*' element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        } />
         
        
   
      </Routes>
       <Footer/>
      </AuthProvider>
      
    </div>
  );
}

export default App;
