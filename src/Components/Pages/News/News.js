
import React from 'react';
import { Row } from 'react-bootstrap';
import NewsData from './NewsData';

const News = () => {
    return (
        <div className='mt-5'>
          <h1 className='text-white fs-1'>Our Latest News</h1>  

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
               date="August 28, 2020"
                img="https://cdn.shopify.com/s/files/1/0434/2431/7599/articles/blog-3_ceb63865-c406-4059-afc5-d459b78b9317_1024x1024_1_600x.jpg?v=1595492731"
                name="A Brief History of Cycling"
                description="Vestibulum at suscipit leo, nec dapibus risus. Donec quis interdum tellus. Aliquam fringilla metus risus, vitae dictum nulla laoreet quis.... "
               
               />
               <NewsData
               key='3'
               date="August 25, 2020"
                img="https://cdn.shopify.com/s/files/1/0434/2431/7599/articles/blog-2_1c1fc410-e356-452d-9f29-179f2d438e62_1024x1024_1.jpg?v=1595492718"
                name="Different Types of Bicycle Brakes"
                description="Lectus nulla at volutpat diam ut venenatis. Eu non diam phasellus vestibulum lorem sed risus ultricies ..."
               
               />
                </Row>
        </div>
    );
};

export default News;