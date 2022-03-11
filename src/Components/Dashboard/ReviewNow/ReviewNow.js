import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hook/useAuth';
import './Review.css';

const ReviewNow = () => {
    const {user}=useAuth()
    // console.log(user.photoURL);
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://evening-ocean-40382.herokuapp.com/allReview' ,data)
        .then(res =>{
            if(res.data.insertedId){
                alert("Added successfully")
                reset();
            }
            // console.log(res)
        })
    }
    return (
        <div>
            <h2 className='text-white fs-1 pt-5'>Review Product</h2>

            <div className='m-5'>
        
            <div className='add_book mx-auto'>
              <form onSubmit={handleSubmit(onSubmit)} className="" >
                  <label className='text-white  fs-3 '>Your Image Url</label>
              <input  {...register("img")} placeholder="Image url" 
              defaultValue={user.photoURL} />
              <input {...register("cycle_name", { required: true, maxLength: 30 }) } placeholder="Your Name"/>
            
              <textarea {...register("review", )} placeholder="Write A Review" />
             
             
              <input type="submit"  className='submit' />
              </form>
            </div>
        </div>
        </div>
    );
};

export default ReviewNow;