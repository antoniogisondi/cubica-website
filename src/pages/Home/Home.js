import React from 'react'
import Main from '../../components/Main/Main'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Jumbotron from '../../components/Main/Jumbotron'

function Home() {
    return (
        <>

            <Header />
            <Jumbotron></Jumbotron>
            <Main />
            <Footer />
        </>
    )
}

export default Home