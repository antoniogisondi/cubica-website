import React,{useState} from 'react'
import Socials from './Socials'
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












        <div className='menu bg-header'>
            <Navbar expanded={expanded} className='bg-header p-0'  expand="lg">
                
                    <Navbar.Brand className='text-light p-0' href="#home"><h1>CUBICA</h1></Navbar.Brand>
                
                    <Navbar.Toggle className='text-light bg-white m-2' aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                    <Navbar.Collapse className='justify-content-end'  id="basic-navbar-nav ">
                        <Nav className="ml-auto text-center effect-border-bottom">
                            <Nav.Link className='text-light'  href="#home">
                                
                                    <h3 className=' m-3' >Home</h3>
                                
                            </Nav.Link>

                            <Nav.Link className='text-light'  href="#home">
                                
                                    <h3 className=' m-3' >About Us</h3>
                                
                            </Nav.Link>

                            <Nav.Link className='text-light'  href="#home">
                                
                                    <h3 className=' m-3' >Contact</h3>
                                
                            </Nav.Link>
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