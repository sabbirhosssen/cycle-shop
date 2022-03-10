import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const Allshops = ({shop}) => {
    const {img,_id,price,cycle_name}=shop
    const navigate =useNavigate();
    const handleClickShops=(e)=>{
      
      const shop = `/shop/_id`
      navigate(shop)
    }
    return (
        <div>
              <Col>
               <Card className=" bg-dark bg-gradient text-white  " style={{height:"455px"}}>
                   <Image width="100%" height="230px" src={img} ></Image>
                   <Card.Body className='text-start mx-auto '>
                    <Card.Text className=' text_card'>
                    <div className='d-inlineblock '>
                      <AiFillStar className='text-success'  />
                      <AiFillStar className='text-success' />
                      <AiFillStar className='text-success' />
                      <AiFillStar className='text-success' />
                      <AiOutlineStar className='text-white'/>
                    </div>
                    </Card.Text >
                    <Card.Text className='text-success'>
                    {cycle_name}
                    </Card.Text>
                    <Card.Text>
                      Price: {price} tk
                    </Card.Text>
    
                  </Card.Body>
                  <Link to={`/shop/${_id}`} > <button onClick={()=>handleClickShops(_id)} className='border-0 text-white btn btn-outline bg-success mb-1 ' >Add To Cart</button> </Link>
                 
                </Card>
                </Col>
        </div>
    );
};

export default Allshops;