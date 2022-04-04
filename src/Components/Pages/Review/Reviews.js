import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
const Reviews = ({reviews}) => {
    const{img,review,cycle_name}=reviews;
    return (
        <div>
             <Col>
               <Card className=" bg-dark bg-gradient text-white  " >
                   <Image width="140px" className="rounded-circle mx-auto mt-3" src={img} ></Image>
                   <Card.Body className=' mx-auto'>
                    <Card.Text className=' text_card'>
                    <div className='d-inlineblock '>
                      <AiFillStar className='text-success'  />
                      <AiFillStar className='text-success' />
                      <AiFillStar className='text-success' />
                      <AiFillStar className='text-success' />
                      <AiOutlineStar className='text-white'/>
                    </div>
                    </Card.Text >
                    <Card.Text className='text-success fs-4'>
                    {cycle_name}
                    </Card.Text>
                    <Card.Text className='text-start'>
                      {review}
                    </Card.Text>
    
                  </Card.Body>
                  
                 
                </Card>
                </Col>
        </div>
    );
};

export default Reviews;