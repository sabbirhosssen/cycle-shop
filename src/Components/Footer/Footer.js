import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className=' bg-white'>
           <div className="m-0 mb-0  bg-gray text-drak  border-top   ">
    <div className="container">
        <div className="row pt-3 py-2">
            {/* colam 1  */}
            <div className="col-md-4 col-sm-6 ">
               
                <p className="py-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ab perspiciatis incidunt veritatis fugiat quos facilis veniam aliquam consequuntur illum?
                </p>
                <h5>House # 324,Jatrabari ,Dhaka 1204</h5>
                <h5>Hotline : 20789 , +8809757656789</h5>
                <h5>cycleshop.com</h5>
            </div>
            {/* colam 3  */}
            <div className="col-md-4 col-sm-6">
                <h3 className="text-blue py-2">Cycle Visitor Counter</h3>
                <ul className="list-unstyled">
                    <li className="py-3">Total visitor : 64964336</li>
                    <li className="py-3">unique visitor : 50043</li>
                    <li className="py-3">Page visitor : 10003849</li>

                </ul>
            </div>
            {/* colam 3  */}
            <div className="col-md-4 col-sm-6">
                <h3> Contact Us</h3>
                <ul className="list-unstyled py-4">
                    <li className="py-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />

                    </li>

                    <InputGroup>
                        <FormControl as="textarea" aria-label="With textarea" placeholder="Messeage" />
                    </InputGroup>


                    <li className="py-3"><Button className="bg-success  ">Submit</Button></li>
                </ul>
            </div>

        </div>
        <p className="text-white pt-3">Copyright © 2021 .  cycleshop.com</p>
    </div>

</div>
        </div>
    );
};

export default Footer;