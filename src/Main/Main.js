import React from 'react'

function Main() {
    return (
        <div className='mt-1'>
            <Jumbotron></Jumbotron>
            
        </div>
    )
}

function Jumbotron() {
    return (
        <div className=' jumbotron d-flex justify-content-center align-items-center' style={{height:'560px', width:'100%'}}>
            <div className='text-center'>
                <h1 className='color-logo'>CUBICA</h1>
                                
            </div>

        </div>
    )
}



export default Main