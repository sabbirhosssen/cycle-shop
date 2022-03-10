import React from 'react';
import { Link } from 'react-router-dom';
import './WallPaper.css';
const Wallpaer = () => {
    return (
        <div className='bg-white bg-wall'>
         <div className='text-start p-5 pt-5 ps-5'> 
             <hr className=' text-success border border-success  bg-sucess p-1 w-25' />
             <h1 className='text-success'>Innovating to reimagine riding bicycle</h1>
             <div className='pt-4'>
                 Phasellus eget condimentum nibh. Nunc id enim id velit commodo efficitur. <br/>Duis auctor, mauris in maximus cursus, purus neque ultricies velit
            </div>
            <br />
            <div>Vivamus a turpis nisi. Fusce feugiat feugiat congue in mauris id sollicitudin.</div>
            <Link to={`/shop/`} className> <button  className='border-0 text-white btn btn-outline-success bg-success  mb-1 mt-5 ' >Add To Cart</button> </Link>
         </div>
         
        </div>
    );
};

export default Wallpaer;