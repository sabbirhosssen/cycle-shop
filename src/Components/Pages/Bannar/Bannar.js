import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const Bannar = () => {
    return (
        <div className='bg-white'>
             <Carousel variant="dark">
         
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