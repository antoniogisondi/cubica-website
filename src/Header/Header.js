import React,{useState} from 'react'
import Socials from './Socials'

function Header() {

    const [formazione, setFormazione] = useState('')
 


    // const seeFormation = () =>{
    //     setFormazione(<Slider/>)
    // }

    // const seeComp = () =>{
    //     setFormazione(<Competence/>)
    // }

    const seeSocial = () =>{
        setFormazione(<Socials/>)
    }




    const mostraNulla = () =>{
        setFormazione('')
    }
    



    return (
        <div className='container-fluid menu'>
            <div className='row'>
                <div className='col-3 p-3 text-dark'>
                    <h2>CUBICA</h2>
                </div>
                <div className='col-9 d-flex text-center effect-border-bottom text-primary justify-content-end'>
                    <div onClick={mostraNulla}  className='col-2 p-3 '>
                        <h3>Home</h3>
                    </div>
                    <div className='col-2 p-3 '>
                        <h3>Contact</h3>
                    </div>
                    <div className='col-2 p-3 '>
                        <h3>About Us</h3>
                    </div>
                    <div onClick={seeSocial} className='col-2 p-3 '>
                        <h3>Social</h3>
                    </div>
                    

                </div>


            </div>
            {formazione}
        </div>
    )
}

export default Header