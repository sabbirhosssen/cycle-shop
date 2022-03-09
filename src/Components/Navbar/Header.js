import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineShopping } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Header.css';
const Header = () => {
  const{user,logOut}=useAuth()
    return (
        <div className='nav_bg '>
            <Container >
            <Navbar collapseOnSelect expand="lg"  className='Hover'>
  <Container>
  <Navbar.Brand as={Link} to="/" className='hover fs-2'>Cycle Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link as={Link} to="/" className='hover'>Home</Nav.Link>
      <Nav.Link as={Link} to="/shop" className='hover'>Shop</Nav.Link>
      <Nav.Link as={Link} to="/news" className='hover'>News</Nav.Link>
      <Nav.Link as={Link} to="/pages" className='hover'>Pages</Nav.Link>
    </Nav>
    {/* <Nav>
    <Nav.Link as={Link} to="/login"><RiUserLine/></Nav.Link>
      <Nav.Link as={Link} to="/login"><AiOutlineShopping/></Nav.Link>
    </Nav> */}
    <Nav>
    {user?.email ?
                            <Button onClick={logOut} className="hover bg-transparent mt-3" >Logout</Button> :
                            <Nav.Link as={Link} to="/login" className='ps-2 fs-3'><RiUserLine/></Nav.Link>
                        }  
                        {user?.email ?
                              <Image  className=" rounded-circle mt-3" width="50px" height="50px" src= {user.photoURL}  ></Image>:<Outlet/>

                        }
                         <Nav.Link as={Link} to="/card" className='ps-2 fs-3'><AiOutlineShopping/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </Container>
        </div>
    );
};

export default Header;