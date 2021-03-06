import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { RiUserLine } from "react-icons/ri";
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Header.css';
const Header = () => {
  const{user,logOut}=useAuth()
    return (
        <div className='border-success border-bottom '>
            <Container >
            <Navbar collapseOnSelect expand="lg"  className=''>
  <Container>
  <Navbar.Brand as={Link} to="/" className='text-white text-bold fs-2'>Cycle Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/" className='hover text-white'>Home</Nav.Link>
      <Nav.Link as={Link} to="/shop" className='hover text-white'>Shop</Nav.Link>
      <Nav.Link as={Link} to="/news" className='hover text-white'>News</Nav.Link>
      
    </Nav>
  
    <Nav>
     
      
      <Nav.Link as={Link} to="dashboard/myorder" className='hover mt-1 me-2 text-white '>Dashboard</Nav.Link>
    {user?.email ?
                            <Button onClick={logOut} className="border-0  bg-success hover  mt-2 me-2 text-white" >Logout</Button> :
                            <Nav.Link as={Link} to="/login" className='ps-2 fs-3 '><RiUserLine className='text-green'/></Nav.Link>
                        }  
                        {user?.email ?
                              <Image  className=" rounded-circle mt-2" width="50px" height="50px" src= {user.photoURL}  ></Image>:<Outlet/>

                        }
                        
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </Container>
        </div>
    );
};

export default Header;