import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import './OrderNow.css';

const OrderNow = () => {
    const {user} =useAuth()
    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/allOrder' ,data)
        .then(res =>{
            if(res.data.insertedId){
                alert("Buy Product successfully",navigate('/dashboard/myorder'))
                reset();
            }
            console.log(res)
        })
    }
    return (
        <div>
                      
          <div className='m-5'>
          <h3 className='text-center text-white'>Confrom Order Now</h3>
            <div className='add_book mx-auto'>
              <form onSubmit={handleSubmit(onSubmit)} className="" >
              <input {...register("Id_product", { required: true, maxLength: 40 })} placeholder="Product Id" className="visually-hidden" defaultValue={params.Id}></input>
              <input {...register("name", { required: true, maxLength: 40 })} placeholder="Name" className="" defaultValue={user?.displayName}></input>
                    <input {...register("email", { required: true, maxLength: 80 })} placeholder="Name" className="" defaultValue={user?.email}></input>
                    <input type="number" {...register("Number", { required: true })} placeholder="Phone Number"
                        className=" my-2" />
                    <textarea {...register("address")} placeholder="Full Address"
                        className=" my-2" />

                   

                  
             
             
              <input type="submit"  className='submit' />
              </form>
            </div>
        </div>
            
        </div>
    );
};

export default OrderNow;