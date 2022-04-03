import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Particles from 'react-tsparticles';
const Bannar = () => {
    const particlesInit = (div) => {
        console.log(div);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (div) => {
        console.log(div);
      };
    return (
        <div className='bg-white border-bottom border'>
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
            


             <Carousel className="dark">
            
         
         <Carousel.Item>
             <Image
                 className="d-block mx-auto"
                 src="https://www.pngitem.com/pimgs/m/279-2798758_cycle-vector-pink-bike-pink-bike-clipart-hd.png"
              
                 alt="Second slide"
                 height="580px"
                 width="80%"   
             />
             
             <Carousel.Caption className=" text-white">
                
                 {/* <p>Find out the best deals and book yours today</p> */}
             </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
             <Image
                 className="d-block mx-auto"
                 src="https://www.clipartkey.com/mpngs/m/58-587987_cycling-clipart-pink-bike-bike-with-basket-animated.png"
                 alt="Second slide"
                 height="580px"
                 width="80%"
             />
             
             {/* <Carousel.Caption className=" text-white">
                 <h5>Vacation Packages</h5>
                 <p>Find out the best deals and book yours today</p>
             </Carousel.Caption> */}
         </Carousel.Item>
         <Carousel.Item>
             <Image
                 className="d-block mx-auto "
                 src="https://www.seekpng.com/png/detail/18-184843_bicycle-png-hd-bicycle-clipart.png"
                 alt="Third slide"
              
                 height="580px"
                 width="80%"

             />
             {/* <Carousel.Caption className=" text-white">
                 <h5>Travel to the World</h5>
                 <p>Discover the hidden beauty from top to bottom</p>
             </Carousel.Caption> */}
         </Carousel.Item>
     </Carousel>
        </div>
    );
};

export default Bannar;