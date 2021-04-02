import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
import {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="header-area">
        
           <div className="container">
           <div className="menu-area text-center">
           <Navbar expand="lg">
                <Navbar.Brand><Link to="/home"><h2 className="logo">Fresh Fruits</h2></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto color-style">
                        <Nav.Link ><Link to="/home" className="nav-link">Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/orders" className="nav-link">Orders</Link></Nav.Link>
                        <Nav.Link ><Link to="/admin" className="nav-link">Admin</Link></Nav.Link>
                        <Nav.Link >{
                         loggedInUser.email ?  <button className="signOutBtn" onClick={()=> setLoggedInUser({})}>Logout</button> : <Link to="/login" className="nav-link login-btn">Login</Link>
                       }</Nav.Link>
                        <Nav.Link ><h5 className="mt-2">{loggedInUser.name}</h5></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
           </div>
           </div>

        </div>
    );
};

export default Header;