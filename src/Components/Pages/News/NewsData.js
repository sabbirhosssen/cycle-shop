import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { MdOutlineDateRange, MdOutlineInsertComment } from "react-icons/md";

const NewsData = ( {img,description,name,date}) => {
    return (
        <div>
              <Col>
               <Card className=" bg-dark bg-gradient text-white  " style={{height:"480px"}}>
                   <Image width="100%" height="230px" src={img} ></Image>
                   <Card.Body className='text-start mx-auto'>
                    <Card.Text className=' text_card'>
                    <MdOutlineDateRange/> {date} || <MdOutlineInsertComment/>1 Comments
                    </Card.Text >
                    <Card.Text className='text-success'>
                    <h5>{name}</h5>
                    </Card.Text>
                    <Card.Text>
                     {description}
                    </Card.Text>
    
                  </Card.Body>
                  {/* <Link to={`/${_id}`} > <button onClick={()=>handleClickShops(_id)} className='border-0 text-white btn btn-outline-black bg-success mb-1 ' >Add To Cart</button> </Link> */}
                 
                </Card>
                </Col>
        </div>
    );
};

export default NewsData;