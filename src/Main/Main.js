import React from 'react'

function Main() {
    return (
        <div className=''>
            <Jumbotron></Jumbotron>
            <div className='container pb-5'>
                <div className='row'>
                    <div className='col-8'>
                        <img className='mb-3' style={{width:'100%'}} src='https://static.turbosquid.com/Preview/2019/10/10__11_30_38/Wind_Turbine_Editor_a_i3_result.png567ED0D7-83B3-4794-81C1-F6E31C5A190BDefaultHQ.jpg'/>

                        <div  className='d-flex justify-content-end'>
                            <img style={{width:'90%'}} src='https://img.freepik.com/fotos-premium/generacion-energia-turbina-eolica-planta-energia-eolica-3d-render_336913-237.jpg'/>                            
                        </div>

                    </div>
                    <div className='col-4 mt-5'>
                        <img style={{width:'100%', }} src='https://preview.free3d.com/img/2016/05/1840015203484304796/ivtoyj17.jpg'/>                            

                    </div>
                </div>

                <div className='row '>
                    <div className='col-12 py-5'>
                        
                        <p className=''>Since launching in 2013, we’ve served around half a billion people across the globe through our mobile apps.</p>

                    </div>

                    <div className='col-12 py-5'>
                        
                        <p>Since launching in 2013, we’ve served around half a billion people across the globe through our mobile apps.</p>

                    </div>

                    <div className='col-12 py-5'>
                        
                        <p>Since launching in 2013, we’ve served around half a billion people across the globe through our mobile apps.</p>

                    </div>

                </div>
            </div>

        </div>
    )
}

function Jumbotron() {
    return (
        <div className=' mb-5 jumbotron d-flex justify-content-center align-items-center' style={{height:'560px', width:'100%'}}>
            <div className='text-center'>
                <h1 className='color-logo'>CUBICA</h1>
                                
            </div>

        </div>
    )
}



export default Main