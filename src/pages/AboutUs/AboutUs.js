import React from 'react'
import Header from '../../components/Header/Header'

import Footer from '../../components/Footer/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutUs() {
    return (
        <div >
            <Header/>
            <div style={{ marginTop:'120px'}} className='container '>
                <div className='row justify-content-center align-items-center pb-5'>
                    <h1 className='text-center text-light pb-5'> <span className='color-logo'>About Us</span> </h1>
                    <div className=' col-md-7 col-lg-6 col-xl-4 col-12 pb-5 '>
                        
                        <img style={{width:'100%', borderRadius:'50px'}} src='https://www.istmira.com/uploads/posts/2019-01/1548092682_70347-programming-mark-zuckerberg-entrepreneur-computer-facebook-code_org.png'/>
                    </div>
                    <div className='col-xl-6 col-11 text-light text-center'>
                        <h3>Marco Carretta</h3>
                        <h4 className='color-logo'>Founder e Advisor</h4>
                        <p className='text center color-paragraph'>Marco Carretta è un imprenditore visionario nel settore delle energie rinnovabili, noto per aver fondato una delle aziende più innovative nel campo degli investimenti eolici. Con una laurea in ingegneria ambientale e una passione per la sostenibilità, Carretta ha avviato la sua impresa con l'obiettivo di promuovere l'energia pulita e ridurre l'impatto ambientale. La sua azienda si distingue per l'approccio innovativo nell'utilizzo delle tecnologie più avanzate per ottimizzare la produzione di energia eolica, contribuendo significativamente alla transizione energetica globale. </p>
                        <div className='d-flex justify-content-center '>
                            
                            <div className='col-6 d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon style={{fontSize:'80px'}} className='text-light' icon="fa-brands fa-linkedin" />
                                
                            </div>
                        </div>
                    </div>


                        
                    
                </div>

                
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs