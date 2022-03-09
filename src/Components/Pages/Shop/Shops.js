import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const Shops = ({shop}) => {
    const {img,title}=shop;
    return (
        <div>
             <Col>
               <Card className=" bg-dark bg-gradient text-white " style={{height:"660px"}}>
                   <Image width="100%" height="390px" src={img} ></Image>
                   <Card.Body className=' '>
                    <Card.Text className=' text_card'>
                         <Card.Title>{title}</Card.Title>
                      {/* <Card.Text>{writer}</Card.Text> */}
                    </Card.Text>
                    {/* <div className='d-inlineblock '>
                      <AiFillStar className='text-success'  />
                      <AiFillStar className='text-success' />
                      <AiFillStar className='text-success' />
                      <AiFillStar className='text-success' />
                      <AiOutlineStar className='text-white'/>
                    </div> */}
                    <Card.Text>
                      Delivery Price :tk
                    </Card.Text>
    
                  </Card.Body>
                  {/* <Link to={`/books/${_id}`} > <button onClick={()=>handleClickBooks(_id)} className='border-0 text-white btn btn-outline-warning bg_card mb-1 '>Add To Cart</button> </Link> */}
                 
                </Card>
                </Col>
        </div>
    );
};

export default Shops;