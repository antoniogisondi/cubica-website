import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

function Header() {
    const [expanded, setExpanded] = useState(false);


    return (
        // <div className='container-fluid menu'>
        //     <div className='row'>
        //         <div className='col-3 p-3 text-dark'>
        //             <h2 >CUBICA</h2>
        //         </div>
        //         <div className='col-9 d-flex text-center align-items-center effect-border-bottom text-primary justify-content-end'>
        //             <div   className='col-2 p-3 '>
        //                 <h3 className='item-menu' >Home</h3>
        //             </div>
        //             <div className='col-2 p-3 '>
        //                 <h3 className='item-menu'>Contact</h3>
        //             </div>
        //             <div className='col-2 p-3 '>
        //                 <h3 className='item-menu'>About Us</h3>
        //             </div>
        //             <div  className='col-2 p-3 '>
        //                 <h3 className='item-menu'>Social</h3>
        //             </div>


        //         </div>


        //     </div>

        // </div>












        <div className='menu mb-5'>
            <Navbar expanded={expanded} className='bg-header  p-0' expand="lg">

                <Navbar.Brand className='text-light ps-3' to="/"><h1>CUBICA</h1></Navbar.Brand>

                <Navbar.Toggle className='text-light bg-secondary m-2' aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav ">
                    <Nav className="ml-auto text-center pe-3 effect-border-bottom">
                        <Link className='text-light header-link' to="/">

                            <h3 className=' p-4 mb-0 ' >Home</h3>

                        </Link>

                        <Link className='text-light  header-link' to="/about-us">

                            <h3 className=' p-4 mb-0' >About Us</h3>

                        </Link>

                        <Link className='text-light  header-link' to="/contact">

                            <h3 className=' p-4 mb-0' >Contact</h3>

                        </Link>
                        {/* <Nav.Link className='text-light' href="#link">
                                About us
                            </Nav.Link>
                            <Nav.Link className='text-light' href="#link">
                                Contact
                            </Nav.Link> */}


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>



    )
}

export default Header