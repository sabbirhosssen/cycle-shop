import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./Addshop.css";
const Addshop = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://cycle-shop-server-sabbirhosssen.vercel.app/allCycle' ,data)
        .then(res =>{
            if(res.data.insertedId){
                alert("Added successfully")
                reset();
            }
            console.log(res)
        })
    }
    return (
        <div>
          
          <div className='m-5'>
          <h3 className='text-center text-white'>Add Cycle Shop Items</h3>
            <div className='add_book mx-auto'>
              <form onSubmit={handleSubmit(onSubmit)} className="" >
              <input  {...register("img")} placeholder="Image url" />
              <input {...register("cycle_name", { required: true, maxLength: 30 }) } placeholder="Cycle Name"/>
              <input {...register("type", { required: true, maxLength: 30 }) } placeholder="type" />
              <input type="number" {...register("price")} placeholder="Price" />
              <input type="number" {...register("size")} placeholder="Size" />
              <textarea {...register("description", )} placeholder="Description" />
             
             
              <input type="submit"  className='submit' />
              </form>
            </div>
        </div>
        </div>
    );
};

export default Addshop;