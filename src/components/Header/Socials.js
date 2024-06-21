import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const socials = [
    {
        name: 'Instagram',
        logo:'https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-6.png',
        linkSocial: 'https://www.instagram.com/gianmauro___/'
    },
    {
        name: 'Linkedin',
        logo:'https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png',
        linkSocial: 'https://www.linkedin.com/in/gianmauro-coviello-a42062290/'
    },
    {
        name: 'GitHub',
        logo:'https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png',
        linkSocial: 'https://github.com/GianmauroCoviello',
       
    },
  
]


function Socials() {
  return (
    <div className='color-effect pb-2'>
        <div className='container  pt-3  py-5'>
            <div className='row pb-3'>
                
                {socials.map((social) => {
                    return(
                        <div className='col-sm-4 mb-0  text-center '>
                            {/* <h5 className=' text-center'>{social.name}</h5> */}
                                <h5 className='text-center my-3 text-dark'>{social.name}</h5>
                                <div className='zoom col-12 text-center'>
                                    <a href={social.linkSocial}><img  style={{width: '250px'}} src={social.logo} /></a>
                                </div>      
                        </div>
                    )
                } )}
            
            </div>

        </div>
    </div>

  )
}

export default Socials