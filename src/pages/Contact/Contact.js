import React from 'react'
import Header from '../../components/Header/Header'

import Footer from '../../components/Footer/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact() {
    return (
        <div >
            <Header></Header>
            <div style={{ marginTop:'120px'}} className='container '>
                <div className='row justify-content-center align-items-center pb-5'>
                    <h1 className='text-center text-light pb-5'><span className='color-logo'>Contact Us</span> </h1>
                    
                    <div className='col-md-4 col-12 text-center'>
                        <FontAwesomeIcon style={{fontSize:'150px'}} className='text-light' icon="fa-brands fa-linkedin" />
                        <p className='text-light'>Linkedin</p>
                    </div>
                    <div className='col-md-4 col-12 text-center'>
                        <FontAwesomeIcon style={{fontSize:'150px'}} className='text-light' icon="fa-brands fa-instagram" />
                        <p className='text-light'>Instagram</p>
                    </div>
                    <div className='col-md-4 col-12 text-center'>
                        <FontAwesomeIcon style={{fontSize:'150px'}} className='text-light' icon="fa-solid fa-envelope" />
                        <p className='text-light'>example@gmail.com</p>
                    </div>
                    
                    
                    
                </div>
            </div>
                       
            <Footer/>
        </div>
    )
}

export default Contact