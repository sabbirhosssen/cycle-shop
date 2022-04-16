import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
// import Particles from 'react-tsparticles';
const Bannar = () => {
    
    return (
        <div className='bg-white border-bottom border'>
           
            


             <Carousel className="dark">
            
         
         <Carousel.Item>
             <Image
                 className="d-block mx-auto"
                 
                 src="https://cd.bike-discount.de/media/image/3d/25/45/Fahrrad_en_800x800.jpg"
             
                 alt="Second slide"
                 height="640px"
                 width="100%"   
             />
             
             {/* <Carousel.Caption className=" text-white">
                
                 <p>Find out the best deals and book yours today</p> 
             </Carousel.Caption> */}
         </Carousel.Item>
         <Carousel.Item>
             <Image
                 className="d-block mx-auto"
                 src="https://res.cloudinary.com/hhit92yno/image/upload/c_fit,f_auto,h_2048,w_2048/v1/media/hsv1scghjj8esh3iseax.png"
                 alt="Second slide"
                 height="640px"
                 width="100%"
             />
             
             {/* <Carousel.Caption className=" text-white">
                 <h5>Vacation Packages</h5>
                 <p>Find out the best deals and book yours today</p>
             </Carousel.Caption> */}
         </Carousel.Item>
         <Carousel.Item>
             <Image
                 className="d-block mx-auto "
                 src="https://cdn.abacusepos.net/img/juliescycles/1cfea59e1c8277edba915e45d5f1bff4cd8632ce"
                 alt="Third slide"
              
                 height="640px"
                 width="100%"

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