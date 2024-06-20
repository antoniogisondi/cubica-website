import React from 'react'


function Main() {




    return (
        <div>
            {/* <Jumbotron></Jumbotron> */}
            

            <div className='container text-light px-3'>

            
                <h1 className=' title-paragr'>I nostri <span className='color-logo'>Obbiettivi</span></h1>

                <div className='row paragraph color-paragraph'>
                    
                    <div className='col-md-10 col-12 py-5 '>
                        
                        <p className=''>Diventare il primo operatore di eolico diffuso in Italia nella taglia sub MW, aggregando
                        almeno 100 macchine nei prossimi md-10 col-12-18 mesi</p>

                    </div>

                    <div className='col-md-10 col-12 py-5'>
                        
                        <p>Garantire un rendimento più che doppio rispetto alla media del settore</p>

                    </div>

                   
                </div>
            </div>


            <div className='container text-light px-3'>

            
                <h1 className=' title-paragr'>Come <span className='color-logo'>Svilupparlo</span></h1>

                <div className='row paragraph color-second-paragraph'>
                    
                    <div className=' col-md-10 col-12 py-5'>
                        
                        <p className=''>Acquisire impianti eolici, aggiornando la tecnologia e migliorando l’efficienza</p>

                    </div>

                    <div className='col-md-10 col-12 py-5'>
                        
                        <p>Sfruttare a pieno I benefici della concentrazione e tutte le economie di scala ottenibili nel
                        segmento</p>

                    </div>

                    <div className='col-md-10 col-12 py-5'>
                        
                        <p>Beneficiare di rilevanti sinergie interne ed Utilizzare una strategia d’investimento innovativa</p>

                    </div>    
                </div>    
            </div>


            <div className='container pb-5'>
                <div className='row'>
                    <div className='col-xl-8 col-12'>
                        <img className='mb-3' style={{width:'100%'}} src='https://static.turbosquid.com/Preview/2019/10/10__11_30_38/Wind_Turbine_Editor_a_i3_result.png567ED0D7-83B3-4794-81C1-F6E31C5A190BDefaultHQ.jpg'/>

                        <div  className='d-flex justify-content-end'>
                            <img style={{width:'90%'}} src='https://img.freepik.com/fotos-premium/generacion-energia-turbina-eolica-planta-energia-eolica-3d-render_336913-237.jpg'/>                            
                        </div>

                    </div>
                    <div className='col-xl-4 col-12 mt-5'>
                        <img style={{width:'100%', }} src='https://preview.free3d.com/img/2016/05/1840015203484304796/ivtoyj17.jpg'/>                            

                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xl-6 col-12 p-3 pb-5 '>
                        <div className='d-flex justify-content-center'>
                            <div className=' color-point d-flex justify-content-center align-items-center' style={{borderRadius:'50%', height:'250px' , width: '250px'}}>
                                <h1 className='dimension-num'>1</h1>
                            </div>                            
                        </div>
                        <h3   className='text-center pt-5 dimension-description-point text-light'>Acquisto degli <span className='color-logo'>impianti</span> </h3>
                        
                    </div>

                    <div className='col-xl-6 col-12 p-3 pb-5 '>
                        <div className='d-flex justify-content-center'>
                            <div className=' color-point d-flex justify-content-center align-items-center' style={{borderRadius:'50%', height:'250px' , width: '250px'}}>
                                <h1 className='dimension-num'>2</h1>
                            </div>                            
                        </div>
                        <h3 className='text-center pt-5 dimension-description-point text-light'><span className='color-logo'>Ottimizzazione</span> delle turbine inefficienti</h3>
                        
                    </div>

                    <div className='col-xl-6 col-12 p-3 pb-5 '>
                        <div className='d-flex justify-content-center'>
                            <div className=' color-point d-flex justify-content-center align-items-center' style={{borderRadius:'50%', height:'250px' , width: '250px'}}>
                                <h1 className='dimension-num'>3</h1>
                            </div>                            
                        </div>
                        <h3 className='text-center pt-5 dimension-description-point text-light'>Richiesta delle autorizzazioni per <span className='color-logo'>l’Incremento della capacità</span>
                        </h3>
                        
                    </div>

                    <div className='col-xl-6 col-12 p-3 pb-5 '>
                        <div className='d-flex justify-content-center'>
                            <div className=' color-point d-flex justify-content-center align-items-center' style={{borderRadius:'50%', height:'250px' , width: '250px'}}>
                                <h1 className='dimension-num'>4</h1>
                            </div>                            
                        </div>
                        <h3 className='text-center pt-5 dimension-description-point text-light'>Gestione delle turbine in siti a <span className='color-logo'> basso potenziale</span></h3>
                        
                    </div>
                        
                    
                </div>
            </div>
        </div>
    )
}

function Jumbotron() {
    return (
        <div className=' mb-5 jumbotron d-flex justify-content-center align-items-center' style={{height:'560px', width:'100%', }}>
            

        </div>
    )
}



export default Main