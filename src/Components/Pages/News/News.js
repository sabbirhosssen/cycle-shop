
import React from 'react';
import { Row } from 'react-bootstrap';
import NewsData from './NewsData';

const News = () => {
    return (
        <div className='mt-5'>
          <h1 className='text-success fs-1'>Our Latest News</h1>  

          <Row xs={1} md={3} className="g-4 p-5 h-100  m-5 m-0 border-0 rounded">
               <NewsData
               key='1'
               date="August 25, 2020"
                img="https://cdn.shopify.com/s/files/1/0434/2431/7599/articles/blog-7.jpg?v=1598335518"
                name="Cycling through The Night"
                description="Ut pellentesque rutrum lacus a pharetra. Phasellus arcu mi, volutpat eget ullamcorper quis, aliquet sit amet elit. Morbi aliquam sodales..."
               
               />
               <NewsData
               key='2'
               date="August 25, 2020"
                img="https://cdn.shopify.com/s/files/1/0434/2431/7599/articles/blog-6.jpg?v=1598335505"
                name="Change Gear on a Bicycle"
                description="Cras sagittis sapien tellus, id lacinia nunc suscipit vitae. Integer eget lectus et diam lobortis laoreet vitae id nunc. Pellentesque..."
               
               />
               <NewsData
               key='3'
               date="August 25, 2020"
                img="https://cdn.shopify.com/s/files/1/0434/2431/7599/articles/blog-5.jpg?v=1598335478"
                name="Gear Cycle with Disk Brake"
                description="Maecenas a ipsum volutpat, pharetra massa non, facilisis dolor. Fusce sodales nibh maximus lacinia iaculis. Donec quis malesuada lectus. Donec..."
               
               />
                </Row>
        </div>
    );
};

export default News;